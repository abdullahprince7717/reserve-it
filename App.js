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
import MainScreen from './screens/userInterface/MainScreen.js';
import OneSignal from 'react-native-onesignal';

export default function App() {
  OneSignal.setAppId("5dd07db9-fd2e-496a-a8fc-933bf66a1977");
  return (
    <CredentialsContext>
      <TimeSlotContext>
        <BusinessHoursContext>
          <AppointmentContext>
            <ContextProvider>
              <FavProvider>
              <NavigationContainer>
                {/* <MainScreen /> */}
                {console. disableYellowBox = true}                
                <StackNavigator />
                {/* <BusinessStack /> */}
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
