import React, {useState,useEffect} from 'react';
import { View,StyleSheet,StatusBar,Text,ScrollView,useWindowDimensions } from "react-native";
import Card from  '../../components/businessUIComponents/AppointmentCard.js';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { db, auth } from "../../firebase/FirebaseConfig.js";



const FirstRoute = () => (

        <ScrollView style={styles.container}>
            <View >
                <Card
                    customerName="Arslan Saleem"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />


            </View>
        </ScrollView>
);

const SecondRoute = () => (
    <ScrollView style={styles.container}>
            <View >
                <Card
                    customerName="Arslan Saleem"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />


            </View>
        </ScrollView>
);

const ThirdRoute = () => (

    <ScrollView style={styles.container}>
            <View >
                <Card
                    customerName="Arslan Saleem"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />

                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />
                <Card
                    customerName="Abdullah Ali"
                    serviceName="Grooming"
                    servicePrice="Pkr. 1000 "
                    date="March 12"
                    time="10:00 AM"
                    onPress = {() => {
                        console.log('Pressed')
                        // navigation.navigate('BusinessProfile')
                    }}
                />


            </View>
        </ScrollView>
    );
    

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: '#57B9BB', }}
    />
);



function appointments({navigation}) {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Current' },
        { key: 'second', title: 'Completed' },
        { key: 'third', title: 'Cancelled' },
    ]);

    useEffect(() => {
        console.log(auth.currentUser.uid);
    },[])

    return(

        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style = {styles.container}
            renderTabBar={renderTabBar}
        />
        
    );
}

export default appointments;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // height: '80%',
    },
})