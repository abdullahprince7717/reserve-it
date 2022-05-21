import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import Card from "../../components/appointments/AppointmentCard.js";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";



function appointments(props) {
    const appointmentsRef = collection(db, "appointments");

    const layout = useWindowDimensions();
    const [appointments, setAppointments] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const [routes] = React.useState([
        { key: "first", title: "Current" },
        { key: "second", title: "Completed" },
        { key: "third", title: "Cancelled" },
    ]);

  

    // const array = [{id:"gys"},{id:"sgks"},{id: "skgs"},{id: "sjkhks"}]

    // const userDoc = doc(db, "appointments", credentials.user.uid)      //Storing user details in firestore
    

    // const userData = {
    //     name: name,
    //     phone: phone,
    //     email: email,
    //     password: password,
    //     appointments: [{
    //         service: "grooming",
    //         business: "ab salon",
    //         timeSlot: "10:00-11:00",
    //         duration: "30 mins",
    //         date: "12/2/2022"
    //     },

    //     {
    //         test1: "test1",
    //         test2: "test2",
    //     }
    //     ]

    // }

    // setDoc(userDoc, userData)
    //     .then(() => {
    //         alert("User Created Successfully")
    //     })
    //     .catch((error) => {
    //         alert(error.message)
    //     })

    const getAppointments = async () => {
        await getDocs(appointmentsRef)
            .then((res) => {

                setAppointments(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                console.log(appointments[0].status.is_completed);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        getAppointments();
    }, []);


    const FirstRoute = () => (
        <ScrollView style={styles.container}>
            <View>


                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_pending === true ? (
                        <Card
                            title={item.service_name}
                            businessName="LaLa Salon"
                            address="Machi Mandi near Niagra Falls, Kenya"
                            date="March 12"
                            time="10:00 AM"
                            onPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("BusinessProfile");
                            }}
                            buttonText1="Edit"
                            buttonText2="Cancel"
                        />) : null
                ))}


            </View>
        </ScrollView>
    );

    const SecondRoute = () => (
        <ScrollView style={styles.container}>
            <View>
                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_completed === true ? (
                        <Card
                            title={item.service_name}
                            businessName="LaLa Salon"
                            address="Machi Mandi near Niagra Falls, Kenya"
                            date="March 12"
                            time="10:00 AM"
                            onPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("BusinessProfile");
                            }}
                            onPressRate={() => {
                                
                                props.navigation.navigate("BusinessProfile");
                            }}
                            onPressReport={() => {
                                console.log("Pressed Report");
                            }}
                            
                            buttonText1="Rate"
                            buttonText2="Report"
                        />) : null
                ))}
            </View>
        </ScrollView>
    );

    const ThirdRoute = () => (
        <ScrollView style={styles.container}>
            <View>
                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_cancelled === true ? (
                        <Card
                            title={item.service_name}
                            businessName="LaLa Salon"
                            address="Machi Mandi near Niagra Falls, Kenya"
                            date="March 12"
                            time="10:00 AM"
                            onPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("BusinessProfile");
                            }}
                            onPressBookAgain={() => {
                                
                                props.navigation.navigate("BusinessProfile");
                            }}
                            onPressReport={() => {
                                console.log("Pressed Report");
                            }}
                            buttonText1="Book Again"
                            buttonText2="Report"
                        />) : null
                ))}
            </View>
        </ScrollView>
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = (props) => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#fff" }}
            style={{ backgroundColor: "#000" }}
        />
    );

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
            renderTabBar={renderTabBar}
        />
    );
}

export default appointments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 50,
    },
});
