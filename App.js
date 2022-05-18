import React, {useState} from 'react'; 
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Navigation/Stack.js';
import BusinessStack from './Navigation/BusinessUIStack.js';
import AdminStack from './Navigation/AdminUIStack.js';
import {BackdropProvider} from 'react-native-propel-kit';

// import AppLoading from 'expo-app-loading';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { CredentialsContext } from './components/CredentialsContext.js';


export default function App() {

  // const [appReady, setAppReady] = useState(false);
  // const [storedCredentials, setStoredCredentials] = useState(null);

//   const CheckLoginCredentials = () => {
//     AsyncStorage.getItem('userCredentials')
//       .then((value) => {
//         if(value !== null) {
//           setStoredCredentials(JSON.parse(value));
//         }
//         else{
//           setStoredCredentials(null);
//         }
      
//       })
//     .catch((error) => {
//       console.log(error);
//     })

//   if(!appReady){
//     return(
//       <AppLoading
//         startAsync={CheckLoginCredentials}
//         onFinish={() => setAppReady(true)}
//         onError={console.warn}

//       />
//     )
//   }
// }

  return (

      <BackdropProvider>
        <NavigationContainer>
            {/* <StackNavigator/> */}
            {/* <BusinessStack/> */}
            <AdminStack/>
        </NavigationContainer>
      </BackdropProvider>
        
        
        







    // <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>

        // <NavigationContainer>
        //     <StackNavigator/>
        // </NavigationContainer>

    // </CredentialsContext.Provider>


  


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
