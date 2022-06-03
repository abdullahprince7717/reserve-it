import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import{TouchableRipple,} from 'react-native-paper'
import React , {useState,useEffect,useContext} from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import { BusinessHoursContext } from '../../global/BusinessHoursContext.js';

const BusinessHours = (props) => {

    const [days,setDays] = useContext(BusinessHoursContext);
    const [businessHours, setBusinessHours] = useState([]);
    // let day;
    useEffect(() => {
        // console.log(props?.route?.params?.data)
        // setDays(props?.route?.params?.data)
        console.log(days[0])
    },[])
    return (
        <View style={styles.container}>

            <HourComponent
                day = 'Monday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Monday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Monday'})}
                }}
            />
            <HourComponent
                day = 'Tuesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Tuesday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Tuesday'})}
                }}
            />
            <HourComponent
                day = 'Wednesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Wednesday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Wednesday'})}
                }}
            />
            <HourComponent
                day = 'Thursday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Thursday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours'),{day:'Thursday'}}
                }}
            />
            <HourComponent
                day = 'Friday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Friday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Friday'})}
                }}
            />
            <HourComponent
                day = 'Saturday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Saturday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Saturday'})}
                }}
            />
            <HourComponent
                day = 'Sunday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = {props?.route?.params?.data?.day === 'Sunday' ? props?.route?.params?.data?.isOpen : "open"}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',{day:'Sunday'})}
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