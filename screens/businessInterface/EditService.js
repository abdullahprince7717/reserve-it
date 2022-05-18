import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import React,{useState} from 'react'
import {AntDesign} from '@expo/vector-icons'

const EditService = (props) => {

    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Service Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Duration"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Price"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>

            <View style = {styles.buttonContainer}>
                
                <TouchableOpacity 
                style = {styles.delBtn}
                onPress = {() =>{
                    // navigation.navigate('BookingConfirm')
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
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
    
    },
    button: {
        backgroundColor: '#57B9BB',
        width:'85%',
        height: 40,
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
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
    },

})