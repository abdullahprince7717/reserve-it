import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
// import moment from 'moment'

const BusinessDays = (props) => {

    useEffect(() => {
        console.log(props.day)
        console.log(props.startTime)
        console.log(props.endTime)
        console.log(props.status)
    },[])
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress = {props.onPress}
            >    
                <View style = {styles.component}>
                    <Text style = {{fontSize:16, fontWeight: 'bold'}}>
                        {props.day}
                    </Text>

                    <Text style = {{fontSize:16, fontWeight: 'bold'}}>
                    { props.status === 'open'  || props.status === true ? props.startTime  + " - "  + props.endTime : "CLOSED"}
                    </Text>
                </View>

            </TouchableOpacity>
            
        </View>
    )
}

export default BusinessDays

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: '100%',
        marginTop: 10,
        borderColor: "#57B9BB",
        borderWidth: 1,
    },
    component:{
        height: 60, 
        width: '98%',
        backgroundColor:'#fff',
        flexDirection:'row', 
        justifyContent: 'space-between', 
        margin: 5, 
        paddingVertical: 18,
        paddingHorizontal: 10,
    },

})