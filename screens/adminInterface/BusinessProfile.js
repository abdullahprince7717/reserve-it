import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity,StatusBar,ScrollView,Alert } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather,Ionicons,MaterialIcons,AntDesign } from "@expo/vector-icons/"
import React from 'react';

const BusinessProfile = (props) => {

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
            <ScrollView>
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
                    <MaterialIcons color="#57B9BB" name="description" size={23} style ={{margin:10, marginTop: 25, }} /> 
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


                
            </ScrollView>
            
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

export default BusinessProfile;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
        width: '70%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal : 10        

    },
    delButton: {
        backgroundColor: '#57B9BB',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    blockButton: {
        backgroundColor: '#57B9BB',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },

});
