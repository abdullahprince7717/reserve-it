import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation  from './components/MaterialBottomNav.js'

// import signUp from './screens/Signup.js'
// import explore from './screens/Explore.js'
import homeScreen from './screens/HomeScreen.js'


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
    


    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Explore" component={homeScreen} options = {{headerShown :false}}/>
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
