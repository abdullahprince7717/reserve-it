import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather } from "@expo/vector-icons/"
import React from 'react';

const EditProfile = () => {
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
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#57B9BB" name="phone" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#57B9BB" name="phone" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Address"
                    placeholderTextColor= {"#000"}
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
