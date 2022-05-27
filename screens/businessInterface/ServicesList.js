import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { collection, getDocs,doc, setDoc,query,where } from "firebase/firestore";

const ServicesList = (props) => {

    const [services, setServices] = useState([]);
    const [queryResult,setQueryResult] = useState([]);
    const servicesRef = collection(db, "services");

    useEffect(() => {
        getServices();
    },[])


    const getServices = async () => {
        const q = query(servicesRef, where("business_email", "==", auth.currentUser.email));
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


        </View>
    )
}

export default ServicesList

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