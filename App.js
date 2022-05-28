import React, {useState} from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';
import AdminStack from './Navigation/AdminUIStack.js';
import  CartProvider  from './global/CartContext.js';



export default function App() {

  return (

      <CartProvider>
        <NavigationContainer>
            {/* <StackNavigator/> */}
            <BusinessStack/>
            {/* <AdminStack/> */}
        </NavigationContainer>
      </CartProvider>

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
