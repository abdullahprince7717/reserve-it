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
    const [appointments, setAppointments] = useState(0);
    const [index, setIndex] = React.useState(0);
    
    const [routes] = React.useState([
        { key: "first", title: "Current" },
        { key: "second", title: "Completed" },
        { key: "third", title: "Cancelled" },
    ]);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {
        await getDocs(appointmentsRef)
            .then((res) => {
                setAppointments(res.docs.map((doc) => ({ 
                    ...doc.data(),
                    id: doc.id 
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                console.log(appointments[0].status);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const FirstRoute = () => (
        <ScrollView style={styles.container}>
            <View>
                {/* {appointments?.map((item, key) => {
                    return <Text key={key}>{item.id}</Text>;
                })} */}

                {/* <Card
            title="Grooming"
            businessName="LaLa Salon"
            address="Machi Mandi near Niagra Falls, Kenya"
            date="March 12"
            time="10:00 AM"
            onPress={() => {
                console.log(appointments[0]);
                props.navigation.navigate("BusinessProfile");
              // getAppointments();
            }}
            buttonText1="Edit"
            buttonText2="Cancel"
        /> */}
                {/* 
                <Card
                    title="Grooming"
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
                /> */}
            </View>
        </ScrollView>
    );

    const SecondRoute = () => (
        <ScrollView style={styles.container}>
            <View>
                <Card
                    title="Grooming"
                    businessName="LaLa Salon"
                    address="Machi Mandi near Niagra Falls, Kenya"
                    date="March 12"
                    time="10:00 AM"
                    onPress={() => {
                        console.log("Pressed");
                        props.navigation.navigate("BusinessProfile");
                    }}
                    buttonText1="Rate"
                    buttonText2="Report"
                />

                <Card
                    title="Grooming"
                    businessName="LaLa Salon"
                    address="Machi Mandi near Niagra Falls, Kenya"
                    date="March 12"
                    time="10:00 AM"
                    onPress={() => {
                        console.log("Pressed");
                        props.navigation.navigate("BusinessProfile");
                    }}
                    buttonText1="Rate"
                    buttonText2="Report"
                />
            </View>
        </ScrollView>
    );

    const ThirdRoute = () => (
        <ScrollView style={styles.container}>
            <View>
                <Card
                    title="Grooming"
                    businessName="LaLa Salon"
                    address="Machi Mandi near Niagra Falls, Kenya"
                    date="March 12"
                    time="10:00 AM"
                    onPress={() => {
                        console.log("Pressed");
                        props.navigation.navigate("BusinessProfile");
                    }}
                    buttonText1="Book Again"
                    buttonText2="Report"
                />

                <Card
                    title="Grooming"
                    businessName="LaLa Salon"
                    address="Machi Mandi near Niagra Falls, Kenya"
                    date="March 12"
                    time="10:00 AM"
                    onPress={() => {
                        console.log("Pressed");
                        props.navigation.navigate("BusinessProfile");
                    }}
                    buttonText1="Book Again"
                    buttonText2="Report"
                />
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
