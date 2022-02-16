import { View, Text,StyleSheet,Dimensions } from 'react-native';
import {Button } from 'react-native-paper';
import React from 'react';

// function serviceCard  (props,{navigation})  {
function serviceCard  (props)  {
    return (
        <View style={{borderRadius: 10}}>
            <View style={styles.services}>
                <View style={styles.service}>
                    <View style = {styles.listView}> 
                        <Text style={{margin:7,fontSize:18,width:'55%'}}>
                            {props.name}                                       {props.serviceName}
                        </Text>
                        <Text style={{margin:7,fontSize:17,width:'12%'}}>
                            ${props.price}
                        </Text>
                    
                        <View style = {styles.buttonView}>
                            <Button 
                                mode="contained" 
                                // onPress={() => {
                                //     console.log('Pressed')
                                //     navigation.navigate('Booking')
                                // }}
                                onPress= {props.onPress}
                                style = {styles.button}
                            >
                                Book
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default serviceCard;
const deviceWidth = Math.round(Dimensions.get('window').width);
styles = StyleSheet.create({

    services:{
        borderRadius: 30,
    },
    service: {
        flexDirection: 'column',
        backgroundColor: 'blue',
        width: deviceWidth-25,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 20,
        height:80,
        flexWrap: 'wrap',
        marginBottom: 20,
        borderRadius: 30,
        

    },

    listView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        flex:3,
        
    },
    buttonView: {
        flexDirection: 'row',
        backgroundColor: 'green',
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#F39DFF',
        width:'85%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

});