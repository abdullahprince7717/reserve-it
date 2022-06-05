import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, ScrollView, StatusBar, Text } from "react-native";
import { Button, Searchbar } from 'react-native-paper'
import BusinessCard from '../../components/explore/Card.js';
import { Ionicons } from '@expo/vector-icons'
import { FAB } from 'react-native-paper';
import { db, auth, } from "../../firebase/FirebaseConfig.js";
import { doc, getDoc, setDoc, collection, getDocs, where, query } from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore';
import { RadioButton } from 'react-native-paper';



// import {GOOGLE_MAPS_APIKEY} from "@env";


function explore(props) {

    const cities = [
        "Abbottabad",
        "Adezai",
        "Ali Bandar",
        "Amir Chah",
        "Attock",
        "Ayubia",
        "Bahawalpur",
        "Baden",
        "Bagh",
        "Bahawalnagar",
        "Burewala",
        "Banda Daud Shah",
        "Batagram",
        "Bazdar",
        "Bela",
        "Bellpat",
        "Bhag",
        "Bhakkar",
        "Bhalwal",
        "Bhimber",
        "Birote",
        "Buner",
        "Burj",
        "Chiniot",
        "Chachro",
        "Chagai",
        "Chah Sandan",
        "Chailianwala",
        "Chakdara",
        "Chakku",
        "Chakwal",
        "Chaman",
        "Charsadda",
        "Chhatr",
        "Chichawatni",
        "Chitral",
        "Dadu",
        "Dera Ghazi Khan",
        "Dera Ismail Khan",
        "Dalbandin",
        "Dargai",
        "Darya Khan",
        "Daska",
        "Dera Bugti",
        "Dhana Sar",
        "Digri",
        "Dinga",
        "Diwana",
        "Dokri",
        "Drosh",
        "Duki",
        "Dushi",
        "Duzab",
        "Faisalabad",
        "Fateh Jang",
        "Ghotki",
        "Gwadar",
        "Gujranwala",
        "Gujrat",
        "Gadra",
        "Gajar",
        "Gandava",
        "Garhi Khairo",
        "Garruck",
        "Ghakhar Mandi",
        "Ghanian",
        "Ghauspur",
        "Ghazluna",
        "Girdan",
        "Gulistan",
        "Gwash",
        "Hyderabad",
        "Hala",
        "Haripur",
        "Hab Chauki",
        "Hafizabad",
        "Hameedabad",
        "Hangu",
        "Harnai",
        "Hasilpur",
        "Haveli Lakha",
        "Hinglaj",
        "Hoshab",
        "Islamabad",
        "Islamkot",
        "Ispikan",
        "Jacobabad",
        "Jamshoro",
        "Jhang",
        "Jhelum",
        "Jamesabad",
        "Jampur",
        "Janghar",
        "Jati",
        "Jauharabad",
        "Jhal",
        "Jhal Jhao",
        "Jhatpat",
        "Jhudo",
        "Jiwani",
        "Jungshahi",
        "Karachi",
        "Kotri",
        "Kalam",
        "Kalandi",
        "Kalat",
        "Kamalia",
        "Kamararod",
        "Kamber",
        "Kamokey",
        "Kanak",
        "Kandi",
        "Kandiaro",
        "Kanpur",
        "Kapip",
        "Kappar",
        "Karak City",
        "Karodi",
        "Kashmor",
        "Kasur",
        "Katuri",
        "Keti Bandar",
        "Khairpur",
        "Khanaspur",
        "Khanewal",
        "Kharan",
        "kharian",
        "Khokhropur",
        "Khora",
        "Khushab",
        "Khuzdar",
        "Kikki",
        "Klupro",
        "Kohan",
        "Kohat",
        "Kohistan",
        "Kohlu",
        "Korak",
        "Korangi",
        "Kot Sarae",
        "Kotli",
        "Lahore",
        "Larkana",
        "Lahri",
        "Lakki Marwat",
        "Lasbela",
        "Latamber",
        "Layyah",
        "Leiah",
        "Liari",
        "Lodhran",
        "Loralai",
        "Lower Dir",
        "Shadan Lund",
        "Multan",
        "Mandi Bahauddin",
        "Mansehra",
        "Mian Chanu",
        "Mirpur",
        "Mardan",
        "Mach",
        "Madyan",
        "Malakand",
        "Mand",
        "Manguchar",
        "Mashki Chah",
        "Maslti",
        "Mastuj",
        "Mastung",
        "Mathi",
        "Matiari",
        "Mehar",
        "Mekhtar",
        "Merui",
        "Mianwali",
        "Mianez",
        "Mirpur Batoro",
        "Mirpur Khas",
        "Mirpur Sakro",
        "Mithi",
        "Mongora",
        "Murgha Kibzai",
        "Muridke",
        "Musa Khel Bazar",
        "Muzaffar Garh",
        "Muzaffarabad",
        "Nawabshah",
        "Nazimabad",
        "Nowshera",
        "Nagar Parkar",
        "Nagha Kalat",
        "Nal",
        "Naokot",
        "Nasirabad",
        "Nauroz Kalat",
        "Naushara",
        "Nur Gamma",
        "Nushki",
        "Nuttal",
        "Okara",
        "Ormara",
        "Peshawar",
        "Panjgur",
        "Pasni City",
        "Paharpur",
        "Palantuk",
        "Pendoo",
        "Piharak",
        "Pirmahal",
        "Pishin",
        "Plandri",
        "Pokran",
        "Pounch",
        "Quetta",
        "Qambar",
        "Qamruddin Karez",
        "Qazi Ahmad",
        "Qila Abdullah",
        "Qila Ladgasht",
        "Qila Safed",
        "Qila Saifullah",
        "Rawalpindi",
        "Rabwah",
        "Rahim Yar Khan",
        "Rajan Pur",
        "Rakhni",
        "Ranipur",
        "Ratodero",
        "Rawalakot",
        "Renala Khurd",
        "Robat Thana",
        "Rodkhan",
        "Rohri",
        "Sialkot",
        "Sadiqabad",
        "Safdar Abad- (Dhaban Singh)",
        "Sahiwal",
        "Saidu Sharif",
        "Saindak",
        "Sakrand",
        "Sanjawi",
        "Sargodha",
        "Saruna",
        "Shabaz Kalat",
        "Shadadkhot",
        "Shahbandar",
        "Shahpur",
        "Shahpur Chakar",
        "Shakargarh",
        "Shangla",
        "Sharam Jogizai",
        "Sheikhupura",
        "Shikarpur",
        "Shingar",
        "Shorap",
        "Sibi",
        "Sohawa",
        "Sonmiani",
        "Sooianwala",
        "Spezand",
        "Spintangi",
        "Sui",
        "Sujawal",
        "Sukkur",
        "Suntsar",
        "Surab",
        "Swabi",
        "Swat",
        "Tando Adam",
        "Tando Bago",
        "Tangi",
        "Tank City",
        "Tar Ahamd Rind",
        "Thalo",
        "Thatta",
        "Toba Tek Singh",
        "Tordher",
        "Tujal",
        "Tump",
        "Turbat",
        "Umarao",
        "Umarkot",
        "Upper Dir",
        "Uthal",
        "Vehari",
        "Veirwaro",
        "Vitakri",
        "Wadh",
        "Wah Cantt",
        "Warah",
        "Washap",
        "Wasjuk",
        "Wazirabad",
        "Yakmach",
        "Zhob",
        "Other"]

    const [selectedCity,setSelectedCity] = useState(); 


    const [searchQuery, setSearchQuery] = useState();
    const onChangeSearch = query => setSearchQuery(query);
    const [queryResult, setQueryResult] = useState([]);
    const [checked, setChecked] = useState('first');


    const collectionRef = collection(db, "business_users")

    const getQueryResult = async () => {
        let q
        checked == 'first' ?  
            q = query(collectionRef, where("name", "==", searchQuery))
        :
            q = query(collectionRef, where("category", "==", searchQuery))
        
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
        // props?.route?.params?.query ? setSearchQuery(props?.route?.params?.query) : null;
        getQueryResult();
        console.log(auth.currentUser.email)
        console.log(searchQuery)


    }, [searchQuery]);

    return (
        
        <View style={styles.container}>
            <View style={styles.searchView}>
                <View style={styles.searchBar}>
                    <View style={{ flexDirection: 'row', }}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            style={styles.searchBar}
                        />
                        <Button color="#000" mode="contained" style={{ height: 40, padding: 0, width: 30, borderColor: "#fff", marginTop: 14, borderRadius: 20 }}
                            onPress={() => {
                                console.log('Pressed')
                                getQueryResult()
                            }}>

                            <Ionicons name="search" size={23} color='#fff' />

                        </Button>
                    </View>
                </View>
                <View style={{ marginLeft: 10, }}>
                    <Text style={{ color: '#fff', fontSize: 18 }}>Search By:</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#000', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <View style={{ flexDirection: "row" }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            uncheckedColor='#fff'
                        />
                        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3, marginTop: 5 }}>Name</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            uncheckedColor='#fff'
                        />
                        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 3, marginTop: 5 }}>Category</Text>
                    </View>

                </View>



            </View>

            <View style={styles.listView}>

                <ScrollView>

                    <View>

                        {queryResult?.map((item, index) => (
                            // <Text>{item.id}</Text>
                            item.business_name === "" ? null :
                                <BusinessCard
                                    title={item.business_name}
                                    description={item.business_description}

                                    onPress={() => {
                                        console.log('Pressed')
                                        props.navigation.navigate('BusinessProfile', { data: queryResult[index] })
                                    }}
                                />
                        ))}


                    </View>
                </ScrollView>

                <FAB
                    style={styles.fab}
                    label="Maps"
                    large
                    icon="map-marker-outline"
                    onPress={() => {
                        console.log('Pressed')
                        props.navigation.navigate('MapsTest')
                    }}
                    color='#fff'
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
        paddingBottom: 70,
    },
    searchView: {
        flex: 1.1,
        width: deviceWidth,
        alignItems: 'flex-start',
        paddingBottom: 10,
        backgroundColor: '#000',
        flexDirection: 'column',
    },
    searchBar: {
        width: '90%',
        margin: 10,
        marginLeft: 5,
        marginRight: 0,
        flexDirection: 'row',
        borderRadius: 20,
        // backgroundColor: '#000',
    },
    listView: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        flexDirection: 'column',
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