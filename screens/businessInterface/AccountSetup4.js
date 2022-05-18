import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import{Button} from 'react-native-paper'
import React,{useState} from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'

const AccountSetup4 = (props) => {
    
    const [monday,setMonday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [tuesday,setTuesday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [wednesday,setWednesday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [thursday,setThursday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [friday,setFriday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [saturday,setSaturday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})
    const [sunday,setSunday] = useState({startTime: '',endTime: '',isOpen: true, duration: '',})

    return (
        <View style={styles.container}>

            <HourComponent
                day = 'Monday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {(day) => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours',day='Monday')}
                }}
            />
            <HourComponent
                day = 'Tuesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Wednesday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Thursday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Friday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'open'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Saturday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'closed'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
                }}
            />
            <HourComponent
                day = 'Sunday'
                startTime = '9:00 AM'
                endTime = '5:00 PM' 
                status = 'closed'
                onPress = {() => {
                    console.log("Pressed")
                    {props.navigation.navigate('EditBusinessHours')}
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