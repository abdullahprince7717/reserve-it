import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons/"
import { HelperText, TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState, useEffect } from 'react';
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth, storage } from '../../firebase/FirebaseConfig.js';
import axios from "axios"

import getFileExtension from '../../utils/getFileExtension.js';
import zIndex from '@mui/material/styles/zIndex.js';
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

    const [image, setImage] = useState({ uri: 'hahahahahahah' });
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);

    const [text, setText] = useState('');
    const onChangeText = text => setText(text);
    const hasErrors = () => {
        return !businessEmail.includes('@');
    };


    const addBusinessInfo = async (image_url) => {

        const business = {
            business_name: businessName,
            business_address: businessAddress,
            business_email: businessEmail,
            category: category,
            business_phone: businessPhone,
            business_description: businessDescription,
            instagram: instagram,
            facebook: facebook,
            image: image_url

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
            setImage(result);
        }
    };



    const deleteImage = () => {
        setImage(null);
    }


    const uploadImage = async () => {
        let extension = getFileExtension(image.uri);
        let base64 = `data:image/${extension};base64,${image.base64}`;

        let apiUrl = 'https://api.cloudinary.com/v1_1/reserve-it-fyp/image/upload';

        let data = {
            "file": base64,
            "upload_preset": "q4x11otx",
        }

        const { data: hello } = await axios.post(apiUrl, data).catch(err => {
            console.log("error: " + err)
        });

        console.log(hello.url)
        addBusinessInfo(hello.url);

        // const { url, public_id } = await cloudinary.uploader.upload(base64, {
        //     upload_preset: 'dev_setups'
        // });

        // console.log("This is url");
        // console.log(url);

    }



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
                            zIndex: 99
                        }}
                        containerStyle={{
                            width: '85%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30,
                            zIndex: 99
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
                        {image && <Image source={{ uri: image.uri }} style={{ width: 100, height: 100, borderRadius: 13 }} />}

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
                        // addBusinessInfo();
                        uploadImage();
                        // props.navigation.navigate('AccountSetup3')
                        props.navigation.navigate('AccountSetup4')
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
        paddingLeft: 10,
        marginTop: 20,
        color: '#000',


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
        zIndex: -9

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
