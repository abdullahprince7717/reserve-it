import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons/"
import { HelperText, TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from 'react';
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth, storage } from '../../firebase/FirebaseConfig.js'
// import google from 'googleapis'

// const CLIENT_ID = '116657316456-l4smh6jsae66ntdvu7afdnfgqcmp8sec.apps.googleusercontent.com'
// const CLIENT_SECRET = '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'
// const redirect




// initializeApp(firebaseConfig)


const BusinessDetails = (props) => {
    // const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Restaurant', value: 'restaurant' },
        { label: 'Salon', value: 'salon' },
        { label: 'Doctor', value: 'doctor' }
    ]);


    useEffect(() => {
        console.log(auth.currentUser.uid);

        console.log(image ? image : "no image");
    }, [])

    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [category, setCategory] = useState("");
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');

    const businessDoc = doc(db, "business_users", auth.currentUser.uid);
    // const businessDoc = doc(db, "business_users", "auth.uid");

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [text, setText] = useState('');
    const onChangeText = text => setText(text);
    const hasErrors = () => {
        return !businessEmail.includes('@');
    };


    const addBusinessInfo = async () => {

        const business = {
            business_name: businessName,
            business_address: businessAddress,
            business_email: businessEmail,
            category: category,
            business_phone: businessPhone,
            business_description: businessDescription,
            instagram: instagram,
            facebook: facebook,
            image: "https://source.unsplash.com/user/c_v_r/1900x800"

        }
        console.log(auth.currentUser.uid)

        await setDoc(businessDoc, business, { merge: true })
            .then(
                (res) => {
                    console.log("response" + res)
                })
            .catch(
                (err) => {
                    console.log("error" + err)
                });
    };

    const pickImage = async () => {


        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            // aspect: [5, 10],
            // quality: 1,
            base64: true,
        });



        console.log("result: " + result);
        console.log(JSON.stringify(result));
        console.log("result.uri: " + result.uri);

        if (!result.cancelled) {
            setImage(result.uri);

            //         // const storage = getStorage();
            //         // const refer = ref(storage, "image.jpg")
            //         // const img = await fetch(image)
            //         // const bytes = await img.Blob();

            //         // await uploadBytes(refer, bytes)
        }
    };



    const deleteImage = () => {
        setImage(null);
    }

    // const uploadImage =  () => {
    //     // const storage = getStorage();
    //     const refer = ref(storage,"image.jpg")
    //     const img  = fetch(image)
    //     const bytes = img.Blob();

    //      uploadBytes(refer,bytes)
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    // }


    const uploadImage = async () => {
        setUploading(true);

        try {
            const uri = image;
            let filename = uri.substring(uri.lastIndexOf('/') + 1);

            if (!image) return;
            const storageRef = ref(storage, `products/${filename}`);
            const uploadTask = uploadBytesResumable(storageRef, uri);

            console.log(filename)
            console.log(`products/${filename}`)

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(snapshot.bytesTransferred)

                    // setProgress(prog);
                },
                (error) => console.log(error),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                    });
                }
            );
        }
        catch (err) {
            // Alert.alert(
            //     "Error uploading image!"
            // )
            console.log(err)
        }

        // const getPictureBlob = (uri) => {
        //     // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        //     return new Promise((resolve, reject) => {
        //         const xhr = new XMLHttpRequest();
        //         xhr.onload = function () {
        //             resolve(xhr.response);
        //         };
        //         xhr.onerror = function (e) {
        //             console.log(e);
        //             reject(new TypeError("Network request failed"));
        //         };
        //         xhr.responseType = "blob";
        //         xhr.open("GET", image, true);
        //         xhr.send(null);
        //     });
        // };

        // const uploadImage = async () => {
        // const storage = getStorage();
        //     const refer = ref(storage,"image.jpg")
        //     const img  = fetch(image)
        //     const bytes = img.Blob();

        //      uploadBytes(refer,bytes)
        //     .then((res)=>{
        //         console.log(res)
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     })
    };

    // const uploadImage = () => {
    //     if (!image[0]) return;
    //     const arr = [];

    //     for (let i = 0; i < image.length; i++) {
    //         const storageRef = ref(storage, `products/${image[i].name}`);
    //         const uploadTask = uploadBytesResumable(storageRef, image[i]);

    //         uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    //                 setProgress(prog);
    //             },
    //             (error) => console.log(error),
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //                     console.log(url);
    //                     arr.push(url);
    //                     setUrls(arr);
    //                 });
    //             }
    //         );
    //     }
    // };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginTop: 20 }}>
                    Business Details
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -15 }}>
                    {/* <Ionicons color="#57B9BB" name="business" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Name"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                        value={businessName}
                        onChangeText={text => setBusinessName(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Email"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                        value={businessEmail}
                        onChangeText={text => setBusinessEmail(text)}
                        // error = {true}
                        // onFocus = {console.log("focused")}
                        // onBlur = {console.log("blurred")}
                    />
                    {/* <HelperText type="error" visible={hasErrors()}>
                        Email address is invalid!
                    </HelperText> */}
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Address"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                        value={businessAddress}
                        onChangeText={text => setBusinessAddress(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Phone"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                        value={businessPhone}
                        onChangeText={text => setBusinessPhone(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <DropDownPicker
                        open={open}
                        value={category}
                        items={items}
                        setOpen={setOpen}
                        setValue={setCategory}
                        setItems={setItems}
                        style={{
                            backgroundColor: "#E7E7E7",
                            borderRadius: 5,
                            height: 55,
                        }}
                        containerStyle={{
                            width: '85%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30
                        }}
                        textStyle={{
                            fontSize: 15
                        }}
                        labelStyle={{
                            fontWeight: "bold"
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <Feather color="#57B9BB" name="phone" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Description"
                        placeholderTextColor={"grey"}
                        multiline={true}
                        underlineColorAndroid='transparent'
                        style={styles.description}
                        mode="outlined"
                        value={businessDescription}
                        onChangeText={text => setBusinessDescription(text)}

                    />
                </View>

                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginTop: 20 }}>
                    Social Media
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -15 }}>
                    {/* <Feather color="red" name="instagram" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        placeholder="Instagram"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        value={instagram}
                        onChangeText={text => setInstagram(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <Feather color="blue" name="facebook" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        placeholder="Facebook"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        value={facebook}
                        onChangeText={text => setFacebook(text)}
                    />
                </View>

                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginTop: 20 }}>
                    Select a Banner Image
                </Text>

                {/* <AddImages uri = {image} /> */}
                <View style={{ flex: 1, flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>

                    <View style={{ flexDirection: "row", margin: 10 }}>
                        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 13 }} />}

                        <View style={{ justifyContent: 'center', margin: 10 }}>
                            {image &&
                                <Button icon="delete" color='red' onPress={deleteImage} />}
                        </View>

                    </View>

                    <View style={{ margin: 15, marginBottom: 20 }}>
                        <Button icon="camera" mode="outlined" color='#57B9BB' onPress={pickImage}>
                            {image ? <Text>Reselect the picture</Text> : <Text>Select a Picture from Gallery</Text>}
                        </Button>
                    </View>

                </View>

            </ScrollView>
            <View style={{ justifyContent: 'center', margin: 20, marginTop: 2 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Pressed SAVE")
                        addBusinessInfo();
                        uploadImage();
                        // props.navigation.navigate('AccountSetup3')
                        props.navigation.navigate('AccountSetup3test')
                    }}
                >

                    <Text style={{ color: '#fff', fontSize: 17 }}>
                        NEXT
                    </Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
};

export default BusinessDetails;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    textInput: {
        width: '85%',
        // borderWidth:1,
        // borderColor: '#000',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#000',
        // padding:10,

    },
    description: {
        width: '85%',
        // borderWidth:1,
        // borderColor: '#000',
        height: 95,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#000',
        padding: 10,

    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth - 45,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

});
