import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Service from '../../components/businessUIComponents/checkout/ServiceCard.js'
import Appointment from '../../components/businessUIComponents/checkout/AppointmentCard.js'
import { CartContext } from '../../global/CartContext.js';

var counter = 1;
export default function Checkout(props) {

    const [total, setTotal] = useState(0);
    const [appointments, setAppointments] = useState([])
    const [services, setServices] = useState([])
    const [cart, setCart] = useContext(CartContext);

    let arr = []

    useEffect(() => {
        // console.log(props.route?.params?.service)
        // setServices(...services,props.route?.params?.service)
        // arr = [...arr,props.route?.params?.service]
        console.log(cart)
        // console.log(services)
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.07, alignItems: 'center', backgroundColor: '#57B9BB' }}>
                <Text style={{ fontSize: 27, padding: 10, fontWeight: 'bold', color: '#fff' }}>
                    Checkout
                </Text>
            </View>

            <View style={styles.buttonArea}>
                <Button icon="plus" mode="outlined" color='#57B9BB' onPress={() => { props.navigation.navigate("CheckoutAppointment") }}>
                    Appointment
                </Button>

                <Button icon="plus" mode="outlined" color='#57B9BB' onPress={() => { props.navigation.navigate("CheckoutService") }}>
                    Service
                </Button>
            </View>


            <View style={styles.items} >

                {props.route?.params?.service &&
                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flex: 4 }}>

                            <Service
                                title={props.route.params.service.name}
                                // title = "Grooming"
                                price={props.route.params.service.price + " Rs"}
                                duration={props.route.params.service.duration}
                                onPress={() => {
                                    console.log('Pressed')
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.5, marginHorizontal: 5, justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <View>
                                    <Icon name='delete-outline' size={30} color='orange' />
                                </View>

                            </TouchableOpacity>
                        </View>
                    </View>}
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ flex: 4 }}>
                        <Appointment
                            customer="Abdullah Ali"
                            service="Haircut"
                            price="Pkr. 500"
                            duration="45 mins"
                            onPress={() => {
                                console.log('Pressed')
                            }}
                        />
                    </View>
                    <View style={{ flex: 0.5, marginHorizontal: 5, justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <View>
                                <Icon name='delete-outline' size={30} color='orange' />
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={styles.inputField}>
                <TextInput
                    label="Total"
                    value={total}
                    onChangeText={x => setTotal(x)}
                    activeOutlineColor='#57B9BB'
                    activeUnderlineColor='#57B9BB'
                    style={{ height: 60 }}
                    disabled={true}
                />
            </View>

            <View style={styles.button} >
                <Button mode="contained"
                    color='#57B9BB'
                    onPress={() => console.log('Pressed')}
                    style={{ height: 50, justifyContent: 'center', borderRadius: 20, color: '#fff', width: '100%' }}>

                    Checkout
                </Button>
            </View>
            <Text>{cart.length}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
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

    inputField: {
        flex: 0.08,
        // backgroundColor: '#000',
        margin: 15,
    },

    items: {
        flex: 0.5,
        backgroundColor: '#fff',
        margin: 15,
    },
    button: {
        flex: 0.06,
        justifyContent: 'center',
        margin: 15,
        // backgroundColor: '#000',
        position: 'absolute', top: 700, left: 10, right: 10, bottom: 10, justifyContent: 'center', alignItems: 'center'

    },
})