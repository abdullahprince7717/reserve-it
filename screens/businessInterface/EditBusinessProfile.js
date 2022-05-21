import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather,Ionicons } from "@expo/vector-icons/"
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import {doc,getDoc,setDoc} from 'firebase/firestore';
import React, {useState,useEffect} from 'react';

const EditProfile = (props) => {

    const [userData,setUserData] = useState()
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [category, setCategory] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    // const [password,setPassword] = useState('');

    useEffect(() => {
        // const myDoc = doc(db, "business_users", auth.currentUser.uid)
        const myDoc = doc(db, "business_users", "test")
        getDoc(myDoc)
        .then((snapshot) => {
            if(snapshot.exists){
                // setUserData(snapshot.data())
                // setName(snapshot.data().name)
                // setPhone(snapshot.data().phone)
                // setEmail(snapshot.data().email)
                // setAddress(snapshot.data().address)
                console.log(snapshot.data())
                console.log(myDoc.uid)
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
        const myDoc = doc(db, "business_users", auth.currentUser.uid)
        
        setDoc(myDoc,value,{merge:merge})
        .then(() => {
            console.log("Updated")
            props.navigation.goBack()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <View style = {styles.container}>

            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,}}>
                Personal Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <FontAwesome color="#57B9BB" name="user-o" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#57B9BB" name="phone" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
        

            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,marginTop: 20}}>
                Business Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <Ionicons color="#57B9BB" name="business" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#57B9BB" name="phone" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Description "
                    placeholderTextColor= {"grey"}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    style={styles.description}

                />
            </View>



            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,marginTop: 20}}>
                Social Media
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <Feather color="red" name="instagram" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Instagram"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="blue" name="facebook" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Facebook"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            

            <View style = {{justifyContent: 'center',margin : 20,marginTop:40}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() =>{
                        console.log("Pressed SAVE")
                        // navigation.navigate('')
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
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
        padding:10,
    
    },
    description:{  
        width: '80%',
        borderWidth:1,
        borderColor: '#000',
        height: 95,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
        padding:10,
    
    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth-45,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },

});
