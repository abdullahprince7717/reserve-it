import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import{TouchableRipple,} from 'react-native-paper'
import React from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'

const BusinessHours = (props) => {
    return (
        <View style={styles.container}>

            <HourComponent
                day = 'Monday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Tuesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Wednesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Thursday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Friday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Saturday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Sunday'
                startTime = '9:00 AM'
                endTime = '5:00 PM'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
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
        marginTop: 20
    },
    

})