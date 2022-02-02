import {Text, View,StyleSheet } from "react-native";
import { Calendar} from 'react-native-calendars';
function bookAppointment() {
    return (
        <View style = {styles.View}>
            <Text> make an Appointment Screen </Text>
            <Calendar/>
        </View>
    );
}

export default bookAppointment;

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({

    View: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        height: deviceHeight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})