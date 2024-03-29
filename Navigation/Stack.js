// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/userInterface/HomeScreen.js';
import Appointments from '../screens/userInterface/Appointments.js';
import Booking from '../screens/userInterface/BookAppointment.js';
import Explore from '../screens/userInterface/Explore.js';
import Login from '../screens/userInterface/Login.js';
import Signup from '../screens/userInterface/Signup.js';
import Settings from '../screens/userInterface/Settings.js';
import MapScreen from '../screens/userInterface/MapScreen.js';
import MapsTestScreen from '../screens/userInterface/MapsTestScreen.js';
import TabNavigation from '../components/MaterialBottomNav.js';
import BusinessProfile from '../screens/userInterface/BusinessProfile.js';
import BookingConfirm from '../screens/userInterface/BookingConfirm.js';
import EditProfile from '../screens/userInterface/EditProfile.js';
import Payment from '../screens/userInterface/Payment.js';
import PaymentCardForm from '../screens/userInterface/PaymentCardForm.js';
import Feedback from '../screens/userInterface/Feedback.js';
import AdminStack from '../Navigation/AdminUIStack.js';
import BusinessStack from '../Navigation/BusinessUIStack.js';
import MainScreen from  '../screens/userInterface/MainScreen.js'
import OnBoardingScreen from '../screens/userInterface/OnBoardingScreen.js'

// import TimeSlot from '../components/appointments/TimeSlotCreator.js';

// import { CredentialsContext } from './../components/CredentialsContext.js';


function MyStack() {
    return (
        
        <Stack.Navigator
            initialRouteName="OnBoardingScreen"
            screenOptions={{
                headerTintColor: '#000',
                headerStyle: { backgroundColor: '#fff' },
                headerShown: false,
            }}
        >
            
            <Stack.Screen
                name="Home"
                component={TabNavigation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
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
                options={{headerShown: false}}
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
                name="MapsTest"
                component={MapsTestScreen}
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
                options={{headerShown:true}}

            />
            <Stack.Screen
                name="Payment"
                component={Payment}
                options={{headerShown:true}}
            />
            <Stack.Screen
                name="PaymentCardForm"
                component={PaymentCardForm}
                options={{headerShown:true}}
            />
            <Stack.Screen
                name="Feedback"
                component={Feedback}
                options={{headerShown:true}}
            />
            <Stack.Screen
                name="AdminStack"
                component={AdminStack}
                screenOptions={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="BusinessStack"
                component={BusinessStack}
                screenOptions={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
                screenOptions={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="OnBoardingScreen"
                component={OnBoardingScreen}
                screenOptions={{
                    headerShown: false,
                }}
            />
            
        

        </Stack.Navigator>
    );
}
export default MyStack;