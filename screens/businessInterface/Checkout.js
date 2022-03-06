import React, {useState} from 'react'
import { StyleSheet, Text, View,StatusBar, ScrollView} from 'react-native'
import { Button,TextInput } from 'react-native-paper';

import Service from '../../components/businessUIComponents/checkout/ServiceCard.js'
import Appointment from '../../components/businessUIComponents/checkout/AppointmentCard.js'

var counter  = 1

export default function Checkout() {

    const [total,setTotal] = useState('0');

    

    return (
        <View style = { styles.container}>
            <View style = {{flex: 0.07,alignItems: 'center', backgroundColor: '#57B9BB'}}>    
                <Text style ={{fontSize: 27, padding: 10,fontWeight: 'bold',color: '#fff'}}>
                    Checkout
                </Text>
            </View>    

            <View style = {styles.buttonArea}>
                <Button icon="plus" mode="outlined" color = '#57B9BB' onPress={() => console.log('Pressed')}>
                    Appointment
                </Button>

                <Button icon="plus" mode="outlined" color = '#57B9BB' onPress={() => console.log('Pressed')}>
                    Service
                </Button>
            </View>

            {
                counter != 0 ?

                    // <ScrollView style = {styles.items}>    
                        <View style = {styles.items} > 
                            <Service
                                title="Grooming"
                                price = "Pkr. 500"
                                duration="45 mins"
                                onPress = {() => {
                                    console.log('Pressed')
                                }}
                            />

                            <Appointment
                                customer="Abdullah Ali"
                                service = "Haircut"
                                price = "Pkr. 500"
                                duration="45 mins"
                                onPress = {() => {
                                    console.log('Pressed')
                                }}
                            />
                        </View>
                    // </ScrollView>                
                :
                    null
            }
                
            
            <View style={styles.inputField}>
                <TextInput
                    label="Total"
                    value={total}
                    onChangeText={x => setTotal(x)}
                    activeOutlineColor = '#57B9BB'
                    activeUnderlineColor = '#57B9BB'
                    style ={{height:60}}
                />
            </View>

            <View style={styles.button} >
                <Button mode="contained" 
                color = '#57B9BB' 
                onPress={() => console.log('Pressed')}
                style={{height: 50,justifyContent: 'center',borderRadius:20, color: '#fff', width: '100%'}}>

                    Checkout
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    buttonArea: {
        flex: 0.13,
        backgroundColor: '#fff',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderColor: '#57B9BB',
        borderRadius: 20,
        borderWidth: 1,
        
    },

    inputField:{
        flex: 0.08,
        // backgroundColor: '#000',
        margin:15,
    },

    items: {
        flex: 0.3,
        backgroundColor: '#fff',
        margin: 15,
    },
    button:{
        flex:0.06,
        justifyContent: 'center',
        margin:15,
        // backgroundColor: '#000',
        position: 'absolute', top: 700, left: 10, right: 10, bottom: 10, justifyContent: 'center', alignItems: 'center'
        
    },
})