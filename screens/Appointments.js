import { View,StyleSheet,Dimensions,TouchableOpacity } from "react-native";
import Card from  '../components/appointments/AppointmentCard.js';



function appointments({navigation}) {


    return(
        <View style={styles.container}>

            <Card
                title="Grooming"
                businessName="LaLa Salon"
                address="Machi Mandi near Niagra Falls, Kenya"
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    navigation.navigate('BusinessProfile')
                }}
            />

            <Card
                title="Grooming"
                businessName="LaLa Salon"
                address="Machi Mandi near Niagra Falls, Kenya"
                date="March 12"
                time="10:00 AM"
                onPress = {() => {
                    console.log('Pressed')
                    navigation.navigate('BusinessProfile')
                }}
            />

        </View>
    );
}

export default appointments;



const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
})