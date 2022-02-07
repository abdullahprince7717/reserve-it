import React, { useState } from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions,TextInput } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js';
import SearchBar from '../components/home/SearchBar.js'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function explore() {

    const [text, onChangeText] = useState("Useless Text");

    return (
        <View style = {styles.container}>
            <View style = {styles.searchView}>
                <View style = {styles.searchBar}>
                    <SearchBar />
                    <GooglePlacesAutocomplete
                        placeholder='Search'

                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'YOUR API KEY',
                            language: 'en',
                        }}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'grey',
                            },
                            textInput: {
                                height: 50,
                                color: '#5d5d5d',
                                fontSize: 17,
                                marginBottom: 10,
                                marginTop: 10,
                                padding: 10,
                                borderRadius: 20,
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb',
                            },
                        }}
                    />
                </View>
            </View>
            
            <View style = {styles.listView}>
                <BusinessCard title =" abba dabba jabba" image = {require('../assets/logo.png')}
                description = "ajhdvukvadaikdv ajhdvd"/>
            </View>

            
        </View>
    );

    
}

export default explore;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    searchView: {
        flex:0.5,
        width: deviceWidth,
        alignItems:'center',
        paddingBottom: 10,
        backgroundColor: '#9DC7FF',
    },
    searchBar:{
        width: deviceWidth-30,
        marginBottom: 10,
        marginTop: 10,
    },
    listView: {
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: '#F39DFF',
    },

    
})