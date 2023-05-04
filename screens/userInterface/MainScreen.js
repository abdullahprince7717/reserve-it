import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, } from 'react-native';
import { FAB } from 'react-native-paper';
import React, { useState, useEffect, useContext } from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons/"
import { LogBox } from 'react-native';

// import MyStack from '../../Navigation/AdminUIStack.js';

const MainScreen = ({ navigation }) => {

    return (
        <>
            <View style={styles.mainView}>
                <View style={styles.upView}>
                    <Image style={{ resizeMode: 'contain', height: '70%', marginTop: 80 }} source={require('../../assets/logo.png')} />
                </View>
                <View style={styles.downView}>

                    <Text style={styles.heading}> Continue<Text style={{ color: '#000' }}> As</Text></Text>
                    <View style ={{justifyContent:'center',alignItems:'center',height:100,margin:20}}>
                        <FAB
                            // icon={<Ionicons name='md-checkmark-circle' size={32} color='white' />}
                            // style={styles.fab}
                            size='large'
                            onPress={() => navigation.navigate("Signup")}
                            style={{ width: '60%',height:'80%',justifyContent:'center',alignItems:'center', fontSize:30 }}
                            label = "Customer"
                            color = '#fff'

                        />
                    </View>
                    <View style ={{justifyContent:'center',alignItems:'center',height:100,margin:20}}>
                        <FAB
                            // icon={<Ionicons name='md-checkmark-circle' size={32} color='white' />}
                            // style={styles.fab}
                            size='large'
                            onPress={() => {navigation.navigate("BusinessStack",{screen: "Signup"})}}
                            style={{ width: '60%',height:'80%',justifyContent:'center',alignItems:'center', fontSize:30,  }}
                            label = "Business"
                            color = '#fff'

                        />
                    </View>
                    {LogBox.ignoreLogs(['Warning: ...'])} 
                </View>
            </View>
        </>
    )
}

export default MainScreen

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
        flex: 2,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    downView: {
        flex: 5,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    heading: {
        display: 'flex',
        marginTop: 70,
        marginLeft: 20,
        color: '#57B9BB',
        width: '80%',
        fontSize: 42,
        fontWeight: 'bold',
        backgroundColor: '#fff'
    },

    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        marginTop: 30,
        marginLeft: 20,
        marginBottom: 50

    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },

});
