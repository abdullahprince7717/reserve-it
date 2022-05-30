import { StyleSheet, Text, View, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Button } from 'react-native-paper';
import React, { useState,useEffect } from 'react'
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth,storage } from '../../firebase/FirebaseConfig.js'

const AccountSetup3 = (props) => {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const [pin, setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })

    const onChangeValue = (region) => {
        setRegion(region);
    }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const docRef = doc(db, "business_users", auth.currentUser.uid);



    const addLocationInfo = async () => {

        const locationInfo = {
            longitude: region.longitude,
            latitude: region.latitude
            
        }
        

        await setDoc(docRef, locationInfo, { merge: true })
            .then(
                (res) => {
                    console.log("response" + res)
                    
                })
            .catch(
                (err) => {
                    console.log("error" + err)
                });
    };


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
        console.log(auth.currentUser.uid)
        // console.log(location.coords.longitude);
        
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                // provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                <Marker
                    draggable={true}
                    coordinate={{
                        latitude: 37.78825 ,
                        // longitude: location.coords.longitude,
                        longitude: -122.4324,
                    }}
                // onRegionChangeComplete={onChangeValue}
                // onDragStart = {(e) => {console.log("DragStart",e.nativeEvent.coordinates)}}
                // onDragEnd = {(e) => {
                //     setPin({
                //         latitude:  e.nativeEvent.coordinate.latitude,
                //         longitude: e.nativeEvent.coordinate.longitude
                //     })    
                // }}
                />
            </MapView>
            <View
                style={{
                    position: 'absolute', top: '90%', alignSelf: 'flex-end', left: '35%',
                }}
            >
                <Button icon="camera" mode="contained" onPress={() => {
                    console.log('Pressed')
                    addLocationInfo()
                    props.navigation.navigate('AccountSetup4')
                    
                }}>
                    Next
                </Button>
            </View>
        </View>
    )
}

export default AccountSetup3

const styles = StyleSheet.create({})