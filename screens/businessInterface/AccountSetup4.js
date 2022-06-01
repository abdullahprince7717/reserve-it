import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native'
import { Button } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import moment from 'moment';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth,storage } from '../../firebase/FirebaseConfig.js'


const AccountSetup4 = (props) => {

    const [monday, setMonday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: true, })
    const [tuesday, setTuesday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: true, })
    const [wednesday, setWednesday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: true, })
    const [thursday, setThursday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: true, })
    const [friday, setFriday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: true, })
    const [saturday, setSaturday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: false, })
    const [sunday, setSunday] = useState({ startTime: '9:00 AM', endTime: '6:00 PM', isOpen: false, })

    useEffect(() => {
        // console.log(monday.startTime)
        // console.log(monday.endTime)
        if (props.route.params) {
            console.log(moment(props?.route?.params?.endTime).format('LT'))
            if (props.route.params.day == 'monday') {
                setMonday({
                    ...monday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'tuesday') {
                setTuesday({
                    ...tuesday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'wednesday') {
                setWednesday({
                    ...wednesday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'thursday') {
                setThursday({
                    ...thursday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'friday') {
                setFriday({
                    ...friday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'saturday') {
                setSaturday({
                    ...saturday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            else if (props?.route?.params?.day == 'sunday') {
                setSunday({
                    ...sunday,
                    startTime: moment(props?.route?.params?.startTime).format('LT'),
                    endTime: moment(props?.route?.params?.endTime).format('LT'),
                    isOpen: props?.route?.params?.isOpen,
                })
            }
            console.log(sunday)
            console.log(props.route.params.day)
        }
        else {
            console.log('no params')
            console.log(monday)
        }

    }, [])

    const businessDoc = doc(db, "business_users", auth.currentUser.uid);
    // const businessDoc = doc(db, "business_users", "auth.uid");

    const addWorkingDays = async () => {

        const workingDaysInfo = [
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
        ]
        console.log(auth.currentUser.uid)

        await setDoc(businessDoc, workingDaysInfo, { merge: true })
            .then(
                (res) => {
                    console.log("response" + res)
                })
            .catch(
                (err) => {
                    console.log("error" + err)
                });
    };

    return (
        <View style={styles.container}>

            <HourComponent
                day='Monday'
                startTime={monday.startTime}
                endTime={monday.endTime}
                status={monday.isOpen == true ? 'Open' : 'Closed'}
                onPress={(day) => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Monday' }) }
                }}
            />
            <HourComponent
                day='Tuesday'
                startTime={tuesday.startTime}
                endTime={tuesday.endTime}
                status={tuesday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Tuesday' }) }
                }}
            />
            <HourComponent
                day='Wednesday'
                startTime={wednesday.startTime}
                endTime={wednesday.endTime}
                status={wednesday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Wednesday' }) }
                }}
            />
            <HourComponent
                day='Thursday'
                startTime={thursday.startTime}
                endTime={thursday.endTime}
                status={thursday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Thursday' }) }
                }}
            />
            <HourComponent
                day='Friday'
                startTime={friday.startTime}
                endTime={friday.endTime}
                status={friday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Friday' }) }
                }}
            />
            <HourComponent
                day='Saturday'
                startTime={saturday.startTime}
                endTime={saturday.endTime}
                status={saturday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Saturday' }) }
                }}
            />
            <HourComponent
                day='Sunday'
                startTime={sunday.startTime}
                endTime={sunday.endTime}
                status={sunday.isOpen == true ? 'Open' : 'Closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Sunday' }) }
                }}
            />

            <View style={{ justifyContent: 'center', margin: 20, marginTop: 20 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Pressed SAVE")
                        addWorkingDays()
                        props.navigation.navigate('AccountSetup5')
                    }}
                >

                    <Text style={{ color: '#fff', fontSize: 17 }}>
                        NEXT
                    </Text>

                </TouchableOpacity>

            </View>

        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);


export default AccountSetup4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 15

    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth - 105,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },


})