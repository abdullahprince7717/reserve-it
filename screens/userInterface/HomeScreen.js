import { Text, View, StyleSheet, ScrollView, StatusBar, Dimensions, Image, TouchableOpacity } from "react-native";
import HorizontalScrollView from '../../components/home/HorizontalScrollView'
// import BusinessCard from  '../../components/explore/Card.js';
import PopularHorizontalScrollView from '../../components/home/PopularCardHorizontalScrollView.js';
import { FAB } from 'react-native-paper';
import { db, auth, } from "../../firebase/FirebaseConfig.js";
import { doc, getDoc, setDoc, collection, getDocs, where, query } from "firebase/firestore";
import React, { useEffect, useState,useContext } from 'react'
import { CredentialsContext } from '../../global/CredentialsContext';



function homeScreen(props) {
    const [searchQuery, setSearchQuery] = useState();
    const onChangeSearch = query => setSearchQuery(query);
    const [queryResult, setQueryResult] = useState([]);
    const [queryResult1, setQueryResult1] = useState([]);
    const [checked, setChecked] = useState('first');
    const [storedCredentials, setStoredCredentials] = useContext(CredentialsContext);


    const collectionRef = collection(db, "business_users")

    const getQueryResult = async () => {

        let q = query(collectionRef, where("category", "==", "salon"))

        let q1 = query(collectionRef, where("category", "==", "doctor"))

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
        await getDocs(q1)
            .then((res) => {

                setQueryResult1(res.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })));

                // console.log("response " + res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                // console.log("response " + res);
                console.log(queryResult1);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log(storedCredentials)
    })

    useEffect(() => {
        // props?.route?.params?.query ? setSearchQuery(props?.route?.params?.query) : null;
        getQueryResult();
        console.log(auth.currentUser.email)
        // console.log(queryResult)
        // console.log(queryResult1)
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <View style={styles.logo}>

                <Image style={{ height: '140%' }} source={require('../../assets/homeLogo.png')} />

            </View>

            <View style={styles.scrollView}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity onPress={() => {
                        console.log("pressed")
                        props.navigation.navigate("Explore", { query: "doctor" })
                    }}>
                        <HorizontalScrollView image={require('../../assets/doc-logo.jpg')} name='Doctor' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        console.log("pressed")
                        props.navigation.navigate("Explore", { query: "salon" })
                    }}>
                        <HorizontalScrollView image={require('../../assets/salon-logo.jpg')} name='Salon' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        console.log("pressed")
                        props.navigation.navigate("Explore", { query: "restaurant" })
                    }}>
                        <HorizontalScrollView image={require('../../assets/plate-logo.jpg')} name='Restaurant' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        console.log("pressed")
                        props.navigation.navigate("Explore", { query: "movie" })
                    }}>
                        <HorizontalScrollView image={require('../../assets/logo.png')} name='Movie' />
                    </TouchableOpacity>
                </ScrollView>
            </View>


            <View style={styles.listView}>

                <ScrollView
                    showsVerticalScrollIndicator={false}

                >
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ fontSize: 25, color: 'black', margin: 10 }}>Here are some popular Salons</Text>
                        </View>

                        <View style={{ backgroundColor: "#fff" }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {queryResult.map((item, index) => {


                                })}
                                <TouchableOpacity onPress={() => {
                                    console.log("pressed")
                                    // props.navigation.navigate("Explore", { query: "doctor" })
                                }}>
                                    <PopularHorizontalScrollView
                                        
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    console.log("pressed")
                                    // props.navigation.navigate("Explore", { query: "salon" })
                                }}>
                                    <PopularHorizontalScrollView />
                                </TouchableOpacity>

                            </ScrollView>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 25, color: 'black', margin: 10 }}>Here are some popular Doctors</Text>
                        </View>
                        <View style={{ backgroundColor: "#fff", marginTop: 10, flexDirection: "column", }}>

                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <TouchableOpacity onPress={() => {
                                    console.log("pressed")
                                    // props.navigation.navigate("Explore", { query: "doctor" })
                                }}>
                                    <PopularHorizontalScrollView />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    console.log("pressed")
                                    // props.navigation.navigate("Explore", { query: "salon" })
                                }}>
                                    <PopularHorizontalScrollView />
                                </TouchableOpacity>

                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

export default homeScreen;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: 55,
        // backgroundColor: '#000',
    },
    logo: {
        width: deviceWidth,
        flex: 0.65,
        paddingTop: 15,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    scrollView: {
        flex: 2,
        backgroundColor: '#000',
        borderColor: 'black',
        borderWidth: 0.3
    },
    listView: {
        flex: 5.5,
        width: deviceWidth - 5,
        justifyContent: 'center',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // backgroundColor: '#fff',
    },
})