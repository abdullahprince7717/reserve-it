import * as React from 'react';
import {useState} from 'react';
import { View, StyleSheet, Text, Dimensions,TouchableOpacity,ScrollView  } from 'react-native';

import { slotCreator } from "react-native-slot-creator";

function TimeSlot(props){
    // slotCreator.createSlot(startTime, endTime, slotDuration, breakStartTime, breakEndTime, is12HoursFormat)
    
        // To get the Array of slots between given time interval with breakTime and 12 Hrs format
        // let requiredArray = slotCreator.createSlot("08:00","10:00","20","09:00","09:30",true)
        // console.warn("requiredArray",requiredArray)
    // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)
    
    let requiredArray = slotCreator.createSlot(props.startTime,props.endTime,props.slotDuration,props.breakTimeStart,props.breakTimeStart,props.is12HoursFormat)
    console.warn("requiredArray",requiredArray)
    console.log("requiredArray",requiredArray)

    list = () => {
        return requiredArray.map((data,index,array) => {
            return (

                <TouchableOpacity>
                    <View style={styles.timeSlot}>
                        {/* <Text>{index + 1}</Text> */}

                            <Text>{array[index]}</Text>

                    </View>
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
        backgroundColor:'pink',
        // flexWrap: 'wrap',
        // justifyContent: 'space-evenly',
        // borderRadius: 20,
        borderWidth: 1,
        borderColor:'grey',
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
        

    },

    // touchable: {
    //     height: 50,
    //     width: 90,
    //     flex:1
    // }

})

