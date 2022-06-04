import { StyleSheet, Text, View, Image,TouchableOpacity,Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { Button } from 'react-native-paper';
import React, { useState,useEffect } from 'react'
import * as Location from 'expo-location';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth,storage } from '../../firebase/FirebaseConfig.js'
import Geolocation from 'react-native-geolocation-service';


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
        // (async () => {
        //     let { status } = await Location.requestForegroundPermissionsAsync();
        //     if (status !== 'granted') {
        //         setErrorMsg('Permission to access location was denied');
        //         return;
        //     }

        //     let location = await Location.getCurrentPositionAsync({});
        //     setLocation(location);
        // })();
        // // console.log(auth.currentUser.uid)
        // console.log(location?.coords?.longitude);

        // Geolocation.getCurrentPosition(
        //     (position) => {
        //       console.log(position);
        //     },
        //     (error) => {
        //       // See error code charts below.
        //       console.log(error.code, error.message);
        //     },
        //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        // );
        console.log(region)
                

        
    }, [pin]);

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
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                <Marker
                    draggable={true}
                    coordinate={{
                    
                        // latitude: location?.coords?.latitude,

                        latitude: 37.78825 ,
                        // longitude: location?.coords?.longitude,
                        longitude: -122.4324,
                    }}
                    onRegionChangeComplete={onChangeValue}
                    onDragStart = {(e) => {console.log("DragStart",e.nativeEvent.coordinates)}}
                    onDragEnd = {(e) => {
                        setPin({
                            latitude:  e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })    
                    }}
                />
            </MapView>
            <View
                style={{
                    position: 'absolute', top: '85%', alignSelf: 'flex-end', left: '14%',
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Pressed SAVE")
                        addLocationInfo();
                        props.navigation.navigate('AccountSetup4')
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


export default AccountSetup3

const styles = StyleSheet.create({
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