import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TextInput, Image, TouchableOpacity } from 'react-native';
import React, {useState,useEffect,useContext} from 'react'
import {auth} from  '../../firebase/FirebaseConfig.js'


// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { CredentialsContext } from '../../components/CredentialsContext.js';



const signIn = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);


  // const [IsSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {

    const subscribe = auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
        navigation.replace('Home')
        console.log("U S E R  C O N N E C T E D")
        console.log(user)
      }
        console.log("n o t C O N N E C T E D")
        
    })        
    return subscribe;

  },[])

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email.trim(), password)
    .then((credentials) => {

      const user = credentials.user;
      console.log('loggedIn as' + user?.email);
      console.log("Pressed")
      // persistLogin(user);
      

      // setIsSignedIn(true);

    })
    .catch((error) => {
      console.log("Error Message :" + error.message);

      console.log("Error Code :" + error.code);
      
    })
  }

  // const persistLogin = (credentials) => {

  //   AsyncStorage.setItem('userCredentials', JSON.stringify(credentials))
  //     .then(() => {
  //       // console.log('Stored credentials' + credentials);
  //       // setStoredCredentials(credentials);
  //       // console.log("Login Persistence Successful");
  //       navigation.navigate('Home');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  return (
      <>
      <View style={styles.mainView}>
          <View style={styles.upView}>
            <Image style ={{resizeMode: 'contain', height: '70%' }}  source={require('../../assets/logo.png')} /> 
          </View>
          <View style={styles.downView}>
            <Text style = {styles.heading}> Sign In </Text>

            <View style = {styles.form}>
              <TextInput
                placeholder="Email"
                placeholderTextColor= {"#fff"}
                onChangeText ={text=>setEmail(text)}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor= {"#fff"}
                onChangeText ={text=>setPassword(text)}
                secureTextEntry = {true} 
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity 
              style = {styles.button}
              onPress ={handleLogin}
              >
              <Text>Sign In </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.fbButton} >
              <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity>

              <View style = {{flexDirection:'row', justifyContent: 'center',marginTop:5}}>
                    <TouchableOpacity disabled ={true}>
                        <Text style = {{color: '#fff',fontSize: 15,textDecorationLine: 'underline'}}> Don't have an account? </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress ={ () => {
                        console.log('Pressed')
                        navigation.navigate('Signup')    
                    }}
                    >
                        <Text style = {{color: '#4267B2',fontSize: 15, }}>SignUp</Text> 
                    </TouchableOpacity>

                </View>
                
          </View>
      </View>
    </>
  )
}

export default signIn

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },

  upView: {
    flex:2,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  downView: {
    flex:5,
    width: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  heading: {
    display: 'flex',
    marginTop: 30,
    marginLeft: 20,
    color: '#fff',
    width: '80%',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor: '#000'
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop:30,
    marginLeft: 20,
    marginBottom: 50
    
  },

  textInput:{  
    width: '90%',
    borderWidth:1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop:20,
    color : '#fff'

  },

  button: {
    display: 'flex',
    width: '90%',
    backgroundColor: '#fff',
    marginLeft: 20,
    marginBottom: 20,
    height: 52,
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },

  fbText : {
    color: '#fff',
  },

  fbButton: {
    display: 'flex',
    width: '90%',
    backgroundColor: '#4267B2',
    marginLeft: 20,
    marginBottom: 20,
    height: 54,
    borderRadius: 10,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },

  text: {
    color:'#fff',
    marginLeft: 100,
    textDecorationLine: 'underline',

  }

});
