import {View,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity } from "react-native";
import{ Text, Caption, Title, TouchableRipple,} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { FontAwesome,EvilIcons } from "@expo/vector-icons/"
import {db,auth} from  '../../firebase/FirebaseConfig.js'
import {doc,getDoc} from 'firebase/firestore';
import React, {useState,useEffect,useContext} from 'react';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { CredentialsContext } from '../../components/CredentialsContext.js';

function settings(props) {
    
    const [userData,setUserData] = useState(null);
    
    // const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{

            props.navigation.replace('Login')
            console.log("SignOut Successful");

            // AsyncStorage.removeItem('userCredentials')
            // .then(()=>{
            //     setStoredCredentials("");
            //     props.navigation.replace('Login')
            //     console.log("SignOut Successful");
                
            // })
            // .catch((error)=>{
            //     console.log(error.message)
            // })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    

    useEffect(() => {
        const myDoc = doc(db, "users", auth.currentUser.uid)
        // const myDoc = doc(db, "users", "auth.uid")
        getDoc(myDoc)
        .then((snapshot) => {

            if(snapshot.exists){
                setUserData(snapshot.data())
                // console.log(storedCredentials);

                // console.log(myDoc)
            }
            else{
                console.log("No User Data")
            }
        })
        .catch((error) => {
            console.log(error.message)
            
        })
        
    },[])


    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.userInfoSection}>
                <View style  ={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Title style = {styles.title}>
                        {/* Abdullah Ali */}
                        {
                            userData?.name 
                        }
                    </Title>

                    <TouchableOpacity  
                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('EditProfile')        
                    }}>
                        <FontAwesome color="black" name="edit" size={27} />

                    </TouchableOpacity>
                    
                </View>

                {/* <Caption style = {styles.caption}>
                    Username
                </Caption> */}
                
                <View style = {styles.userInfoSection}>
                    
                    {(userData?.address) ? 
                        <View style = {styles.row}>
                            <Icon 
                                name = "map-marker-radius"
                                color= '#000'
                                size = {20}
                            />
                            <Text style = {{marginLeft: 5}} >
                                Address: {userData?.address}
                            </Text>
                        </View>
                        :
                        null
                    }   
                    
                    <View style = {styles.row}>
                        <Icon 
                            name = "phone"
                            color= '#000'
                            size = {20}
                        />
                        <Text style = {{marginLeft: 5}}>
                            Phone  {userData?.phone}
                        </Text>
                    </View>
                    <View style = {styles.row}>
                        <Icon 
                            name = "email"
                            color= '#000'
                            size = {20}
                        />
                        <Text style = {{marginLeft: 5}}>
                            Email  {userData?.email}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{borderBottomColor: 'grey',borderBottomWidth: 0.5}}/>

            <View style={styles.menuWrapper}>
                <TouchableRipple 
                    onPress = {() => console.log('pressed')}
                > 
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "heart-outline"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Your Favourites</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                    onPress = {() => {
                        console.log('pressed')
                        {props.navigation.navigate('Payment')}
                }}
                >
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "credit-card"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple
                    onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "share-outline"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Share with your friends</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple
                    onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <Icons
                            name = "rate-review"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Reviews</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <Icons 
                            name = "feedback"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Feedback</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple 
                onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <FontAwesome 
                            name = "exclamation-circle"
                            size = {26}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>About Reserve-it</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                    onPress = {() =>{ 
                        console.log(auth.currentUser?.email +'Logged Out')
                        handleSignOut()
                    }}
                >
                    <View style = {styles.menuItem}>
                        <Icons 
                            name = "logout"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>

            </View>

        </SafeAreaView>
    );
}

export default settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    userInfoSection: {
        paddingHorizontal: 20,
        marginBottom: 5,
        marginTop: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 5,
        
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 5,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 13,
        fontWeight: '600',
        fontSize: 19,
        lineHeight: 26,
    },
});