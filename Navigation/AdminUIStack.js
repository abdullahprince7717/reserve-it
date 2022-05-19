import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../components/adminUIComponents/BottomTabNavigator.js';

import Home from '../screens/adminInterface/Home.js';
import Complaints from '../screens/adminInterface/Complaints.js';
import Settings from '../screens/adminInterface/Settings.js';
import Login from '../screens/adminInterface/Login.js';
import AddBusiness from '../screens/adminInterface/AddBusiness.js';
import AddCustomer from '../screens/adminInterface/AddCustomer.js';
import BusinessProfile from '../screens/adminInterface/BusinessProfile.js';
import CustomerProfile from '../screens/adminInterface/CustomerProfile.js';
import BlockedBusinesses from '../screens/adminInterface/BlockedBusinesses.js';
import BlockedCustomers from '../screens/adminInterface/BlockedCustomers.js';

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
                name="Complaints"
                component={Complaints}
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
                name="AddBusiness"
                component={AddBusiness}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="AddCustomer"
                component={AddCustomer}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BusinessProfile"
                component={BusinessProfile}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="CustomerProfile"
                component={CustomerProfile}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BlockedBusinesses"
                component={BlockedBusinesses}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BlockedCustomers"
                component={BlockedCustomers}
                // options={{headerShown: false}}
            />
        
        </Stack.Navigator>
    );
}
export default MyStack;