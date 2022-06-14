import {View,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity } from "react-native";
import{ Text, Caption, Title, TouchableRipple,} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import Icons from 'react-native-vector-icons/MaterialIcons'
import { Ionicons, MaterialIcons } from "@expo/vector-icons/"
import {auth} from  '../../firebase/FirebaseConfig.js'


function settings(props) {

    const handleSignOut = () => {
        auth.signOut()
        .then(()=>{
            props.navigation.replace('Login')
        })
    }

    return (
        <View style = {styles.container}>
            <View>
                {/* <TouchableRipple 
                    onPress = {() => {
                        props.navigation.navigate('AddBusiness')
                    }}
                > 
                    <View style = {styles.menuItem}>
                        <Ionicons 
                            name = "business"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Add a Business</Text>
                    </View>
                </TouchableRipple> */}

                {/* <TouchableRipple
                    onPress = {() => {
                        console.log('pressed')
                        {props.navigation.navigate('AddClient')}
                    }}
                >
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "timetable"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Add a Client</Text>
                    </View>
                </TouchableRipple> */}


                <TouchableRipple
                    onPress = {() => {
                        console.log('pressed')
                        props.navigation.navigate('BlockedBusinesses');
                    }}
                >
                    <View style = {styles.menuItem}>
                        <MaterialIcons 
                            name = "block"
                            size = {25}
                            color= '#000'
                        />
                        <Text style={styles.menuItemText}>Blocked Businesses</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple
                    onPress = {() => {
                        console.log('pressed')
                        props.navigation.navigate('BlockedClients');
                    }}
                >
                    <View style = {styles.menuItem}>
                        <MaterialIcons 
                            name = "block"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Blocked Clients</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                    onPress = {() => {
                        console.log(auth.currentUser?.email +'Logged Out')
                        handleSignOut()
                    }}
                >
                    <View style = {styles.menuItem}>
                        <MaterialIcons 
                            name = "logout"
                            size = {25}
                            color= '#000'
                            />
                        <Text style={styles.menuItemText}>Logout</Text>
                    </View>
                </TouchableRipple>

            </View>

        </View>
    );
}

export default settings;

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 20
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
menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
},
menuItemText: {
    color: '#777777',
    marginLeft: 13,
    fontWeight: '600',
    fontSize: 19,
    lineHeight: 26,
},
});