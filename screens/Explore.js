import { View,StyleSheet,StatusBar } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js'
// import timeSlotPicker from 'react-native-timeslot-picker'

import { slotCreator } from "react-native-slot-creator";


function explore() {

        // slotCreator.createSlot(startTime, endTime, slotDuration, breakStartTime, breakEndTime, is12HoursFormat)
    
        // To get the Array of slots between given time interval with breakTime and 12 Hrs format

        // let requiredArray = slotCreator.createSlot("08:00","10:00","20","09:00","09:30",true)
        // console.warn("requiredArray",requiredArray)


        // To get the Array of slots between given time interval without breakTime 
        let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)
        console.warn("requiredArray",requiredArray)
        

    return (
        <View style = {styles.view}>
            <BusinessCard title =" abba dabba jabba" image = {require('../assets/logo.png')}
            description = "ajhdvukvadaikdv ajhdvd"/>

            {/* <timeSlotPicker/> */}


        </View>
    );
}

export default explore;

const styles = StyleSheet.create({

    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})