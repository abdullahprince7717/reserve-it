import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather } from "@expo/vector-icons/"
import React from 'react';

const PaymentCardForm = (props) => {
    return (
        <View style = {styles.container}>

            <View style = {{justifyContent: 'center',alignItems: 'center',flex:0.5}}>
                <Text style = {{fontSize: 30, fontWeight:'bold', margin: 10}}>
                    Add Your Payment Card
                </Text>
                <Text style = {{fontSize: 18, color:'grey',marginTop: 10}}>
                    to pay for the appointments with the app
                </Text>
            </View>
                
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <TextInput
                    placeholder="Cardholder Name"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>

            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <TextInput
                    placeholder="Card Number"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <TextInput
                    placeholder="Expires"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <TextInput
                    placeholder="CVV/CVC"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <TextInput
                    placeholder="Zip Code"
                    placeholderTextColor= {"#000"}
                    style={styles.textInput}
                />
            </View>
            

            <View style = {{justifyContent: 'center',margin : 20,marginTop:40}}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() =>{
                        console.log("Pressed SAVE")
                        props.navigation.goBack()
                    }}
                >

                    <Text style ={{ color: '#fff', fontSize: 17}}>
                        Save Card
                    </Text>

                </TouchableOpacity>

            </View>      

        </View>
    );
};

export default PaymentCardForm;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    textInput:{  
        width: '85%',
        borderWidth:1,
        borderColor: '#000',
        height: 50,
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

});
