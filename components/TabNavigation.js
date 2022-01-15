import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js';
import Explore from './screens/Explore.js';
import MakeAppointment from './screens/HomeScreen.js';
import Appointments from './screens/Appointments.js';
import Settings from './screens/Settings.js';

const Tab = createBottomTabNavigator();

function tabNavigation(props) {
    return (

    
        <Tab.Navigator>

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="makeAppointment" component={MakeAppointment} />
            <Tab.Screen name="Appointments" component={Appointments} />
            <Tab.Screen name="Settings" component={Settings} />
        
        </Tab.Navigator>
    

    );
}

export default tabNavigation;