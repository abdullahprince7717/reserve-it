import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../components/businessUIComponents/BottomTabNavigator.js';

import AddService from '../screens/businessInterface/AddService.js';
import AddBusinessPayment from '../screens/businessInterface/AddBusinessPayment.js';
import BusinessSettings from '../screens/businessInterface/Settings.js';
import EditBusinessProfile from '../screens/businessInterface/EditBusinessProfile.js';
import CustomerAppointments from '../screens/businessInterface/CustomerAppointments.js';

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
            

        </Stack.Navigator>
    );
}
export default MyStack;