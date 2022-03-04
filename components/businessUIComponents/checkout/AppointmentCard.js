import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const AppointmentCard = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.leftCol}>
                
                <Text style = {{fontSize: 15}}>
                    March
                </Text>
                
                <Text style = {{fontSize: 19, fontWeight:'bold'}}>
                    24
                </Text>
                <Text style = {{fontSize: 17}}>
                    12:00 PM
                </Text>

            </View>

            <View style = {{height:'75%', width:2, backgroundColor:'grey',margin: 7,}}></View>

            <View style = {styles.rightCol}>

                <View >

                    <Text style = {{fontSize: 19,fontWeight:'bold',}}>
                        {props.customer}
                    </Text>

                    <Text style = {{fontSize: 15,fontWeight:'bold',color: '#000',}}>
                        {props.service}
                    </Text>

                    <Text style = {{fontSize: 15, fontWeight:'bold', color: 'grey',paddingLeft: 5 }}>
                        40 mins
                    </Text>
                    
                </View>

            </View>
        </View>
    )
}

export default AppointmentCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#57B9BB',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 7,

        width:'96%',
        alignItems: 'center',

    },
    leftCol: {
        flex:1,
        padding:10,
        flexDirection:'column',
        // backgroundColor: 'yellow',
        alignItems: 'center',
    },
    rightCol: {
        flex:3,
        padding:10, 
        flexDirection:'row',
        // backgroundColor: 'pink',
        alignItems: 'center',
    },

})