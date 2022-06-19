import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState,useEffect,useContext} from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import {BackdropContext, TimePicker} from 'react-native-propel-kit';
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import moment from 'moment';
import {BusinessHoursContext} from '../../global/BusinessHoursContext.js'

// import { DateTimePicker } from '@react-native-community/datetimepicker';


const EditBusinessHours = (props) => {
    
    const [isOpen, setIsOpen] = useState(true);
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [endTime, setEndTime] = useState(new Date("2023-01-01T12:00:00").getTime());
    const [monday,setMonday,tuesday,setTuesday,wednesday,setWednesday,thursday,setThursday,friday,setFriday,saturday,setSaturday,sunday,setSunday] = useContext(BusinessHoursContext);
    
    

    useEffect(() => {
        // console.log(moment(startTime).format('LT'))
        // console.log(moment(startTime).format('LT'))
        console.log(props?.route?.params?.day)
        console.log(monday)
        console.log(tuesday)
        console.log(wednesday)
        console.log(thursday)
        console.log(friday)
        console.log(saturday)
        console.log(sunday)

    },[])

    const handlePress = (value) => {
        // const temp = monday?[...monday]:[]       
        // temp.push(value);

        if(props?.route?.params?.day === 'Monday'){
            setMonday(value)
        }
        else if(props?.route?.params?.day === 'Tuesday'){
            setTuesday(value)
        }
        else if(props?.route?.params?.day === 'Wednesday'){
            setWednesday(value)
        }
        else if(props?.route?.params?.day === 'Thursday'){
            setThursday(value)
        }
        else if(props?.route?.params?.day === 'Friday'){
            setFriday(value)
        }
        else if(props?.route?.params?.day === 'Saturday'){
            setSaturday(value)
        }
        else if(props?.route?.params?.day === 'Sunday'){
            setSunday(value)
        }

        // setThursday(value)

        props.navigation.navigate('BusinessHours');
        // console.log(value)
    }

    
    return (
        <View style = {styles.container}>
            <View style = {{margin:20, marginVertical:30,flexDirection:'row', justifyContent: 'space-between'}}>
                
                <Text style = {{fontSize:22,fontWeight:'bold'}}>
                    Are You Open on {props?.route?.params?.day}?
                </Text>
                
                <ToggleSwitch
                    isOn={isOpen}
                    onColor="green"
                    offColor="grey"
                    size="medium"
                    onToggle={()=> {
                        setIsOpen(!isOpen)
                        isOpen ? console.log("On") : console.log("Off")
                    }}
                />
            </View>
            <View
                pointerEvents = {isOpen ? 'auto' : 'none'}
                opacity = {isOpen ? 1 : 0.5}
                style = {{justifyContent:'center', alignItems:'center', margin:10, marginVertical:60}}
            >
                <Text style = {{fontSize:24,fontWeight:'bold'}}> Set New Business Hours</Text>
                <Text style = {{fontSize:19,}}> Click to Edit Time</Text>

                <View style = {{flexDirection:'row',margin:10, marginTop:40}}>                    
                    <TimePicker title="Pick a time" value={startTime} onChange={setStartTime} style = {{fontSize:20,backgroundColor:'#fff', height:26,}} >
                        <Text style = {{fontSize:20,marginRight:10,fontWeight:'bold'}}>Start Time :</Text>
                    </TimePicker>

                </View>

                <View style = {{flexDirection:'row',margin:20,marginBottom:50,}}>                    
                    <TimePicker title="Pick a time" value={endTime} onChange={setEndTime} style = {{fontSize:20,backgroundColor:'#fff', height:26,}} >
                        <Text style = {{fontSize:20,marginRight:10,fontWeight:'bold'}}>End Time :</Text>
                    </TimePicker>
                </View>
                
                <HourComponent
                    day = {props.route?.params?.day}
                    // startTime = {moment(startTime).format('LT')}
                    startTime = {startTime}
                    // endTime = {moment(endTime).format('LT')} 
                    endTime = {endTime}
                    status = {isOpen == true ? 'open' : 'closed'}
                    
                />
                
            </View>
            
            <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    // setDays(days => [...days, {isOpen:isOpen, startTime:moment(startTime).format('LT'), endTime:moment(endTime).format('LT'), day:props.route?.params?.day}])
                    // props.navigation.navigate("BusinessHours",{data: {day:props?.route?.params?.day ,isOpen:isOpen, startTime:startTime, endTime:endTime}});
                    // props.navigation.navigate("BusinessHours")
                    handlePress({isOpen: isOpen, startTime:moment(startTime).format('LT'), endTime:moment(endTime).format('LT'), day:props?.route?.params?.day})
                }}
                >
                    <Text style = {{color: '#fff'}}>Save</Text>
            </TouchableOpacity>

        </View>
        
    )
}

export default EditBusinessHours

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
        flexDirection:'column',
    },
    button: {
        backgroundColor: '#57B9BB',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',  
        margin:5,      

    },
})