import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TextInput,Button, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const signUp = ({navigation}) => {

  return (
      <>
      <View style={styles.mainView}>
          <View style={styles.upView}>
            <Image style ={{resizeMode: 'contain', height: '60%' }}  source={require('../assets/logo.png')} /> 
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
                placeholderTextColor= {"#fff"}
                secureTextEntry = {true} 
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Phone number"
                placeholderTextColor= {"#fff"}
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Password"
                placeholderTextColor= {"#fff"}
                style={styles.textInput}
              />
              <TextInput
	              placeholder="Confirm Password"
                placeholderTextColor= {"#fff"}
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity style = {styles.button} >
              <Text>Sign In </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.fbButton} >
              <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity>

            <Text style = {styles.text}> Already an account?
            <TouchableOpacity >
              <Text style = {{color: '#4267B2',fontSize: 17 }}>SignIn</Text> 
            </TouchableOpacity>
            </Text>

    
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
    marginTop: 30,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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

  }

});
