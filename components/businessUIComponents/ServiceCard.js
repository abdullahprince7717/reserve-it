import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

const ServiceCard = (props) => {
    
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    return (

        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={props.onPress}>

            <View style = {styles.container}>
                <View style = {{flexDirection:'row',alignItems:'center',}}>

                    <View style = {{height: '90%', width:2,backgroundColor:'red', margin:10}}></View>
                    
                    <View style = {{flexDirection:'column',}}>

                        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', }}>
                            {props.title}
                        </Text>
                        <Text style={{ color: 'black', fontSize: 15, fontWeight: '200', paddingLeft: 5}}>
                            {props.duration}
                        </Text>

                    </View>

                </View>

                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', }}>
                        {props.price} Rs
                </Text>

            </View>

        </TouchableHighlight>
            
    )
}

export default ServiceCard

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        backgroundColor: '#fff',
        margin:10,
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',


        
    }

})