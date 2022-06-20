import React, {useState,useEffect, useContext} from 'react';
import { View,StyleSheet,StatusBar,Text,ScrollView,useWindowDimensions } from "react-native";
import Card from  '../../components/businessUIComponents/AppointmentCard.js';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { collection, getDocs,doc, setDoc,query,where } from "firebase/firestore";
import { AppointmentContext } from '../../global/AppointmentContext.js';


function appointments(props) {

    const [appointments, setAppointments] = useState([]);
    const [queryResult,setQueryResult] = useState([]);
    const appointmentsRef = collection(db, "appointments");
    const [appointmentCart, setAppointmentCart] = useContext(AppointmentContext);

    useEffect(() => {
        getAppointments();
    },[])

    const handlePress = (value) => {
        const temp = [...appointmentCart];
        temp.push(value);
        setAppointmentCart(temp);
        props.navigation.navigate('Checkout')
    }


    const getAppointments = async () => {
        const q = query(appointmentsRef, where("business_email", "==", auth.currentUser.email  ));
        setQueryResult(q);
        await getDocs(q)
            .then((res) => {

                setAppointments(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                
                console.log(appointments);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <ScrollView style={styles.container}>
        <View>

        {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_completed === true 
                    && appointments[index].business_email == auth.currentUser.email ? (
                        <Card
                        title={item.service_name}
                        customerName={item.customer_name}
                        serviceName ={item.service_name}
                        customerEmail = {item.customer_email}
                        customerPhone = {item.customer_phone}
                        price={item.service_price}
                        date={item.date}
                        time={item.time}
                        onPress={() => {
                            console.log("Pressed");
                            handlePress(appointments[index])

                        }}
                        buttonText1="Edit"
                        buttonText2="Cancel"
                    />) : null
                ))}
        </View>
    </ScrollView>
    );
}

export default appointments;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // height: '80%',
    },
})