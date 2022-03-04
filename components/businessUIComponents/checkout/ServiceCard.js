import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ServiceCard = (props) => {
    return (

        <View style = {styles.container}>
            <View style = {{flexDirection: 'row',justifyContent: 'space-between', padding:10,}}>

                <View style = {{flexDirection: 'column',}}>
                    <Text style = {{fontSize: 20, fontWeight: '100'}}>
                        {props.title}
                    </Text>
                    <Text style = {{fontSize: 15, fontWeight: '100', color: 'grey'}}>
                        {props.duration}
                    </Text>

                </View>
                    
                <Text style = {{fontSize: 18, fontWeight: 'bold'}} >
                    {props.price}
                </Text>
            
            </View>
        </View>    
            
    )
}

export default ServiceCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: 'orange',
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
    },

})