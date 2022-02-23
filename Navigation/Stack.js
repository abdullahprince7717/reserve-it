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
import BusinessProfile from '../screens/BusinessProfile.js';
import BookingConfirm from '../screens/BookingConfirm.js';
import EditProfile from '../screens/EditProfile.js';

function MyStack() {
    return (
        <Stack.Navigator
        initialRouteName="Signup"
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
        {/* <Stack.Screen
            name="Testing"
            component={Testing}
        /> */}
        {/* <Stack.Screen
            name="serviceCard"
            component={serviceCard}
        /> */}

        </Stack.Navigator>
    );
}

// const stack = createStackNavigator(screens);

// export default createAppContainer(stack);
export default MyStack;