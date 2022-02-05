import * as React from 'react';
import {useState} from 'react';
import { View, StyleSheet, Text, Dimensions,TouchableOpacity,ScrollView,Pressable } from 'react-native';

import { slotCreator } from "react-native-slot-creator";

function TimeSlot(props){

    // slotCreator.createSlot(startTime, endTime, slotDuration, breakStartTime, breakEndTime, is12HoursFormat)    
        // To get the Array of slots between given time interval with breakTime and 12 Hrs format
        // let requiredArray = slotCreator.createSlot("08:00","10:00","20","09:00","09:30",true)
    // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)

    let requiredArray = slotCreator.createSlot(props.startTime,props.endTime,props.slotDuration,props.breakTimeStart,props.breakTimeStart,props.is12HoursFormat)
    // console.warn("requiredArray",requiredArray)
   

    const [selectedSlot,setSelectedSlot] = useState([])
    const [isPressed,setIsPressed] = useState(false)

    list = () => {
        return requiredArray.map((data,index,array) => {
            return (
                    <TouchableOpacity
                        style={styles.timeSlot}
                        onPress = {() => {
                            setSelectedSlot(array[index])

                            console.log("Selected Slot is ",selectedSlot)
                            console.log("A R R A Y ",array[index])
                            
                        }}
                    >
                        {/* <Text>{index + 1}</Text> */}
                            <Text>{array[index]}</Text>
                    </TouchableOpacity>




                    // setTimeout(() => {
                    //     console.log("Selected Slot is ",selectedSlot)
                    //     console.log("A R R A Y  ",array[index])
                    // }, 2000);
            );
        });
    };

    return(
    
        <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
        >

            <View style={styles.container}>
                {list()}
            </View>

        </ScrollView>    
    )
}

export default TimeSlot;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        
        display: 'flex',
        flexDirection: 'row',
        // width: deviceWidth,
        // backgroundColor:"#fff",
        // flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
        // borderRadius: 20,
        borderWidth: 0.5,
        // borderColor:'grey',
        marginTop: 10,
        // borderColor: "#000"
        
    },

    timeSlot: {
        height: 50,
        width: 90,
        borderWidth:1,
        borderRadius: 20,
        borderColor: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
        marginTop:20,
        marginBottom: 20,
        backgroundColor: '#fff',
        

    },

    onPressStyle: {
        backgroundColor: '#fff',
    }

})

