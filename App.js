import React, {useState} from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';
import AdminStack from './Navigation/AdminUIStack.js';
import {BackdropProvider} from 'react-native-propel-kit';


export default function App() {

  return (

      <BackdropProvider>
        <NavigationContainer>
            {/* <StackNavigator/> */}
            <BusinessStack/>
            {/* <AdminStack/> */}
        </NavigationContainer>
      </BackdropProvider>

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
