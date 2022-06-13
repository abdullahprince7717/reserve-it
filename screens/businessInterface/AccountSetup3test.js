import * as React from "react";
import { Dimensions, StyleSheet, Text, View ,TouchableOpacity,} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db, auth,storage } from '../../firebase/FirebaseConfig.js'


const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA + ASPECT_RATIO;
export default function Map(props) {
    const [region, setRegion] = React.useState({
        latitude: 31.402748,
        longitude: 74.212694,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    const [pin, setPin] = React.useState({
        latitude: 31.402748,
        longitude: 74.212694,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })
    const docRef = doc(db, "business_users", auth.currentUser.uid);



    const addLocationInfo = async () => {

        const locationInfo = {
            longitude: region.longitude,
            latitude: region.latitude
            
        }
        

        await setDoc(docRef, locationInfo, { merge: true })
            .then(
                (res) => {
                    console.log("response" + res)
                    
                })
            .catch(
                (err) => {
                    console.log("error" + err)
                });
    };


    const _getLocation = async () => {


        const location = await Location.getCurrentPositionAsync();
        setRegion({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,

        })
        setPin({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        })
        addLocationInfo();
    }

    React.useEffect(() => {
        _getLocation()
    }, [])

    return (
        <View style={{ marginTop: 5, flex: 1 }}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    });
                    setPin({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    })
                }}
                query={{
                    key: "AIzaSyAMN_uc__60agtMOYH7Rr5NLSa6zkVwg7U",
                    language: "en",
                }}
                styles={{
                    container: {
                        flex: 0,
                        position: "absolute",
                        width: "100%",
                        zIndex: 1,
                    },
                    listView: { backgroundColor: "white" },
                }}
            />
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker
                    onPress={() => {
                        console.log("show modal here you want to show");
                    }}
                    coordinate={pin}
                />
            </MapView>
            <View
                style={{
                    position: 'absolute', top: '85%', alignSelf: 'flex-end', left: '14%',
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Pressed SAVE")
                        addLocationInfo();
                        props.navigation.navigate('AccountSetup4')
                    }}
                >

                    <Text style={{ color: '#fff', fontSize: 17 }}>
                        NEXT
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}
const deviceWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%", height: "100%"
    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth - 105,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
});