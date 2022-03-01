import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Appointments from '../../screens/businessInterface/CustomerAppointments.js'
import Settings from '../../screens/businessInterface/Settings.js';

const Tab = createMaterialBottomTabNavigator();

function TabNavigation(props) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor='#57B9BB'
            inactiveColor="#000"
            barStyle={{ 
                backgroundColor: '#fff',
                position: 'absolute',
                // bottom: 10,
                // left: 10,
                // right: 10,
                height: 55,
                elevation: 1,
                // borderRadius: 20,
                borderColor: 'grey',
                borderWidth:0.5,
                overflow: 'hidden',
                // borderTopLeftRadius: 20,
                // borderTopRightRadius: 20,
            }}
        >


            <Tab.Screen name="Appointments" 
            component={Appointments}
            options={{
                tabBarLabel: 'Appointments',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="calendar-month-outline" color={color} size={26} />
                ), 
            }}
            
            />


            <Tab.Screen name="Settings" 
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