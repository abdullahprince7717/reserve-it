import * as React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import * as Location from 'expo-location';


const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA + ASPECT_RATIO;
export default function Map() {
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
    }

    React.useEffect(() => {
        _getLocation()
    }, [])

    return (
        <View style={{ marginTop: 50, flex: 1 }}>
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
        </View>
    );
}

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
});