// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '../screens/userInterface/HomeScreen.js';
import Appointments from '../screens/userInterface/Appointments.js';
import Booking from '../screens/userInterface/BookAppointment.js';
import Explore from '../screens/userInterface/Explore.js';
import Login from '../screens/userInterface/Login.js';
import Signup from '../screens/userInterface/Signup.js';
import Settings from '../screens/userInterface/Settings.js';
import MapScreen from '../screens/userInterface/MapScreen.js';
import TabNavigation from '../components/MaterialBottomNav.js';
import BusinessProfile from '../screens/userInterface/BusinessProfile.js';
import BookingConfirm from '../screens/userInterface/BookingConfirm.js';
import EditProfile from '../screens/userInterface/EditProfile.js';
import AddPayment from '../screens/userInterface/AddPayment.js';

import AddService from '../screens/businessInterface/AddService.js';
import AddBusinessPayment from '../screens/businessInterface/AddBusinessPayment.js';
import BusinessSettings from '../screens/businessInterface/Settings.js';
import EditBusinessProfile from '../screens/businessInterface/EditBusinessProfile.js';

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#57B9BB' },
                // headerShown: false,
            }}
        >
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Explore"
                component={Explore}

            />
            <Stack.Screen
                name="Appointments"
                component={Appointments}
            />
            <Stack.Screen
                name="Booking"
                component={Booking}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
            />
            <Stack.Screen
                name="BusinessProfile"
                component={BusinessProfile}
            />
            <Stack.Screen
                name="BookingConfirm"
                component={BookingConfirm}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
            />
            <Stack.Screen
                name="AddPayment"
                component={AddPayment}
            />




            <Stack.Screen
                name="AddService"
                component={AddService}
            />

            <Stack.Screen
                name="BusinessSettings"
                component={BusinessSettings}
            />
            <Stack.Screen
                name="AddBusinessPayment"
                component={AddBusinessPayment}
            />
            <Stack.Screen
                name="EditBusinessProfile"
                component={EditBusinessProfile}
            />
            

        </Stack.Navigator>
    );
}
export default MyStack;