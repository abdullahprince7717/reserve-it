import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { slotCreator } from "react-native-slot-creator";

function TimeSlot(props){

    // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)
    let requiredArray = slotCreator.createSlot(props.startTime,props.endTime,props.slotDuration,props.breakTimeStart,props.breakTimeStart,props.is12HoursFormat)
    console.warn("requiredArray",requiredArray)
    console.log("requiredArray",requiredArray)

    list = () => {
        return requiredArray.map((data,index,array) => {
            return (
                <View style={{margin: 10}}>
                    <Text>{index + 1}</Text>
                    <Text>{array[index]}</Text>
                </View>
            );
        });
    };

    return(
    <View style={styles.container}>
        
        {list()}
        
        {/* <View style={styles.timeSlot}>
            <Text>

            </Text>
        </View> */}
    </View>
    )
}

export default TimeSlot;

const styles = StyleSheet.create({

    container: {
        height: 70,
        width: 100,
        
    },

    timeSlot: {
        borderWidth:1,
        borderRadius: 20,
        borderColor: "blue"
    },

})

