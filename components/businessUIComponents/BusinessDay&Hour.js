import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BusinessDays = (props) => {
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
                        {props.startTime} - {props.endTime}
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
        marginTop: 10
    },
    component:{
        height: 60, 
        width: '100%',
        backgroundColor:'#fff',
        flexDirection:'row', 
        justifyContent: 'space-between', 
        margin: 5, 
        padding: 18
    },

})