import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TouchableRipple, } from 'react-native-paper'
import React, { useState, useEffect, useContext } from 'react'
import HourComponent from '../../components/businessUIComponents/BusinessDay&Hour.js'
import { BusinessHoursContext } from '../../global/BusinessHoursContext.js';
import {doc,setDoc,getDoc,collection} from 'firebase/firestore';
import {db,auth} from  '../../firebase/FirebaseConfig.js'

const BusinessHours = (props) => {

    const [monday,setMonday,tuesday,setTuesday,wednesday,setWednesday,thursday,setThursday,friday,setFriday,saturday,setSaturday,sunday,setSunday] = useContext(BusinessHoursContext);
    const[businessHours,setBusinessHours] = useState(null)
    const[userData,setUserData] = useState(null) 

    const businessDoc = doc(db, "business_users", auth.currentUser.uid);
    // const businessRef = collection(db, "business_users")
    // const businessDoc = doc(db, "business_users", "auth.uid");

    const getUser = async() => {
        getDoc(businessDoc)
            .then((snapshot) => {

                if (snapshot.exists) {
                    setUserData(snapshot.data())
                    setMonday(snapshot.data().monday)
                    setTuesday(snapshot.data().tuesday)
                    setWednesday(snapshot.data().wednesday)
                    setThursday(snapshot.data().thursday)
                    setFriday(snapshot.data().friday)
                    setSaturday(snapshot.data().saturday)
                    setSunday(snapshot.data().sunday)

                    console.log(userData)
                }
                else {
                    console.log("No User Data")
                }
            })
            .catch((error) => {
                console.log(error.message)

            })
    }

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
                    // {props.navigation.navigate('BusinessStack',{screen:'Home'})} 
                    // props.navigation.goBack()
                })
            .catch(
                (err) => {
                    console.log("error" + err)
                });
    };

    useEffect(() => {
        // console.log(props?.route?.params?.data)
        // setDays(props?.route?.params?.data)
        // console.log(days[0])

        getUser();
        // console.log(monday)


    }, [])
    return (
        <View style={styles.container}>

            <HourComponent
                day='Monday'
                startTime={monday? monday.startTime :'9:00 AM'}
                endTime={monday? monday.endTime :'5:00 PM'}
                status={monday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Monday' }) }
                }}
            />
            <HourComponent
                day='Tuesday'
                startTime={tuesday? tuesday.startTime :'9:00 AM'}
                endTime={tuesday? tuesday.endTime :'5:00 PM'}
                status={tuesday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Tuesday' }) }
                }}
            />
            <HourComponent
                day='Wednesday'
                startTime={wednesday? wednesday?.startTime :'9:00 AM'}
                endTime={wednesday? wednesday?.endTime :'5:00 PM'}
                status={wednesday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Wednesday' }) }
                }}
            />
            <HourComponent
                day='Thursday'
                startTime={thursday? thursday.startTime :'9:00 AM'}
                endTime={thursday? thursday.endTime :'5:00 PM'}
                status={thursday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Thursday' }) }
                }}
            />
            <HourComponent
                day='Friday'
                startTime={friday? friday.startTime :'9:00 AM'}
                endTime={friday? friday.endTime :'5:00 PM'}
                status={friday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Friday' }) }
                }}
            />
            <HourComponent
                day='Saturday'
                startTime={saturday? saturday.startTime :'9:00 AM'}
                endTime={saturday? saturday.endTime :'5:00 PM'}
                status={saturday?.isOpen === true ? 'open' :'closed'}
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Saturday' }) }
                }}
            />
            <HourComponent
                day='Sunday'
                startTime={sunday? sunday.startTime :'9:00 AM'}
                endTime={sunday? sunday.endTime :'5:00 PM'}
                status={sunday?.isOpen === true ? 'open' :'closed' }
                onPress={() => {
                    console.log("Pressed")
                    { props.navigation.navigate('EditBusinessHours', { day: 'Sunday' }) }
                }}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addWorkingDays();
                    {props.navigation.goBack()}                
                }}
            >
                <Text style={{ color: '#fff' }}>Save</Text>
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