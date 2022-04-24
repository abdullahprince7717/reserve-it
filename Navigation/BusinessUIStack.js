import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../components/businessUIComponents/BottomTabNavigator.js';

import AddService from '../screens/businessInterface/AddService.js';
import AddBusinessPayment from '../screens/businessInterface/AddBusinessPayment.js';
import BusinessSettings from '../screens/businessInterface/Settings.js';
import EditBusinessProfile from '../screens/businessInterface/EditBusinessProfile.js';
import CustomerAppointments from '../screens/businessInterface/CustomerAppointments.js';
import Checkout from '../screens/businessInterface/Checkout.js';
import BusinessHours from '../screens/businessInterface/BusinessHours.js';
import EditBusinessHours from '../screens/businessInterface/EditBusinessHours.js';
import ServicesList from '../screens/businessInterface/ServicesList.js';
import EditService from '../screens/businessInterface/EditService.js';
import Signup from '../screens/businessInterface/Signup.js';
import Login from '../screens/businessInterface/Login.js';
import CheckoutAppointment from '../screens/businessInterface/CheckoutAppointment.js';
import CheckoutService from '../screens/businessInterface/CheckoutService.js';


const Stack = createNativeStackNavigator();

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
                name="Home"
                component={TabNavigation}
                options={{headerShown: false}}
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
            <Stack.Screen
                name="CustomerAppointments"
                component={CustomerAppointments}
            />

            <Stack.Screen
                name="Checkout"
                component={Checkout}
            />

            <Stack.Screen
                name="ServicesList"
                component={ServicesList}
            />

            <Stack.Screen
                name="BusinessHours"
                component={BusinessHours}
            />

            <Stack.Screen
                name="EditBusinessHours"
                component={EditBusinessHours}
            />
            <Stack.Screen
                name="EditService"
                component={EditService}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CheckoutAppointment"
                component={CheckoutAppointment}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="CheckoutService"
                component={CheckoutService}
                options={{headerShown: true}}
            />
            

        </Stack.Navigator>
    );
}
export default MyStack;