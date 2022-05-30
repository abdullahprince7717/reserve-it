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


function explore(props) {

    const [searchQuery, setSearchQuery] = useState();   
    const onChangeSearch = query => setSearchQuery(query);
    const [queryResult, setQueryResult] = useState([]);  

    const collectionRef = collection(db, "business_users")

    const getQueryResult = async () => {
        const q = query(collectionRef, where("category", "==", searchQuery));
        await getDocs(q)
            .then((res) => {

                setQueryResult(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log("response " + res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                // console.log("response " + res);
                console.log(queryResult);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        props?.route?.params?.query ? setSearchQuery(props?.route?.params?.query) : getQueryResult();
        getQueryResult();
        console.log(auth.currentUser.email)
        console.log(searchQuery)
    

    }, [searchQuery]);

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
                    <Button color = "#000" mode="outlined" style= {{height:50,width:50,borderColor:"#fff", marginTop:10}} 
                            onPress={() => {
                                console.log('Pressed')
                                getQueryResult()
                            }}>
                        
                        <Ionicons name = "search" size = {25}/>
                    
                    </Button>
                    
                </View>
            </View>
            
            <View style = {styles.listView}>
            
                <ScrollView>

                    <View>    

                    {queryResult?.map((item,index) => (
                    // <Text>{item.id}</Text>
                    item.business_name === "" ? null : 
                    <BusinessCard
                        title={item.business_name}
                        description = {item.business_description}
                        
                        onPress =  {() => {
                            console.log('Pressed')
                            props.navigation.navigate('BusinessProfile',{data : queryResult[index]})
                        }}
                    /> 
                ))}
                    
                    
                    </View>    
                </ScrollView>    

                <FAB
                    style={styles.fab}
                    label = "Maps"
                    large
                    icon="map-marker-outline"
                    onPress={() => {
                        console.log('Pressed')
                        props.navigation.navigate('Map')
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