import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect, useContext} from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { collection, getDocs,doc, setDoc,query,where } from "firebase/firestore";
import { CartContext } from '../../global/CartContext.js';

const CheckoutService = (props) => {

    const [services, setServices] = useState([]);
    const [queryResult,setQueryResult] = useState([]);
    const servicesRef = collection(db, "services");
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        getServices();
    },[])

    const handlePress = (value) => {
        const temp = [...cart];
        temp.push(value);
        setCart(temp);
        props.navigation.navigate('Checkout')
    }


    const getServices = async () => {
        const q = query(servicesRef, where("business_email", "==", auth.currentUser.email ));
        setQueryResult(q);
        await getDocs(q)
            .then((res) => {

                setServices(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                
                console.log(services);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <View style = {styles.container}>
            {services.map((item,index) => (
            <Card 
                title = {item.name}
                price = {item.price}
                duration = {item.duration}
                onPress = {() => {
                    // console.log('pressed')
                    // {props.navigation.navigate('Checkout',{service: services[index]})}
                    console.log(services[index])
                    handlePress(services[index])
                }}

            />))}


        </View>
    )
}

export default CheckoutService

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: 20
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 15,
        bottom: 20,
        elevation: 1,
        backgroundColor: '#57B9BB',
        // borderRadius: 80,
    },
})