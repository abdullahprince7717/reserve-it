import React, { useState } from 'react';
// import { registerRootComponent } from 'expo';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';
import AdminStack from './Navigation/AdminUIStack.js';
import ContextProvider from './global/CartContext.js';
import AppointmentContext from './global/AppointmentContext.js';
import BusinessHoursContext from './global/BusinessHoursContext.js';
import TimeSlotContext from './global/TimeSlotContext.js';
import CredentialsContext from './global/CredentialsContext.js';
import FavProvider from './global/FavouriteContext';

export default function App() {

  return (
    <CredentialsContext>
      <TimeSlotContext>
        <BusinessHoursContext>
          <AppointmentContext>
            <ContextProvider>
              <FavProvider>
              <NavigationContainer>
                {/* <StackNavigator /> */}
                <BusinessStack />
                {/* <AdminStack/> */}
              </NavigationContainer>
              </FavProvider>
            </ContextProvider>
          </AppointmentContext>
        </BusinessHoursContext>
      </TimeSlotContext>
    </CredentialsContext>
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
