import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TouchableRipple, } from 'react-native-paper'
import React, { useState, useEffect, useContext } from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import { BusinessHoursContext } from '../../global/BusinessHoursContext.js';
import {doc,setDoc} from 'firebase/firestore';
import {db,auth} from  '../../firebase/FirebaseConfig.js'


const BusinessHours = (props) => {

    const [monday,setMonday,tuesday,setTuesday,wednesday,setWednesday,thursday,setThursday,friday,setFriday,saturday,setSaturday,sunday,setSunday] = useContext(BusinessHoursContext);

    useEffect(() => {
        // console.log(props?.route?.params?.data)
        // setDays(props?.route?.params?.data)
        // console.log(days[0])
        console.log(monday)
        console.log(tuesday)
        console.log(wednesday)
        console.log(thursday)
        console.log(friday)
        console.log(saturday)
        console.log(sunday)

    }, [])

    const businessDoc = doc(db, "business_users", auth.currentUser.uid);
    // const businessDoc = doc(db, "business_users", "auth.uid");

    const addWorkingDays = async () => {

        const workingDaysInfo = {
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday,
        }
        console.log(auth.currentUser.uid)

        await setDoc(businessDoc, workingDaysInfo, { merge: true })
            .then(
                (res) => {
                    console.log("response" + res)
                    props.navigation.navigate('AccountSetup5');
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
                startTime={monday? monday.startTime :'9:00 AM'}
                endTime={monday? monday.endTime :'5:00 PM'}
                status={monday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Monday' }) }
                }}
            />
            <HourComponent
                day='Tuesday'
                startTime={tuesday? tuesday.startTime :'9:00 AM'}
                endTime={tuesday? tuesday.endTime :'5:00 PM'}
                status={tuesday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Tuesday' }) }
                }}
            />
            <HourComponent
                day='Wednesday'
                startTime={wednesday? wednesday?.startTime :'9:00 AM'}
                endTime={wednesday? wednesday?.endTime :'5:00 PM'}
                status={wednesday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Wednesday' }) }
                }}
            />
            <HourComponent
                day='Thursday'
                startTime={thursday? thursday.startTime :'9:00 AM'}
                endTime={thursday? thursday.endTime :'5:00 PM'}
                status={thursday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Thursday' }) }
                }}
            />
            <HourComponent
                day='Friday'
                startTime={friday? friday.startTime :'9:00 AM'}
                endTime={friday? friday.endTime :'5:00 PM'}
                status={friday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Friday' }) }
                }}
            />
            <HourComponent
                day='Saturday'
                startTime={saturday? saturday.startTime :'9:00 AM'}
                endTime={saturday? saturday.endTime :'5:00 PM'}
                status={saturday?.isOpen === true ? 'open' :'closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Saturday' }) }
                }}
            />
            <HourComponent
                day='Sunday'
                startTime={sunday? sunday.startTime :'9:00 AM'}
                endTime={sunday? sunday.endTime :'5:00 PM'}
                status={sunday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('AccountSetup4b', { day: 'Sunday' }) }
                }}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addWorkingDays()
                }}
            >
                <Text style={{ color: '#fff' }}>NEXT</Text>
            </TouchableOpacity>

        </View>
    )
}

export default BusinessHours

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
        height: 40,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',  
        margin:50,      

    },


})