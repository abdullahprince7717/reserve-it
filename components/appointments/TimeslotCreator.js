import * as React from 'react';
import {useState} from 'react';
import { View, StyleSheet, Text, Dimensions,TouchableOpacity  } from 'react-native';

import { slotCreator } from "react-native-slot-creator";

function TimeSlot(props){

    // let requiredArray = slotCreator.createSlot("08:00","15:00","40","","",true)
    let requiredArray = slotCreator.createSlot(props.startTime,props.endTime,props.slotDuration,props.breakTimeStart,props.breakTimeStart,props.is12HoursFormat)
    console.warn("requiredArray",requiredArray)
    console.log("requiredArray",requiredArray)

    list = () => {

        // const [rippleColor, setRippleColor] = useState("");
        // const [rippleOverflow, setRippleOverflow] = useState();


        return requiredArray.map((data,index,array) => {
            return (
                <TouchableOpacity>
                    
                    <View style={styles.timeSlot}>
                        {/* <Text>{index + 1}</Text> */}

                            <Text>{array[index]}</Text>

                    </View>
                

                </TouchableOpacity>
                    
                // </TouchableNativeFeedback>
            );
        });
    };

    return(
    <View style={styles.container}>
        
        {list()}
        
    </View>
    )
}

export default TimeSlot;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        
        display: 'flex',
        flexDirection: 'row',
        height: 300,
        width: deviceWidth - 25,
        backgroundColor:'grey',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 20,
        borderColor: "#000"
        
        
    },

    timeSlot: {
        height: 50,
        width: 90,
        borderWidth:1,
        borderRadius: 20,
        borderColor: "#fff",
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

