import * as React from 'react';
import {StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen.js';
import Explore from '../screens/Explore.js';
import MakeAppointment from '../screens/HomeScreen.js';
import Appointments from '../screens/Appointments.js';
import Settings from '../screens/Settings.js';

const Tab = createMaterialBottomTabNavigator();

function TabNavigation(props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >


            <Tab.Screen name="Home" 
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
            }}
            
            />


            <Tab.Screen name="Explore" 
            component={Explore}
            options={{
                tabBarLabel: 'Home',
            }}
            />


            <Tab.Screen name="makeAppointment" 
            component={MakeAppointment} 
            options={{
                tabBarLabel: 'Home',
            }}
            />


            <Tab.Screen name="Appointments" 
            component={Appointments} 
            options={{
                tabBarLabel: 'Home',
            }}
            />


            <Tab.Screen name="Settings" 
            component={Settings} 
            options={{
                tabBarLabel: 'Home',
            }}
            />
        
        </Tab.Navigator>
    

    );
}

export default TabNavigation;

const styles = StyleSheet.create({

    tabNavigation: {

    }
})