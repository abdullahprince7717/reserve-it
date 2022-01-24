import { View,StyleSheet } from "react-native";
import BusinessCard from  '../components/newAppointment/Card.js'

function explore() {
    return (
        <View style = {styles.View}>
            <BusinessCard title =" abba dabba jabba" image = {require('../assets/logo.png')} description = "ajhdvukvadaikdv ajhdvd"/>
        </View>
    );
}

export default explore;

const styles = StyleSheet.create({

    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    }
})