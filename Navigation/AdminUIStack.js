import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../components/adminUIComponents/BottomTabNavigator.js';

import Home from '../screens/adminInterface/Home.js';
import Complaints from '../screens/adminInterface/Complaints.js';
import Settings from '../screens/adminInterface/Settings.js';
import Login from '../screens/adminInterface/Login.js';
import AddBusiness from '../screens/adminInterface/AddBusiness.js';
import AddClient from '../screens/adminInterface/AddClient.js';
import BusinessProfile from '../screens/adminInterface/BusinessProfile.js';
import ClientProfile from '../screens/adminInterface/ClientProfile.js';
import BlockedBusinesses from '../screens/adminInterface/BlockedBusinesses.js';
import BlockedClients from '../screens/adminInterface/BlockedClients.js';

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
                name="AddClient"
                component={AddClient}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BusinessProfile"
                component={BusinessProfile}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="ClientProfile"
                component={ClientProfile}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BlockedBusinesses"
                component={BlockedBusinesses}
                // options={{headerShown: false}}
            />
            <Stack.Screen
                name="BlockedClients"
                component={BlockedClients}
                // options={{headerShown: false}}
            />
        
        </Stack.Navigator>
    );
}
export default MyStack;