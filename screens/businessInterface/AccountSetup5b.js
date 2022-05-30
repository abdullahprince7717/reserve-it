import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity,Alert } from 'react-native';
import React,{useState,useEffect} from 'react'
import {AntDesign} from '@expo/vector-icons'
import { db } from '../../firebase/FirebaseConfig.js'
import {doc, deleteDoc} from "firebase/firestore";

const EditService = (props) => {

    const[name,setName] = useState('');
    const[duration,setDuration] = useState('');
    const [price,setPrice]= useState('');

    useEffect (() => {
        console.log(props.route?.params?.data.id)
    },[])

    const deleteService = () => {
        deleteDoc(doc(db, "services", props.route?.params?.data.id));
    } 

    const deleteAlert = () =>
    Alert.alert(
        "Do you want to Delete this Business?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => {
                    console.log("Cancel Pressed")
                    
                },
                style: "cancel"
            },
            {   
                text: "Delete",
                onPress: () => {
                    console.log("Delete Pressed")
                    deleteService();
                    props.navigation.pop()
                } 
            }

        
        ]
    );

    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    value = {props.route?.params?.data?.name}
                    onChangeText = {setName}
                    placeholder="Service Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Duration"
                    value = {props.route?.params?.data?.duration}
                    onChangeText = {setDuration}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Price"
                    value = {props.route?.params?.data?.price}
                    onChangeText = {setPrice}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>

            <View style = {styles.buttonContainer}>
                
                <TouchableOpacity 
                style = {styles.delBtn}
                onPress = {() =>{
                    // navigation.navigate('BookingConfirm')
                    deleteAlert();
                }}
                >
                    <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
                
                <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    props.navigation.goBack()
                }}
                >
                    <Text style = {{color: '#fff'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditService

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
        height: 55,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
    
    },
    button: {
        backgroundColor: '#57B9BB',
        width:'85%',
        height: 45,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',  
        margin:5,      

    },
    buttonContainer:{
        width:deviceWidth-40, 
        marginBottom: 20,
        flexDirection:'row',
        // backgroundColor:'#000',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        marginTop: 20,
        // flexWrap:'wrap',
    },
    delBtn:{
        backgroundColor: '#57B9BB',
        width: '15%',
        height: 45,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        marginLeft:10,
    },

})