import {Text, View,StyleSheet } from "react-native";
function explore() {
    return (
        <View style = {styles.View}>
            <Text> Explore Screen </Text>
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