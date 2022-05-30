import React, { useState,useEffect ,useContext} from 'react'
import { View,StyleSheet,StatusBar,Dimensions,Text,TouchableOpacity,Button, } from "react-native";
import { Calendar} from 'react-native-calendars';
import TimeSlot from  '../../components/appointments/TimeSlotCreator.js';
import moment from 'moment';
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import { onAuthStateChanged } from "firebase/auth";
import {
    collection,
    addDoc,
    setDoc
} from "firebase/firestore";
// import TimeSlotContext from '../../global/TimeSlotContext.js'


function bookAppointment(props) {

    let now = new Date();
    var currentDate = moment(now).format('YYYY-MM-DD');

    const [selectedDate,setSelectedDate] = useState(currentDate)
    const [value, setValue] = useState("");
    const [service, setService] = useState([])
    const [data,setData] = useState([])
    // const [timeSlot,setTimeSlot] = useContext(TimeSlotContext)

    useEffect(() => {
        console.log(props.route.params.service)
        setService(props.route.params.service)

        console.log(props.route.params.data)
        setData(props.route.params.data)
        // console.log(timeSlot)
        console.log(data.business_email)


    },[])

    const appointmentCollection = collection(db, "appointments");

    const addAppointment = () => {

        const appointment = {
            service_name: service.name,
            service_duration: service.duration,
            service_price: service.price,
            business_email: data.business_email,
            customer_email: auth.currentUser.email,
            business_name: data.business_name,
            business_address: data.business_address,
            date: selectedDate,
            time: "10:40 A.M",
            status: {"is_pending":true},
        }

        addDoc(appointmentCollection, appointment)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });
    };


    return (
        <View style = {styles.container}>

            <Calendar
                style={styles.calendar}
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
                startTime = "10:00"
                endTime = "19:00"
                slotDuration = "40"
                breakStartTime = ""
                breakEndTime = ""
                is12HoursFormat = {true}
            />

            <View style= {{borderWidth:0.2,width:deviceWidth,marginTop:10,marginBottom:10}}/>

            <View style = {styles.servicesList}>
                <Text style = {{fontSize: 20, marginTop: 0,fontWeight:'bold', marginLeft:20,}}> 
                    {service.name}                                                
                </Text>
                <Text style = {{ fontSize: 20, marginTop: 0,fontWeight:'normal', marginLeft:220,marginRight:20 }}>
                        {service.price}
                </Text>
            </View>
            <View style = {styles.servicesList}>
                <Text style = {{ fontSize: 16, marginTop: 0,fontWeight:'normal', marginLeft:290,marginRight:10, }}>
                        10:00 - 10:40 
                </Text>
            </View>

            <View style= {{borderWidth:0.2,width:deviceWidth,marginTop:10}}/>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    addAppointment();
                    props.navigation.navigate('BookingConfirm')
                }}
                >
                    <Text>Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    
}

export default bookAppointment;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    calendar: {

        width: deviceWidth-25,
        paddingBottom: 5,
        borderRadius: 20,
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
    buttonContainer:{
        width:deviceWidth-40, 
        marginBottom: 20,
        flexDirection:'column',
        // backgroundColor:'#000',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        marginTop: 20,
        flexWrap:'wrap',
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
    
})