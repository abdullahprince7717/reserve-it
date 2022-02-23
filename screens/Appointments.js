import { View,StyleSheet,Dimensions,TouchableOpacity,StatusBar,Text,ScrollView } from "react-native";
import Card from  '../components/appointments/AppointmentCard.js';



function appointments({navigation}) {


    return(

        <ScrollView>
            <View style={styles.container}>

                <Text style ={{fontSize: 22, margin: 10, fontWeight: 'bold'}}>
                    Current Appointments
                </Text>

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

                <Text style ={{fontSize: 22, marginTop: 20, fontWeight: 'bold'}}>
                    Past Appointments
                </Text>

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

                <Text style ={{fontSize: 22, marginTop: 20, fontWeight: 'bold'}}>
                    Cancelled Appointments
                </Text>

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
        </ScrollView>
    );
}

export default appointments;



const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        paddingBottom : 70,
    },
})