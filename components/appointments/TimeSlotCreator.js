import * as React from 'react';
import {useState,useEffect} from 'react';
import { View, StyleSheet, Text, Dimensions,TouchableOpacity,ScrollView, } from 'react-native';

import { slotCreator } from "react-native-slot-creator";

function TimeSlot(props){

    // slotCreator.createSlot(startTime, endTime, slotDuration, breakStartTime, breakEndTime, is12HoursFormat)    
        // To get the Array of slots between given time interval with breakTime and 12 Hrs format
        // let requiredArray = slotCreator.createSlot("08:00","10:00","20","09:00","09:30",true)
    // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)

    let requiredArray = slotCreator.createSlot(props.startTime,props.endTime,props.slotDuration,props.breakTimeStart,props.breakTimeStart,props.is12HoursFormat)
    // console.warn("requiredArray",requiredArray)

    const [selectedSlot,setSelectedSlot] = useState([])
    const [indexCheck,setIndexCheck] = useState("0")



    useEffect(() => {
        console.log("Selected Slot is ",selectedSlot)
        console.log(requiredArray)
    }, 
        [selectedSlot]);

    const list = () => {
        return requiredArray.map((data,index,array) => {
            return (
                    <TouchableOpacity
                        style={indexCheck===index?styles.timeSlotSelected:styles.timeSlot}
                        onPress = {() => {
                            setSelectedSlot(array[index])
                            setIndexCheck(index)
                            
                            // setTimeout(async () => {
                            //     await console.log("selectedSlot: ",selectedSlot)
                            // }, 3000);

                            // console.log("Selected Slot is ",selectedSlot)
                            console.log("V A L U E OF SLOT IS: ",array[index])

                            console.log("INDEX IS: ",index)

                            console.log("ARRAY IS: ",array)

                            console.log("DATA IS: ",array[index])

                            
                        }}
                    >
                        {/* <Text>{index + 1}</Text> */}
                            <Text>{data}</Text>
                    </TouchableOpacity>

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
        backgroundColor:'#fff',
        
    },

    timeSlotSelected:{
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
        backgroundColor:'#57B9BB',
    }
})

