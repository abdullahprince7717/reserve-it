import { View,StyleSheet,StatusBar,Text,ScrollView } from "react-native";
import Card from  '../../components/appointments/AppointmentCard.js';



function appointments({navigation}) {
    return(
        <ScrollView>
            <View style={styles.container}>

                <View style = {{flex: 0.07,alignItems: 'center', backgroundColor: '#57B9BB', justifyContent: 'flex-start',elevation: 2,}}>    
                    <Text style ={{fontSize: 27, padding: 10,fontWeight: 'bold', color : '#fff'}}>
                        Appointments
                    </Text>
                </View>

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

                <Text style ={{fontSize: 22, marginTop: 20, fontWeight: 'bold',}}>
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


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
        paddingBottom : 70,
    },
})