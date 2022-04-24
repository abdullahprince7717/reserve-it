import React, {useState} from 'react';
import { View,StyleSheet,StatusBar,Text,ScrollView,useWindowDimensions } from "react-native";
import Card from  '../../components/businessUIComponents/AppointmentCard.js';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


function appointments(props) {

    return(
        <ScrollView style={styles.container}>
        <View >
            <Card
                customerName="Arslan Saleem"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />

            <Card
                customerName="Abdullah Ali"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />

            <Card
                customerName="Abdullah Ali"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />
            <Card
                customerName="Abdullah Ali"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />
            <Card
                customerName="Abdullah Ali"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />
            <Card
                customerName="Abdullah Ali"
                serviceName="Grooming"
                servicePrice="Pkr. 1000 "
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    // navigation.navigate('BusinessProfile')
                }}
            />


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