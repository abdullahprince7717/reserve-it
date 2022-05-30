import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import{Button} from 'react-native-paper'
import React,{useState,useEffect} from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import moment from 'moment';


const AccountSetup4 = (props) => {
    
    const [monday,setMonday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: true,})
    const [tuesday,setTuesday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: true, })
    const [wednesday,setWednesday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: true,})
    const [thursday,setThursday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: true, })
    const [friday,setFriday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: true, })
    const [saturday,setSaturday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: false, })
    const [sunday,setSunday] = useState({startTime: '9:00 AM',endTime: '6:00 PM',isOpen: false, })

    useEffect(() => {
        // console.log(monday.startTime)
        // console.log(monday.endTime)
        console.log(moment(props?.route?.params?.endTime).format('LT'))
        setMonday({...monday,
            startTime: moment(props?.route?.params?.startTime).format('LT'),
            endTime: moment(props?.route?.params?.endTime).format('LT'),
            isOpen: props?.route?.params?.isOpen,
        })
        console.log(tuesday.startTime)
    },[])

    return (
        <View style={styles.container}>

            <HourComponent
                day = 'Monday'
                startTime = {monday.startTime}
                endTime = {monday.endTime} 
                status = {monday.isOpen}
                onPress = {(day) => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Monday'})}
                }}
            />
            <HourComponent
                day = 'Tuesday'
                startTime = {tuesday.startTime}
                endTime = {tuesday.endTime}
                status = {tuesday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Tuesday'})}
                }}
            />
            <HourComponent
                day = 'Wednesday'
                startTime = {wednesday.startTime}
                endTime = {wednesday.endTime}
                status = {wednesday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Wednesday'})}
                }}
            />
            <HourComponent
                day = 'Thursday'
                startTime = {thursday.startTime}
                endTime = {thursday.endTime} 
                status = {thursday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Thursday'})}
                }}
            />
            <HourComponent
                day = 'Friday'
                startTime = {friday.startTime}
                endTime = {friday.endTime}
                status = {friday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b', {day:'Friday'})}
                }}
            />
            <HourComponent
                day = 'Saturday'
                startTime = {saturday.startTime}
                endTime = {saturday.endTime}
                status = {saturday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Saturday'})}
                }}
            />
            <HourComponent
                day = 'Sunday'
                startTime = {sunday.startTime}
                endTime = {sunday.endTime}
                status = {sunday.isOpen}
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('AccountSetup4b',{day:'Sunday'})}
                }}
            />

            <View style = {{marginTop: 30}}>
                <Button mode="contained"  onPress={() => {
                    console.log('Pressed')
                    props.navigation.navigate('AccountSetup5')
                }}>
                    Next
                </Button>
            </View>
            
        </View>
    )
}

export default AccountSetup4

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