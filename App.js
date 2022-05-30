import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';
import AdminStack from './Navigation/AdminUIStack.js';
import ContextProvider from './global/CartContext.js';
import AppointmentContext from './global/AppointmentContext.js';
// import TimeSlotContext from './global/TimeSlotContext.js';


export default function App() {

  return (
    // <TimeSlotContext>
      <AppointmentContext>
        <ContextProvider>
          <NavigationContainer>
            {/* <StackNavigator /> */}
            {/* <BusinessStack/> */}
            <AdminStack/>
          </NavigationContainer>
        </ContextProvider>
      </AppointmentContext>
    // </TimeSlotContext>
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
