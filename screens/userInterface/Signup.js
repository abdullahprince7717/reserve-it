import React, {useState,useContext,useEffect} from 'react'
import { StyleSheet, View,Text,TextInput, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import {doc,setDoc} from 'firebase/firestore';
import {createUserWithEmailAndPassword,signInWithRedirect,FacebookAuthProvider ,GoogleAuthProvider} from "firebase/auth";

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CredentialsContext } from '../../components/CredentialsContext.js';




const signUp = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  
  const storeData = (userDoc,appointmentsDoc,reviewsDoc,complaintsDoc,) => {

  }

  const signUpWithFacebook = () => {

    // const provider = new FacebookAuthProvider();
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth,provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

  const signUp = () => {

    createUserWithEmailAndPassword(auth, email.trim(), password)
    .then((credentials) => {

        // let userCredentials = credentials;
        // console.log(userCredentials);
        navigation.replace("Home")
        
        const userDoc = doc(db,"users",credentials.user.uid)   
        const appointmentsDoc = doc(db,"appointments",credentials.user.uid);
        const reviewsDoc = doc(db,"reviews",credentials.user.uid);
        const complaintsDoc = doc(db,"complaints",credentials.user.uid);
        
        console.log("A U T H ID :" + credentials.user.uid)
        // persistLogin(userCredentials);

        // const userDoc = doc(db,"users","auth.uid")
    
        const userData = {
          name: name,
          phone: phone,
          email: email,
          address: "",
          is_blocked: false,
        }

        const appointments = {
          date: '',
          time: '',
          service: '',
          status: {
            is_pending: false,
            is_completed: false,
            is_cancelled: false,
          } ,
          business_email: '',
          client_email: email,

      }

      const reviews  = {
        review: '',
        rating: '',
        business_email: '',
        client_email: email,
        appointment_id: '',
      }

      const complaints = {
        complaint: '',
        business_email: '',
        client_email: email,
        appointment_id: '',
        created_at: '',
      }

      setDoc(userDoc, userData)
        .then(() =>{
          // alert("User Created Successfully")
        })
        .catch((error) => {
          alert(error.message)
        })

        setDoc(appointmentsDoc, appointments)
        .then(() =>{
            console.log("appointments created Successfully")
        })
        .catch((error) => {
            alert(error.message)
        })

        setDoc(reviewsDoc, reviews)
        .then(() =>{
            console.log("reviews created Successfully")
        })
        .catch((error) => {
            alert(error.message)
        })

        setDoc(complaintsDoc, complaints)
        .then(() =>{
            console.log("complaints created Successfully")
        })
        .catch((error) => {
            alert(error.message)
        })



    



      })
    .catch((error) => {
        console.log("Error Message :" + error.message);

        console.log("Error Message :" + error.code);
    })
    
  }

  // const persistLogin = (credentials) => {

  //   AsyncStorage.setItem('userCredentials', JSON.stringify(credentials))
  //       .then(() => {
  //           console.log('Stored credentials' + credentials);
  //           setStoredCredentials(credentials);
  //           // navigation.navigate('Home');
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       })

  //   }

  return (
      <>
      <View style={styles.mainView}>
          <View style={styles.upView}>
            <Image style ={{resizeMode: 'contain', height: '60%' }}  source={require('../../assets/logo.png')} /> 
          </View>
          <ScrollView style={styles.downView}>
            <Text style = {styles.heading}> Sign Up </Text>

            <View style = {styles.form}>
              <TextInput
                placeholder="Full name"
                value={name}
                placeholderTextColor= {"#fff"}
                onChangeText ={text=>setName(text)}
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Email"
                value={email}
                placeholderTextColor= {"#fff"}
                onChangeText ={text=>setEmail(text)}
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Phone number"
                value={phone}
                placeholderTextColor= {"#fff"}
                onChangeText ={text=>setPhone(text)}
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Password"
                value={password}
                secureTextEntry = {true}
                onChangeText ={text=>setPassword(text)}
                placeholderTextColor= {"#fff"}
                style={styles.textInput}
              />
              {/* <TextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                secureTextEntry = {true}
                onChangeText ={text=>setConfirmPassword(text)}
                placeholderTextColor= {"#fff"}
                style={confirmPassword===password?styles.textInput:styles.textInputError}
              /> */}
            </View>

            <TouchableOpacity style = {styles.button} 
              onPress ={ () => {
                signUp();  
            }} >
              <Text>Sign Up </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.fbButton} 
              onPress = { () => {
                signUpWithFacebook();
              }}
              >
              <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity>

            <Text style = {styles.text}> Already have an account?
            <TouchableOpacity
              onPress = {() => {
                navigation.navigate("Login")
              }}
            >
              <Text style = {{color: '#4267B2',fontSize: 17 }}>SignIn</Text> 
            </TouchableOpacity>
            </Text>

    

          </ScrollView>

      </View>
    </>
  )
}

export default signUp

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
    
    width: '100%',
    height: '20%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  downView: {
    
    width: '100%',
    height: '80%',
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
    backgroundColor: '#000',
    borderTopLeftRadius: 80,
  },

   form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    marginTop:30,
    marginLeft: 20,
    marginBottom: 30
    
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
    marginBottom: 10,
    height: 52,
    borderRadius: 10,
    marginBottom: 15,
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
    height: 54,
    borderRadius: 10,
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },

  text: {
    color:'#fff',
    marginLeft: 100,
    textDecorationLine: 'underline',

  },

  textInputError:{
    borderColor: 'red',
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop:20,
    color : '#fff',
    height: 52,

  }

});