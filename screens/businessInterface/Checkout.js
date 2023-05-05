import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Button, TextInput, Snackbar, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Service from '../../components/businessUIComponents/checkout/ServiceCard.js'
import Appointment from '../../components/businessUIComponents/checkout/AppointmentCard.js'
import { CartContext } from '../../global/CartContext.js';
import { AppointmentContext } from '../../global/AppointmentContext.js';
import { db, auth, storage } from '../../firebase/FirebaseConfig.js'
import { doc, setDoc, addDoc } from 'firebase/firestore';




export default function Checkout(props) {

    const [total, setTotal] = useState();
    const [serviceCart, setServiceCart] = useContext(CartContext);
    const [appointmentCart, setAppointmentCart] = useContext(AppointmentContext);
    var counter = serviceCart.length + appointmentCart.length;

    const [visible, setVisible] = useState(false);



    // const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const uploadData = () => {
        const checkoutDoc = doc(db, "checkout_history", auth.currentUser.uid);
        setDoc(checkoutDoc, {
            total: serviceCart.map((item, index) => (parseInt(item.price))).reduce((a, b) => a + b, 0) + (appointmentCart.map((item, index) => (parseInt(item.service_price))).reduce((a, b) => a + b, 0)) + " Rs",
            services: serviceCart,
            appointments: appointmentCart,
            date: new Date().toLocaleDateString(),
            email: auth.currentUser.email,
        })
            .then(() => {
                // onToggleSnackBar();
                appointmentCart.length > 0 ? 
                appointmentCart.map((item, index) => {
                    const appointmentDoc = doc(db, "appointments", item.id );
                    console.log('item', item)
                    setDoc(appointmentDoc, {
                            status: {
                                is_cancelled: false,
                                is_completed: true,
                                is_pending: false,
                            },
                        }, { merge: true })
                })
    
                : 

                setServiceCart([]);
                setAppointmentCart([]);

            })
            .catch((error) => {
                alert(error.message)
            })
    }

    // function Update(value, merge) {
    //     const myDoc = doc(db, "appointments", auth.currentUser.uid)

    //     setDoc(myDoc, value, { merge: merge })
    //         .then(() => {
    //             console.log("Updated")
    //             props.navigation.goBack()
    //         })
    //         .catch((error) => {
    //             console.log(error.message)
    //         })
    // }



    useEffect(() => {
        console.log(appointmentCart)
        // 

    }, [appointmentCart]);

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

            {counter > 0 ?
                <View style={styles.items} >
                    <ScrollView>
                        {serviceCart.map((item, index) => (<>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flex: 4 }}>
                                    <Service
                                        title={item.name}
                                        // title = "Grooming"
                                        price={item.price + " Rs"}
                                        duration={item.duration}
                                        onPress={() => {
                                            console.log('Pressed')
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 0.5, marginHorizontal: 5, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        var temp = [...serviceCart];
                                        temp.splice(index, 1);
                                        setServiceCart(temp);
                                        setTotal(total - item.price);
                                    }}>
                                        <View>
                                            <Icon name='delete-outline' size={30} color='orange' />
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View></>))}

                        {appointmentCart.map((item, index) => (<>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flex: 4 }}>
                                    <Appointment
                                        customer="Abdullah Ali"
                                        service={item.service_name}
                                        price={item.service_price}
                                        date={item.date}
                                        time={item.time}
                                        duration="45 mins"
                                        onPress={() => {
                                            console.log('Pressed')
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 0.5, marginHorizontal: 5, justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        var temp = [...appointmentCart];
                                        temp.splice(index, 1);
                                        setAppointmentCart(temp);
                                        setTotal(total - item.price);
                                    }}>
                                        <View>
                                            <Icon name='delete-outline' size={30} color='orange' />
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>))}
                    </ScrollView>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        duration={2000}
                    >
                        Checkout Done!
                    </Snackbar>
                </View>
                : null}


            <View style={styles.inputField}>
                <TextInput
                    label="Total"
                    value={serviceCart.map((item, index) => (parseInt(item.price))).reduce((a, b) => a + b, 0) + (appointmentCart.map((item, index) => (parseInt(item.service_price))).reduce((a, b) => a + b, 0)) + " Rs"}
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
                    onPress={() => {
                        (serviceCart.length > 0 || appointmentCart.length > 0) ? uploadData() : alert("Please add items to cart");
                    }}
                    style={{ height: 50, justifyContent: 'center', borderRadius: 20, color: '#fff', width: '100%' }}>

                    Checkout
                </Button>
            </View>
            {/* <Text>{serviceCart.length}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
        position: 'absolute', top: 700, left: 10, right: 10, bottom: 40, justifyContent: 'center', alignItems: 'center'

    },
})