import {Text, View,StyleSheet,ScrollView } from "react-native";
import HorizontalScrollView  from '../components/home/HorizontalScrollView'
import SearchBar from '../components/home/SearchBar.js' 

function homeScreen() {
    return (
        <View style = {styles.View}>
            <SearchBar />
            
            <View style ={{height: 250, marginTop: 20, backgroundColor: 'grey'}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />

                </ScrollView>

            </View>

        </View>
    );
}

export default homeScreen;

const styles = StyleSheet.create({

    View: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 40,
    }
})