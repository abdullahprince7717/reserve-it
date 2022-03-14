import React, {useState} from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';


export default function App() {

  const [userType,setUserType] = useState('customer');


  return (
    
      // userType === 'customer' ? () => {
      //   return (
      //     <NavigationContainer>
      //       <StackNavigator/>
      //     </NavigationContainer>
      //   )
      // } 
      // : 
      // () => {

      //   console.log('business');
      // }

      <NavigationContainer>
          <StackNavigator/>
      </NavigationContainer>

      // <NavigationContainer>
      //     <BusinessStack/>
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
