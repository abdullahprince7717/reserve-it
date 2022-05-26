import React, { useEffect, useState } from 'react'
import { View,StyleSheet,Dimensions,ScrollView,StatusBar,Text } from "react-native";
import {Button,Searchbar} from 'react-native-paper'
import BusinessCard from  '../../components/explore/Card.js';
import {Ionicons} from '@expo/vector-icons'
import { FAB } from 'react-native-paper';
import { db, auth,} from "../../firebase/FirebaseConfig.js";
import { doc, getDoc,setDoc,collection,getDocs,where,query } from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore';


// import {GOOGLE_MAPS_APIKEY} from "@env";


function explore({navigation}) {

    const [searchQuery, setSearchQuery] = useState('Tester@hmal.com');   
    const onChangeSearch = query => setSearchQuery(query);
    const [businesses, setBusinesses] = useState([]);  
    const collectionRef = collection(db, "users")

    // Create a reference to the cities collection
    // const citiesRef = collection(db, "business_users");

    // Create a query against the collection.

    const getBusinesses = async () => {
        const q = query(collectionRef, where("email", "==", searchQuery));
        await getDocs(q)
            .then((res) => {

                setBusinesses(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log("response " + res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                // console.log("response " + res);
                console.log(businesses);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {

        getBusinesses();

    }, [])

    return (
        <View style = {styles.container}>
            <View style = {styles.searchView}>
                <View style = {styles.searchBar}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style = {styles.searchBar}
                />
                    <Button color = "#000" mode="outlined" style= {{height:50,width:50,borderColor:"#fff", marginTop:10}} onPress={() => console.log('Pressed')}>
                        <Ionicons name = "search" size = {25}/>
                    </Button>
                    
                </View>
            </View>
            
            <View style = {styles.listView}>
            
                <ScrollView>

                    <View>    
                        <BusinessCard
                            onPress =  {() => {
                                console.log('Pressed')
                                navigation.navigate('BusinessProfile')
                            }}
                        />
                        <BusinessCard
                            onPress =  {() => {
                                console.log('Pressed')
                                navigation.navigate('BusinessProfile')
                            }}
                        />
                        <BusinessCard
                            onPress =  {() => {
                                console.log('Pressed')
                                navigation.navigate('BusinessProfile')
                            }}
                        />
                        <BusinessCard
                            onPress =  {() => {
                                console.log('Pressed')
                                navigation.navigate('BusinessProfile')
                            }}
                        />
                        <BusinessCard
                            onPress =  {() => {
                                console.log('Pressed')
                                navigation.navigate('BusinessProfile')
                            }}
                        />

                    </View>    
                </ScrollView>    

                <FAB
                    style={styles.fab}
                    label = "Maps"
                    large
                    icon="map-marker-outline"
                    onPress={() => {
                        console.log('Pressed')
                        navigation.navigate('Map')
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom : 70,
    },
    searchView: {
        flex:0.55,
        width: deviceWidth,
        alignItems:'flex-start',
        paddingBottom: 10,
        // backgroundColor: '#9DC7FF',
    },
    searchBar:{
        width: '88%',
        margin:10,
        marginRight:0,
        flexDirection:'row',
        borderRadius:20,
        // backgroundColor: '#000',
    },
    listView: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        flexDirection:'column',
        justifyContent: 'flex-start',
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 15,
        bottom: 20,
        elevation: 1,
        backgroundColor: '#000',
        // borderRadius: 80,
    },

    
})