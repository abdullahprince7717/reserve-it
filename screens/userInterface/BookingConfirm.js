import { StyleSheet, Text, View,Button,StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons/"
import React from 'react';

const BookingConfirm = (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {{fontSize:30, fontWeight:'bold', color :'#fff',margin: 20}}>
                Booking Done! <MaterialCommunityIcons color="purple" name="calendar-check-outline" size={35} />  
                
            </Text>
            {/* <Button style = {{width:300,backgroundColor:'#57B9BB', color :'#fff'}}> */}
            <Button
                onPress ={ () => {
                    console.log('Pressed')
                    props.navigation.navigate('Home')       //just for testing
                }}
                title="Go to Appointments"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                // style = {{width:300,backgroundColor:'#57B9BB', color :'#fff'}}
            />
        </View>
    );
};

export default BookingConfirm;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#57B9BB",
        flexDirection: 'column',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
});
