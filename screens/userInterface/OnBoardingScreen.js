import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { LogBox } from 'react-native';


const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("MainScreen")}
            onDone={() => navigation.navigate("MainScreen")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.image}  source={require('../../assets/new-logo1.png')}  />,
                    title: 'Reservation Made Easy',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image style={styles.image} source={require('../../assets/new-logo1.png')} />,
                    title: 'Save and Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                }
            ]}
        />

    );
    {LogBox.ignoreLogs(['Warning: ...'])} 

};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    image: {
        height: 300,
        width: 200,
        resizeMode: 'contain'
    }
});