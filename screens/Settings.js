import {Text, View,StyleSheet } from "react-native";

function settings() {
    return (
        <View style = {styles.View}>
            <Text> Settings Screen </Text>
        </View>
    );
}

export default settings;

const styles = StyleSheet.create({

    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    }
})