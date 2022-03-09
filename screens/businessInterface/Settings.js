import {View,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity } from "react-native";
import{ Text, Caption, Title, TouchableRipple,} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { Ionicons } from "@expo/vector-icons/"

function settings(props) {
    return (
        <View style = {styles.container}>
            <View>
                <TouchableRipple 
                    onPress = {() => {
                        props.navigation.navigate('EditBusinessProfile')
                    }}
                > 
                    <View style = {styles.menuItem}>
                        <Ionicons 
                            name = "business"
                            size = {25}
                            color= '#57B9BB'
                            />
                        <Text style={styles.menuItemText}>Business Profile</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple
                    onPress = {() => {
                        console.log('pressed')
                        {props.navigation.navigate('BusinessHours')}
                    }}
                >
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "timetable"
                            size = {25}
                            color= '#57B9BB'
                            />
                        <Text style={styles.menuItemText}>Business Hours</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple
                    onPress = {() => {
                        console.log('pressed')
                        {props.navigation.navigate('BusinessHours')}
                    }}
                >
                    <View style = {styles.menuItem}>
                        <Icons 
                            name = "miscellaneous-services"
                            size = {25}
                            color= '#57B9BB'
                            />
                        <Text style={styles.menuItemText}>Services</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                    onPress = {() => {
                        console.log('pressed')
                        // {props.navigation.navigate('AddPayment')}
                    }}
                >
                    <View style = {styles.menuItem}>
                        <Icon 
                            name = "credit-card"
                            size = {25}
                            color= '#57B9BB'
                            />
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple
                    onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <Ionicons 
                            name = "settings-outline"
                            size = {25}
                            color= '#57B9BB'
                            />
                        <Text style={styles.menuItemText}>Advanced Settings</Text>
                    </View>
                </TouchableRipple>


                <TouchableRipple 
                    onPress = {() => console.log('pressed')}
                >
                    <View style = {styles.menuItem}>
                        <Icons 
                            name = "logout"
                            size = {25}
                            color= '#57B9BB'
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