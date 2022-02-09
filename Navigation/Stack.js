// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from '../screens/HomeScreen.js';
import Appointments from '../screens/Appointments.js';
import Booking from '../screens/BookAppointment.js';
import Explore from '../screens/Explore.js';
import Login from '../screens/Login.js';
import Signup from '../screens/Signup.js';
import Settings from '../screens/Settings.js';
import MapScreen from '../screens/MapScreen.js';
import TabNavigation from '../components/MaterialBottomNav.js';


// const screens = {


    // Home: {
    //     screen: TabNavigation,
    // },
    // Appointments: {
    //     screen: Appointments,
    // },
    // Booking: {
    //     screen: Booking,
    // },
    // Explore: {
    //     screen: Explore,
    // },
    // Login: {
    //     screen: Login,
    // },
    // Signup: {
    //     screen: Signup,
    // },
    // Settings: {
    //     screen: Settings,
    // },
    // Maps: {
    //     screen: MapScreen,
    // },

// }

function MyStack() {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            headerShown: false,
        }}
        >
        <Stack.Screen
            name="Home"
            component={TabNavigation}
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
        />
        <Stack.Screen
            name="Signup"
            component={Signup}
        />
        <Stack.Screen
            name="MapScreen"
            component={MapScreen}
        />
        </Stack.Navigator>
    );
}

// const stack = createStackNavigator(screens);

// export default createAppContainer(stack);
export default MyStack;