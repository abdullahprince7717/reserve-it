import { StyleSheet, Text, View,Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE,Marker } from "react-native-maps";
import React, { useState } from 'react'

const AccountSetup3 = () => {

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,})
    
    const [pin,setPin] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
    })

    const onChangeValue = (region) => {
        setRegion(region);
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                // provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                <Marker 
                    draggable = {true}
                    coordinate={{ latitude: 37.78825,
                        longitude: -122.4324,}}
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
            {/* <View style = {{top: '50%', left: '50%'}}>
                <Image style = {{height:40, width:40}}ource = {require('../../assets/logo.png')}/>
            </View> */}
        </View>
    )
}

export default AccountSetup3

const styles = StyleSheet.create({})