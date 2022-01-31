import { View,Text,StyleSheet,StatusBar } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js'
import TimeSlot from  '../components/appointments/TimeslotCreator.js'

// import timeSlotPicker from 'react-native-timeslot-picker'

import { slotCreator } from "react-native-slot-creator";


function explore() {

        // slotCreator.createSlot(startTime, endTime, slotDuration, breakStartTime, breakEndTime, is12HoursFormat)
    
        // To get the Array of slots between given time interval with breakTime and 12 Hrs format

        // let requiredArray = slotCreator.createSlot("08:00","10:00","20","09:00","09:30",true)
        // console.warn("requiredArray",requiredArray)


        // To get the Array of slots between given time interval without breakTime 
        // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)
        // console.warn("requiredArray",requiredArray)
        // console.log("requiredArray",requiredArray)

        // const list = () => {
        //     return requiredArray.map((data,index,array) => {
        //         return (
        //             <View style={{margin: 10}}>
        //                 <Text>{index + 1}</Text>
        //                 <Text>{array[index]}</Text>
        //             </View>
        //         );
        //     });
        // };
        

    return (
        <View style = {styles.view}>
            <BusinessCard title =" abba dabba jabba" image = {require('../assets/logo.png')}
            description = "ajhdvukvadaikdv ajhdvd"/>

            {/* <timeSlotPicker/> */}

            <TimeSlot 
                startTime = "08:00"
                endTime = "14:10"
                slotDuration = "40"
                breakStartTime = ""
                breakEndTime = ""
                is12HoursFormat = {true}
            />

            {/* {list()} */}

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
    },
    
})