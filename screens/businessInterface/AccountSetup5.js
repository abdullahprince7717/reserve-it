import { StyleSheet, Text, View, } from 'react-native'
import React, {useState,useEffect} from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { collection, getDocs,doc, setDoc,query,where } from "firebase/firestore";
import {MaterialIcons} from '@expo/vector-icons'

const AccountSetup5 = (props) => {

    const [services, setServices] = useState([]);
    const [queryResult,setQueryResult] = useState([]);
    const servicesRef = collection(db, "services");

    useEffect(() => {
        getServices();
        console.log(services)
        console.log(auth.currentUser.email)
    },[])





    const getServices = async () => {
        const q = query(servicesRef, where("business_email", "==", auth.currentUser.email));
        // const q = query(servicesRef, where("business_email", "==", "abdullah123"));
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
        
        {services.length == 0 ?  
        <View style = {{justifyContent: 'center',alignItems: 'center'}}>
            <MaterialIcons name = "post-add" size = {100} color = '#00a680'/>
            <Text style = {{color:"grey",fontSize:24, fontWeight:'bold'}}> Please Add at least 1 service</Text>

            </View> 
        : 
        services.map((item,index) => (
            <Card 
                title = {item.name}
                price = {item.price}
                duration = {item.duration}
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('EditService',{data: services[index]})}
                }}

            />))}

            <FAB
                style={styles.fab}
                label = "Add"
                large
                icon="plus"
                onPress={() => {
                    console.log('Pressed')
                    props.navigation.navigate('AddService')
                }}
                color = '#fff'
            />

            <FAB
                style={styles.done}
                label = "Done"
                large
                onPress={() => {
                    console.log('Pressed')
                    props.navigation.navigate('Home')
                }}
                color = '#fff'
            />



        </View>
    )
}

export default AccountSetup5

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
        bottom: 150,
        elevation: 1,
        backgroundColor: '#57B9BB',
        // borderRadius: 80,
    },
    done: {
        position: 'absolute',
        margin: 10,
        right: 90,
        bottom: 60,
        elevation: 2,
        backgroundColor: '#57B9BB',
        width: 200,
        // borderRadius: 80,
    },
})