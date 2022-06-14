import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity,Alert } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather,AntDesign,MaterialIcons } from "@expo/vector-icons/"
import React from 'react';

const CustomerProfile = (props) => {

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
                    props.navigation.pop()
                } 
            }

        
        ]
    );

    const blockAlert = () =>
    Alert.alert(
        "Do you want to Block this Business?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {   
                text: "Block",
                onPress: () => {
                    console.log("Block Pressed")
                    props.navigation.pop()
                } 
            }
        ]
    );

    return (
        <View style = {styles.container}>

            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10}}>
                Personal Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <FontAwesome color="#000" name="user-o" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#000" name="email-outline" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#000" name="phone" size={25} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Phone Number"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
            <MaterialCommunityIcons color="#000" name="map-marker-outline" size={23} style = {{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Address"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            

            <View style = {{flexDirection: 'row',justifyContent: 'space-evenly',marginVertical : 20,marginHorizontal : 10}}>

                <TouchableOpacity 
                    style = {styles.delButton}
                    onPress = {() =>{
                        console.log("Pressed Delete")
                        deleteAlert();
                        
                    }}
                >
                <AntDesign color="red" name="delete" size={23} style ={{}} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() =>{
                        console.log("Pressed SAVE")
                        props.navigation.pop()
                    }}
                >
                    <Text style ={{ color: '#fff', fontSize: 17}}>
                        SAVE
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.blockButton}
                    onPress = {() =>{
                        console.log("Pressed Block")
                        blockAlert();
                        
                    }}
                >
                    <MaterialIcons color="red" name="block" size={23} style ={{}} />
                </TouchableOpacity>

            </View>         

        </View>
    );
};

export default CustomerProfile;

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
        width: '70%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal : 10        

    },
    delButton: {
        backgroundColor: '#000',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    blockButton: {
        backgroundColor: '#000',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },

});
