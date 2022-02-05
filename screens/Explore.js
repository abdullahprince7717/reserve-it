import React, { useState } from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions, } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js';
import { Calendar} from 'react-native-calendars';
import TimeSlot from  '../components/appointments/TimeSlotCreator.js';
import moment from 'moment';

// import timeSlotPicker from 'react-native-timeslot-picker'



function explore() {

    let now = new Date();
    var currentDate = moment(now).format('YYYY-MM-DD');

    const [selectedDate,setSelectedDate] = useState(currentDate)

    return (
        <View style = {styles.view}>
            {/* <BusinessCard title =" abba dabba jabba" image = {require('../assets/logo.png')}
            description = "ajhdvukvadaikdv ajhdvd"/> */}

            {/* <timeSlotPicker/> */}

            <Calendar
                style={styles.Calendar}
                onDayPress={(day) =>  {
                    setSelectedDate(day.dateString)
                    console.log("Selected Date",day.dateString)
                    console.log("current Date",currentDate)
                }}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedColor: '#57B9BB',
                        selectedTextColor: '#000',
                    },
                }}
                minDate={currentDate}
                theme={{
                    backgroundColor: "#ffffff",
                    calendarBackground: "#ffffff",
                    todayTextColor: "#57B9BB",
                    dayTextColor: "#222222",
                    textDisabledColor: "#d9e1e8",
                    monthTextColor: "#57B9BB",
                    arrowColor: "#57B9BB",
                    textDayFontWeight: "300",
                    textMonthFontWeight: "bold",
                    textDayHeaderFontWeight: "500",
                    textDayFontSize: 16,
                    textMonthFontSize: 18,
                    selectedDayBackgroundColor: "#57B9BB",
                    selectedDayTextColor: "white",
                }}
            />


            <TimeSlot
                startTime = "08:00"
                endTime = "14:10"
                slotDuration = "40"
                breakStartTime = ""
                breakEndTime = ""
                is12HoursFormat = {true}

            />
            
            <View style= {{borderWidth:0.5,width:deviceWidth,marginBottom:10}}
            />

            

            <View style = {styles.servicesList}>
                <Text style = {{fontSize: 20, marginTop: 0,fontWeight:'bold', marginLeft:20,  }}> 
                    Service Name                                                
                </Text>
                <Text style = {{ fontSize: 20, marginTop: 0,fontWeight:'normal', marginLeft:170,marginRight:20 }}>
                        5000 Pkr
                </Text>
            </View>
            <View style = {styles.servicesList}>
                <Text style = {{ fontSize: 16, marginTop: 0,fontWeight:'normal', marginLeft:290,marginRight:10, }}>
                        10:00 - 10:30
                </Text>
            </View>

            <View style= {{borderWidth:0.5,width:deviceWidth,marginTop:10}}
            
            />


            {/* {list()} */}



        </View>
    );

    
}

export default explore;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    view: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    Calendar: {

        width: deviceWidth-25,
        paddingBottom: 10,
        marginBottom: 10,
        borderRadius: 20,
        marginTop: 10,
        // height: 300, 
        // width: "90%",
        // justifyContent: "center" 

    },
    servicesList: {
        // backgroundColor: '#fff',
        justifyContent: "flex-start",
        flexDirection: 'row',
        width: deviceWidth,
        marginTop: 0,
        height: 25,

    },

    
})