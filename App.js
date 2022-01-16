import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signin from './screens/login.js';
import TabNavigation from './components/MaterialBottomNav.js'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Signin" component={signin} options = {{headerShown :false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
