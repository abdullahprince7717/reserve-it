import { StyleSheet, Text, View,Image, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'


const AccountSetup1 = (props) => {


    return (
        <View style = {styles.container}>
            <View style = {styles.picView}>
                <Image 
                source={require("../../assets/logo.png")}
                style = {{resizeMode: 'contain', height: '100%', width: '100%'}}
                />
            </View>
            <View style={{flex:0.2,marginTop:90,margin:30,justifyContent: 'space-evenly',alignItems:'center',flexDirection:'column',}}>
                <Text style = {{fontSize:19,fontWeight:'bold'}}> Set Up Your ReserveIt Profile </Text>
                <Text style = {{textAlign: 'center',fontSize:15,}}> Looks like you are new here, lets guide to through getting set up on ReserveIt. </Text>
            </View>
            
            
            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    props.navigation.navigate('AccountSetup2')
                }}
                >
                    <Text style = {{color: '#fff'}}>START SETUP</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default AccountSetup1
const deviceWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignContent: 'center',
        // justifyContent: 'center',

    },
    picView: {
        flex:0.55,

    },
    button: {
        backgroundColor: '#57B9BB',
        // width: deviceWidth-40,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    buttonContainer:{
        margin: 20,
        padding: 20,
    },
})