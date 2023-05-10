import React, { useEffect, useState,useFocusEffect } from "react";
import { useIsFocused } from '@react-navigation/native'
import {
    View,
    StyleSheet,
    StatusBar,
    Text,
    ScrollView,
    useWindowDimensions,
    Alert,
    TouchableOpacity,
    TextInput,
} from "react-native";
import Card from "../../components/appointments/AppointmentCard.js";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { db, auth } from "../../firebase/FirebaseConfig.js";
import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { Button, Paragraph, } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";




function Appointments(props) {
    const isFocused = useIsFocused()
    const appointmentsRef = collection(db, "appointments");

    const layout = useWindowDimensions();
    const [appointments, setAppointments] = useState([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const [routes] = useState([
        { key: "first", title: "Current" },
        { key: "second", title: "Completed" },
        { key: "third", title: "Cancelled" },
    ]);

    // const showReportDialog = () => {
    //     <Provider>
    //         <View>
    //             <Button onPress={showDialog}>Show Dialog</Button>
    //             <Portal>
    //                 <Dialog visible={visible} onDismiss={hideDialog}>
    //                     <Dialog.Title>Alert</Dialog.Title>
    //                     <Dialog.Content>
    //                         <Paragraph>This is simple dialog</Paragraph>
    //                     </Dialog.Content>
    //                     <Dialog.Actions>
    //                         <Button onPress={hideDialog}>Done</Button>
    //                     </Dialog.Actions>
    //                 </Dialog>
    //             </Portal>
    //         </View>
    //     </Provider>
    // }

    const [visible, setVisible] = useState(false);
    const [reportDescription, setReportDescription] = useState("");

    const showDialog = () => {
        setVisible(true);
        console.log("Pressed Report");
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleReport = (appointment) => {
        setVisible(false);
        const reportDoc = doc(db, "complaints", appointment.id);
                        setDoc(reportDoc, {
                            appointment,
                            description: reportDescription,
                            user_email: auth.currentUser.email,
                        }, { merge: true })
    };

    // const handleReportButton = () => {
    //     console.log("Pressed Report");
    //     showDialog();

    // }


    const getAppointments = async () => {
        await getDocs(appointmentsRef)
            .then((res) => {

                setAppointments(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                // console.log(appointments[0].status.is_completed);
                console.log(JSON.stringify(appointments[1]))
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const cancelAppointment = (appointment) => {

        // const appointment = {
        //     service_name: service?.name ? service?.name : service?.service_name,
        //     service_duration: service?.duration ? service?.duration : service?.service_duration,
        //     service_price: service?.price ? service?.price : service?.service_price,
        //     business_email: service?.business_email ? service?.business_email : service?.business_email,
        //     customer_email: auth.currentUser.email,
        //     business_name: service?.business_name ? service?.business_name : data?.business_name ? data?.business_name : "no name",
        //     business_address: service?.business_address ? service?.business_address : data?.business_address ? data?.business_address : "no address",
        //     date: selectedDate,
        //     time: timeSlot,
        //     status: { "is_pending": true },
        // }

        Alert.alert(
            "Do you want to Cancel this Appointment?",
            "",
            [
                {
                    text: "No",
                    onPress: () => {
                        console.log("No Pressed")

                    },
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        console.log("Yes Pressed")
                        const appointmentDoc = doc(db, "appointments", appointment.id);
                        setDoc(appointmentDoc, {
                            status: {
                                is_cancelled: true,
                                is_completed: false,
                                is_pending: false,
                            },
                        }, { merge: true })
                    }
                }

            ]
        );

        // const appointmentDoc = doc(db, "appointments", appointment.id);
        // setDoc(appointmentDoc, {
        //     status: {
        //         is_cancelled: true,
        //         is_completed: false,
        //         is_pending: false,
        //     }
        // })
    };


    useEffect(() => {
        getAppointments();
        console.log(JSON.stringify(appointments[0]))

    }, []);
    useEffect(() => {
        if(isFocused){
            getAppointments();
        }
    }, [isFocused])

    const handleReload = () => {
        getAppointments();
    }


    const FirstRoute = () => (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => {
                handleReload();
            }}>
                <MaterialCommunityIcons name="reload" size={30} color="black" style={{ marginLeft: 10, }} />
            </TouchableOpacity>

            <View>
                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_pending === true 
                    && appointments[index].customer_email == auth.currentUser.email ? (<>
                        <Card
                            title={item.service_name}
                            businessName={item.business_name}
                            address={item.business_address}
                            date={item.date}
                            time={item.time}
                            onPress={() => {
                                console.log("Pressed");
                                // props.navigation.navigate("BusinessProfile");
                            }}
                            buttonText1="Edit"
                            onEditPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("Booking", { appointment: appointments[index] });
                            }}
                            buttonText2="Cancel"
                            onCancelPress={() => {

                                cancelAppointment(appointments[index]);
                            }}
                            data={appointments[index]}
                        />

                    </>
                    ) : null
                ))}


            </View>
        </ScrollView>
    );

    const SecondRoute = () => (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => {
                handleReload();
            }}>
                <MaterialCommunityIcons name="reload" size={30} color="black" style={{ marginLeft: 10, }} />
            </TouchableOpacity>
            <View>
                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_completed === true 
                    && appointments[index].customer_email == auth.currentUser.email ? (
                        <Card
                            title={item.service_name}
                            businessName={item.business_name}
                            address={item.business_address}
                            date={item.date}
                            time={item.time}
                            onPress={() => {
                                console.log("Pressed");
                                // props.navigation.navigate("BusinessProfile");
                            }}

                            onEditPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("Booking", { appointment: appointments[index] });
                            }}

                            onCancelPress={() => {
                                cancelAppointment(appointments[index].id);
                            }}
                            data={appointments[index]}
                            buttonText1="Rate"
                            buttonText2="Report"
                            onRatePress={() => { }}
                            onReportPress={() => {
                                // showDialog();

                            }}
                        />) : null
                ))}
            </View>

        </ScrollView>
    );

    const ThirdRoute = () => (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => {
                handleReload();
            }}>
                <MaterialCommunityIcons name="reload" size={30} color="black" style={{ marginLeft: 10, }} />
            </TouchableOpacity>
            <View>
                {appointments?.map((item, index) => (
                    // <Text>{item.id}</Text>
                    appointments[index].status.is_cancelled === true
                    && appointments[index].customer_email == auth.currentUser.email ? (<>
                        <Card
                            title={item.service_name}
                            businessName={item.business_name}
                            address={item.business_address}
                            date={item.date}
                            time={item.time}
                            onPress={() => {
                                console.log("Pressed");
                                // props.navigation.navigate("BusinessProfile");
                            }}
                            onEditPress={() => {
                                console.log("Pressed");
                                props.navigation.navigate("Booking", { appointment: appointments[index] });
                            }}
                            onCancelPress={() => {
                                cancelAppointment(appointments[index].id);
                            }}
                            onReportPress={() => {
                                showDialog();

                            }}
                            data={appointments[index]}
                            buttonText1="Book Again"
                            buttonText2="Report"
                        />
                        <Dialog.Container visible={visible}>
                            <Dialog.Title style = {{fontWeight: "bold"}}>Report Account</Dialog.Title>
                            <Dialog.Description>
                                Tell us about your experience with this business.
                            </Dialog.Description>
                            <TextInput
                                    style={{
                                        height: 40,
                                        borderColor: 'gray',
                                        borderWidth: 1,
                                        placeholderTextColor: 'gray',
                                    }}
                                    onChangeText={text => setReportDescription(text)}
                                    value={reportDescription}
                                    placeholder="Why are You Reporting"
                                />
                            <Dialog.Button label="Cancel" onPress={handleCancel} />
                            <Dialog.Button label="Report" onPress={()=>{handleReport(appointments[index])}} />
                        </Dialog.Container>
                    </>) : null
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

export default Appointments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 50,
    },
    buttonArea: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
});