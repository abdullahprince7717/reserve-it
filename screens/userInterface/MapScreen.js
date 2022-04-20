import * as React from 'react';
import MapView,{PROVIDER_GOOGLE,Marker,Callout} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function mapScreen() {
    return (
    <View style={styles.container}>
        <MapView 
        provider = {PROVIDER_GOOGLE}
        style={styles.map} 
        // mapType = "mutedStandard"
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        >
            <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title = "Hello"
            description = "World"
            />
        </MapView>
    </View>
    );
}   
        
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
},
});