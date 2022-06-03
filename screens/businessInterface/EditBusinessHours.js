import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import {BackdropContext, TimePicker} from 'react-native-propel-kit';
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import moment from 'moment';

// import { DateTimePicker } from '@react-native-community/datetimepicker';


const EditBusinessHours = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();

    useEffect(() => {
        console.log(moment(startTime).format('LT'))
        console.log(moment(startTime).format('LT'))
    },[])
    
    return (
        <View style = {styles.container}>
            <View style = {{margin:20, marginVertical:30,flexDirection:'row', justifyContent: 'space-between'}}>
                
                <Text style = {{fontSize:22,fontWeight:'bold'}}>
                    Are You Open On {props.day}?
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
                    startTime = {moment(startTime).format('LT')}
                    endTime = {moment(endTime).format('LT')} 
                    status = {isOpen == true ? 'open' : 'closed'}
                    
                />
                
            </View>
            
            <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    props.navigation.navigate("BusinessHours",{data: {isOpen:isOpen, startTime:startTime, endTime:endTime}});
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