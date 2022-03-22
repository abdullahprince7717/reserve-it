import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TextInput, Image, TouchableOpacity } from 'react-native';
import React, {useState,useEffect} from 'react'
import {auth} from  '../../firebase/FirebaseConfig.js'
import {signInWithEmailAndPassword} from "firebase/auth";


const signIn = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [IsSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {

    const subscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate('Home')
      }
    })
    return subscribe;

  },[])

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email.trim(), password)
    .then((credentials) => {

      const user = credentials.user;
      console.log('loggedIn as' + user?.email);
      console.log("Pressed")
      // setIsSignedIn(true);

    })
    .catch((error) => {
      console.log("Error Message :" + error.message);

      console.log("Error Code :" + error.code);
    })
  }

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
