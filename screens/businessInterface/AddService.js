import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity,Alert } from 'react-native';
import React,{useState, useEffect} from 'react'
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import { onAuthStateChanged } from "firebase/auth";
import {
    collection,
    addDoc,
    setDoc
} from "firebase/firestore";

const AddService = (props) => {

    const [serviceName,setServiceName] = useState('')
    const [duration,setDuration] = useState('')
    const [price,setPrice] = useState('')
    const [user,setUser] = useState()

    useEffect(() => {
        // onAuthStateChanged(auth, (currentUser) => {
        //     setUser(currentUser);
        //     console.log(currentUser.email);
        // });

        console.log(auth.currentUser.email)

    },[])

    const servicesCollection = collection(db, "services");

    const addServices = () => {

        const service = {
            name: serviceName,
            duration: duration,
            price: price,
            business_email: auth.currentUser.email
        } 

        addDoc(servicesCollection, service)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });
    };

    


    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    value={serviceName}
                    onChangeText={(text) => setServiceName(text)}
                    placeholder="Service Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    value={duration}
                    onChangeText={(text) => setDuration(text)}
                    placeholder="Duration"
                    placeholderTextColor= {"grey"}
                    keyboardType = 'numeric'
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                    placeholder="Price"
                    placeholderTextColor= {"grey"}
                    keyboardType = 'numeric'
                    style={styles.textInput}
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    addServices();
                    props.navigation.goBack()
                }}
                >
                    <Text style = {{color: '#fff'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddService

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textInput:{  
        width: '95%',
        borderWidth:1,
        borderColor: '#000',
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
    
    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth-40,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    buttonContainer:{
        width:deviceWidth-40, 
        marginBottom: 20,
        flexDirection:'column',
        // backgroundColor:'#000',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        marginTop: 20,
        flexWrap:'wrap',
    },

})