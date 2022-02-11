import React, { useState } from 'react'
import { View,Text,StyleSheet,StatusBar,Dimensions,TextInput } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js';
import SearchBar from '../components/home/SearchBar.js'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FAB } from 'react-native-paper';
// import ButtonToggleGroup from 'react-native-button-toggle-group';

function explore({navigation}) {

    const [value, setValue] = useState("");

    return (
        <View style = {styles.container}>
            <View style = {styles.searchView}>
                <View style = {styles.searchBar}>
                    <SearchBar />
                    <GooglePlacesAutocomplete
                        placeholder='Location'

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

                <FAB
                    style={styles.fab}
                    label = "Maps"
                    large
                    icon="map-marker-outline"
                    onPress={() => {
                        console.log('Pressed')
                        navigation.navigate('Booking')
                    }}
                    color = '#fff'
                />
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
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
    fab: {
        position: 'absolute',
        margin: 10,
        right: 15,
        bottom: 75,
        elevation: 1,
        backgroundColor: '#000',
        // borderRadius: 80,
    },

    
})