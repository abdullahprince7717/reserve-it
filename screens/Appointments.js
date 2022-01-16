import {Text, View,StyleSheet } from "react-native";

function appointments() {
    return (
        <View style = {styles.View}>
            <Text> Appointments Screen </Text>
        </View>
    );
}

export default appointments;

const styles = StyleSheet.create({

    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    }
})