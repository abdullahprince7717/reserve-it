import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather } from "@expo/vector-icons/"
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import {doc,getDoc,setDoc} from 'firebase/firestore';
import React, {useState,useEffect} from 'react';

const EditProfile = (props) => {

    const [userData,setUserData] = useState(null);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    // const [password,setPassword] = useState('');

    useEffect(() => {
        const myDoc = doc(db, "users", auth.currentUser.uid)
        // const myDoc = doc(db, "users", "auth.uid")
        getDoc(myDoc)
        .then((snapshot) => {
            if(snapshot.exists){
                setUserData(snapshot.data())
                setName(snapshot.data().name)
                setPhone(snapshot.data().phone)
                setEmail(snapshot.data().email)
                setAddress(snapshot.data().address)

            }
            else{
                console.log("No User Data")
            }
        })
        .catch((error) => {
            console.log(error.message)
        })
        
    },[])

    function Update(value,merge){
        const myDoc = doc(db, "users", auth.currentUser.uid)
        
        setDoc(myDoc,value,{merge:merge})
        .then(() => {
            console.log("Updated")
            props.navigation.replace('Settings')
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <View style = {styles.container}>

            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10}}>
                Personal Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <FontAwesome color="#57B9BB" name="user-o" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                    value = {name}
                    onChangeText ={text=>setName(text)}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                    value = {email}
                    onChangeText ={text=>setEmail(text)}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#57B9BB" name="phone" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                    value = {phone}
                    onChangeText ={text=>setPhone(text)}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#57B9BB" name="map-marker-radius" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Address"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                    value = {address}
                    onChangeText ={text=>setAddress(text)}
                />
            </View>

            <View style = {{justifyContent: 'center',margin : 20,marginTop:40}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() =>{
                        Update({
                            name: name,
                            phone: phone,
                            email: email,
                            address: address,

                        },true)
                    }}
                >

                    <Text style ={{ color: '#fff', fontSize: 17}}>
                        SAVE
                    </Text>

                </TouchableOpacity>

            </View>
        </View>
    );
};

export default EditProfile;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    textInput:{  
        width: '80%',
        borderWidth:1,
        borderColor: '#000',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
    
    },
    button: {
        backgroundColor: '#000',
        width: deviceWidth-40,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },

});
