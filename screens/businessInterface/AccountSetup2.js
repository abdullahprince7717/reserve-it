import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons/"
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState,useEffect } from 'react';
import AddImages from '../businessInterface/AddImages.js';


import { collection,doc, addDoc, getDocs,setDoc } from "firebase/firestore";
import {db,auth} from  '../../firebase/FirebaseConfig.js'


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
        console.log()
    },[])

    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [category, setCategory] = useState(value);
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');

    // const businessDoc = doc(db, "business_users", auth.currentUser.uid);
    const businessDoc = doc(db, "business_users", "auth.uid");
    
    const addBusinessInfo = async () => {

        const business = {
            businessName: businessName,
            businessAddress: businessAddress,
            businessEmail: businessEmail,
            category: category,
            businessPhone: businessPhone,
            businessDescription: businessDescription,
            instagram: instagram,
            facebook: facebook
        } 
        console.log(auth.currentUser.uid)

        await setDoc(businessDoc, business, { merge: true })
        .then(
            (res)=>{
                console.log(res)
            })
        .catch(
            (err)=>{
                console.log(err)
            });
    };
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
                        value={businessEmail}
                        onChangeText={text => setBusinessEmail(text)}
                    />
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
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
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

                <AddImages/>

            </ScrollView>
            <View style={{ justifyContent: 'center', margin: 20,marginTop:2 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("Pressed SAVE")
                            addBusinessInfo();
                            props.navigation.navigate('AccountSetup3')
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
