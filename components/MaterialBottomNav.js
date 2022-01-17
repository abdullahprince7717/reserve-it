import * as React from 'react';
import {StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen.js';
import Explore from '../screens/Explore.js';
import MakeAppointment from '../screens/MakeAppointment.js';
import Appointments from '../screens/Appointments.js';
import Settings from '../screens/Settings.js';

const Tab = createMaterialBottomTabNavigator();

function TabNavigation(props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ 
                backgroundColor: '#694fad',
                position: 'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                height: 55,
                elevation: 0,
                borderRadius: 20,
                overflow: 'hidden',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20, }}
        >


            <Tab.Screen name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ), 
            }}
            
            />


            <Tab.Screen name="Explore" 
            component={Explore}
            options={{
                tabBarLabel: 'Explore',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                ), 
            }}
            />


            <Tab.Screen name="makeAppointment" 
            component={MakeAppointment} 
            options={{
                tabBarLabel: 'Make',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="plus-circle-outline" color={color} size={26}  />
                ), 
            }}
            />


            <Tab.Screen name="Appointments" 
            component={Appointments} 
            options={{
                tabBarLabel: 'Appointments',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar-month-outline" color={color} size={26} />
                ), 
            }}
            />


            <Tab.Screen name="cog-outline" 
            component={Settings} 
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cog-outline" color={color} size={26} />
                ), 
            }}
            />
        
        </Tab.Navigator>
    

    );
}

export default TabNavigation;

// const styles = StyleSheet.create({

//     tabBar: {

//     },
//     tab:{
//         paddingBottom: 0,

//     }
// })