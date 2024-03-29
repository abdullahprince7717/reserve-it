import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';

import { db, auth } from '../../firebase/FirebaseConfig.js'
import { doc, setDoc } from 'firebase/firestore';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, signInWithRedirect, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// import {Spinner} from 'react-native-loading-spinner-overlay';

// import { getNotificationInbox } from 'native-notify';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CredentialsContext } from '../../components/CredentialsContext.js';




const SignUp = ({ navigation }) => {

  // registerNNPushToken(2874, '8RGIzG08cvN06b2755Iopz');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.number()
      .max(11, 'Write Valid Phone Number')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    confirmPassword: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  useEffect(() => {
    // let notifications = await getNotificationInbox(2874, '8RGIzG08cvN06b2755Iopz');
    // console.log("notifications: ", notifications);
    // setData(notifications);
  }, []);


  const storeData = (userDoc, appointmentsDoc, reviewsDoc, complaintsDoc,) => {

  }


  const signUpWithFacebook = () => {

    // const provider = new FacebookAuthProvider();
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const signUp = () => {
    // setLoading = true;
    createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((credentials) => {
        // setLoading = true;
        // let userCredentials = credentials;
        // console.log(userCredentials);
        navigation.replace("Home")

        const userDoc = doc(db, "users", credentials.user.uid)
        const appointmentsDoc = doc(db, "appointments", credentials.user.uid);
        const reviewsDoc = doc(db, "reviews", credentials.user.uid);
        const complaintsDoc = doc(db, "complaints", credentials.user.uid);
        const roleDoc = doc(db, "roles", credentials.user.uid);

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
          },
          business_email: '',
          client_email: email,

        }

        const reviews = {
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
        const role = {
          user_email: email,
          user_id: auth.currentUser.uid,
          role: 'customer',
        }

        setDoc(userDoc, userData)
          .then(() => {
            // alert("User Created Successfully")
          })
          .catch((error) => {
            alert(error.message)
          })

        setDoc(appointmentsDoc, appointments)
          .then(() => {
            console.log("appointments created Successfully")
          })
          .catch((error) => {
            alert(error.message)
          })

        setDoc(reviewsDoc, reviews)
          .then(() => {
            console.log("reviews created Successfully")
          })
          .catch((error) => {
            alert(error.message)
          })

        setDoc(complaintsDoc, complaints)
          .then(() => {
            console.log("complaints created Successfully")
          })
          .catch((error) => {
            alert(error.message)
          })
        setDoc(roleDoc, role)
          .then(() => {
            console.log("role created Successfully")
          })
          .catch((error) => {
            alert(error.message)
          })




      })
      .catch((error) => {
        console.log("Error Message :" + error.message);

        console.log("Error Message :" + error.code);
        alert(error.message)
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
          <Image style={{ resizeMode: 'contain', height: '60%' }} source={require('../../assets/logo.png')} />
        </View>
        <ScrollView style={styles.downView}>
          <Text style={styles.heading}> sdSign Up </Text>

          <View style={styles.form}>
            <Formik
              initialValues={{ name: '', email: '', phone, password: '', confirmPassword: '', }}
              onSubmit={values => console.log(values)}
              validationSchema={SignupSchema}
            >
              {({errors, touched }) => (
                <View>
                  <TextInput
                    placeholder="Full name"
                    value={name}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => setName(text)}
                    style={styles.textInput}
                  />
                  {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
                  <TextInput
                    placeholder="Email"
                    value={email}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => setEmail(text)}
                    style={styles.textInput}
                  />
                  {/* <Spinner

              visible={loading}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            /> */}
                  <TextInput
                    placeholder="Phone number"
                    value={phone}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => setPhone(text)}
                    style={styles.textInput}
                  />
                  <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    placeholderTextColor={"#fff"}
                    style={styles.textInput}
                  />
                  <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                    placeholderTextColor={"#fff"}
                    style={confirmPassword === password ? styles.textInput : styles.textInputError}
                  />

                  
                </View>
              )}
            </Formik>
            <TouchableOpacity style={styles.button}
                    onPress={() => {
                      signUp();
                    }} >
                    <Text>Sign Up </Text>
                  </TouchableOpacity>
            </View>


            {/* <TouchableOpacity 
              style = {styles.fbButton} 
              onPress = { () => {
                
                signUpWithFacebook();
              }}
              >
              <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity> */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
              <TouchableOpacity disabled={true}>
                <Text style={{ color: '#fff', fontSize: 15, textDecorationLine: 'underline' }}> Already have an account? </Text>
              </TouchableOpacity>


              <TouchableOpacity
                onPress={() => {
                  console.log('Pressed')
                  navigation.navigate('Login')
                }}
              >
                <Text style={{ color: '#4267B2', fontSize: 15, fontWeight: 'bold' }}>SignIn</Text>
              </TouchableOpacity>

            </View>


        </ScrollView>

      </View>
    </>
  )
}

export default SignUp

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
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 30

  },

  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    color: '#fff'

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

  fbText: {
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
    color: '#fff',
    marginLeft: 100,
    textDecorationLine: 'underline',

  },

  textInputError: {
    borderColor: 'red',
    borderWidth: 1,
    width: '90%',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    color: '#fff',
    height: 52,

  }

});