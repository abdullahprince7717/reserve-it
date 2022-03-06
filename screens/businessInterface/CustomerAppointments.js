import React, {useState} from 'react';
import { View,StyleSheet,StatusBar,Text,ScrollView,useWindowDimensions } from "react-native";
import Card from  '../../components/appointments/AppointmentCard.js';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const FirstRoute = () => (

        <ScrollView style={styles.container}>
            <View >
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

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (

    <View style={{ flex: 1, backgroundColor: '#34839274' }} />
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
        paddingBottom : 50,
    },
})