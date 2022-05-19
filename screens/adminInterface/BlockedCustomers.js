import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, useWindowDimensions, StatusBar, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchBar from '../../components/home/SearchBar.js'
import CustomerCard from '../../components/adminUIComponents/home/CustomerCard.js'


export default function blockedCustomers  (props) {

    return(
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', }}>
            <View style={{ width: '93%', margin: 10 }}>
                <SearchBar />
            </View>
    
            <View style={{ width: '93%', backgroundColor: 'grey', height: 2 }}></View>
    
            <View style={{ width: '90%', marginTop: 10 }}>
    
                <ScrollView >
    
                    <CustomerCard title='Abdullah' phone="03214323489" email='sdfbhwo@ddqed.com'
                        onPress={() => {
                            console.log('Pressed')
                            props.navigation.navigate('CustomerProfile')
                        }} />
    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />
                    
                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>
                    
                    
                </ScrollView>
                    
                    
            </View>
        </View>
    
    )             
}
