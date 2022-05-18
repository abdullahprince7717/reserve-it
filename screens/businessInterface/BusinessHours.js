import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import{TouchableRipple,} from 'react-native-paper'
import React from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'

const BusinessHours = (props) => {
    // let day;
    return (
        <View style={styles.container}>

            <HourComponent
                day = 'Monday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Monday'})}
                }}
            />
            <HourComponent
                day = 'Tuesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Tuesday'}}
                }}
            />
            <HourComponent
                day = 'Wednesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Wednesday'}}
                }}
            />
            <HourComponent
                day = 'Thursday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Thursday'}}
                }}
            />
            <HourComponent
                day = 'Friday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Friday'}}
                }}
            />
            <HourComponent
                day = 'Saturday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'closed'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Saturday'}}
                }}
            />
            <HourComponent
                day = 'Sunday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'closed'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Sunday'}}
                }}
            />
            
        </View>
    )
}

export default BusinessHours

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 15

    },
    

})