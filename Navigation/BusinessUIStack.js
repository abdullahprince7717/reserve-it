import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../components/businessUIComponents/BottomTabNavigator.js';

import AddService from '../screens/businessInterface/AddService.js';
import AddBusinessPayment from '../screens/businessInterface/AddBusinessPayment.js';
import BusinessSettings from '../screens/businessInterface/Settings.js';
import EditBusinessProfile from '../screens/businessInterface/EditBusinessProfile.js';
import ClientAppointments from '../screens/businessInterface/ClientAppointments.js';
import Checkout from '../screens/businessInterface/Checkout.js';
import BusinessHours from '../screens/businessInterface/BusinessHours.js';
import EditBusinessHours from '../screens/businessInterface/EditBusinessHours.js';
import ServicesList from '../screens/businessInterface/ServicesList.js';
import EditService from '../screens/businessInterface/EditService.js';
import Signup from '../screens/businessInterface/Signup.js';
import Login from '../screens/businessInterface/Login.js';
import CheckoutAppointment from '../screens/businessInterface/CheckoutAppointment.js';
import CheckoutService from '../screens/businessInterface/CheckoutService.js';
import ForgotPassword from '../screens/businessInterface/ForgotPassword.js';
import AccountSetup1 from '../screens/businessInterface/AccountSetup1.js';
import AccountSetup2 from '../screens/businessInterface/AccountSetup2.js';
import AccountSetup3 from '../screens/businessInterface/AccountSetup3.js';
import AccountSetup4 from '../screens/businessInterface/AccountSetup4.js';
import AccountSetup5 from '../screens/businessInterface/AccountSetup5.js';
import AccountSetup6 from '../screens/businessInterface/AccountSetup6.js';
import AddImages from '../screens/businessInterface/AddImages.js';



const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: { opacity:0.5 },
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
                name="ClientAppointments"
                component={ClientAppointments}
            />

            <Stack.Screen
                name="Checkout"
                component={Checkout}
                screenOptions={{
                    headerShown: false,
                }}
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
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="AccountSetup1"
                component={AccountSetup1}
                options={{headerShown: true,
                    title: 'Account Setup',}}
            />
            <Stack.Screen
                name="AccountSetup2"
                component={AccountSetup2}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="AccountSetup3"
                component={AccountSetup3}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="AccountSetup4"
                component={AccountSetup4}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="AccountSetup5"
                component={AccountSetup5}
                options={{headerShown: true}}
            />
            <Stack.Screen
                name="AccountSetup6"
                component={AccountSetup6}
                options={{headerShown: true}}
            />

            <Stack.Screen
                name="AddImages"
                component={AddImages}
                options={{headerShown: true}}
            />
            

        </Stack.Navigator>
    );
}
export default MyStack;