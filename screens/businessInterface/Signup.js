import React, {useState} from 'react'
import { StyleSheet, View,Text,TextInput, ScrollView, Image, TouchableOpacity, StatusBar} from 'react-native';
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import {doc,setDoc} from 'firebase/firestore';
import {createUserWithEmailAndPassword } from "firebase/auth";



const signUp = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {

        let userCredentials = credentials;
        console.log(userCredentials);
        navigation.navigate("AccountSetup1")
        const userDoc = doc(db,"business_users",credentials.user.uid)
    
        const userData = {
            name: name,
            phone: phone,
            email: email,
            password: password,
            test : [{
                test1: "test1",
                test2: "test2",
                test3: "test3"
            },

            {
                test1: "test1",
                test2: "test2",
            }
        ]         

        }

        setDoc(userDoc, userData)
        .then(() =>{
            alert("User Created Successfully")
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
                        placeholderTextColor= {"#fff"}
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
                        placeholderTextColor= {"#fff"}
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
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor= {"#fff"}
                        style={styles.textInput}
                    />
            </View>

            <TouchableOpacity style = {styles.button} 
                onPress ={ () => {
                    signUp();    
                }} >
                <Text>Sign Up </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.fbButton} >
                <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity>
            
            <View style = {{flexDirection:'row', justifyContent: 'center',marginTop:5}}>
                <TouchableOpacity disabled ={true}>
                    <Text style = {{color: '#fff',fontSize: 15,textDecorationLine: 'underline'}}> Already have an account? </Text>
                </TouchableOpacity>
                    

                <TouchableOpacity
                    onPress ={ () => {
                    console.log('Pressed')
                    navigation.navigate('Login')    
                }}
                >
                    <Text style = {{color: '#4267B2',fontSize: 15, }}>SignIn</Text> 
                </TouchableOpacity>
                
            </View>
    
                {/* style={styles.facebookBtn}>
                    <FontAwesome name='facebook' size={20} color='#fff' />
                <Text style={}>
                    Login With Facebook 
	            </Text> */}
            

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
    backgroundColor: '#57B9BB',
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
}
});