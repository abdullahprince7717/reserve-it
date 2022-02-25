import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TextInput, Image, TouchableOpacity } from 'react-native';



const signIn = ({navigation}) => {

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
                style={styles.textInput}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor= {"#fff"}
                secureTextEntry = {true} 
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity 
              style = {styles.button}
              onPress ={ () => {
                console.log('Pressed')
                navigation.navigate('Home')    
            }}
              >
              <Text>Sign In </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.fbButton} >
              <Text style = {styles.fbText}>Continue with Facebook </Text>
            </TouchableOpacity>

            <Text style = {styles.text}> Don't have an account?
            <TouchableOpacity 
              onPress ={ () => {
                console.log('Pressed')
                navigation.navigate('Signup')       //just for testing
            }}
            >
              <Text style = {{color: '#4267B2',fontSize: 17 }}> SignUp</Text> 
            </TouchableOpacity>
            </Text>

    
              {/* style={styles.facebookBtn}>
                <FontAwesome name='facebook' size={20} color='#fff' />
                <Text style={}>
                  Login With Facebook 
	              </Text> */}
            

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
