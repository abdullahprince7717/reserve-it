import {Text, View,StyleSheet } from "react-native";

function homeScreen() {
    return (
        <View style = {styles.View}>
            <Text> Homescreen  </Text>
        </View>
    );
}

export default homeScreen;

const styles = StyleSheet.create({

    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    }
})