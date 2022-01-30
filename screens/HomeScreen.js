import {Text, View,StyleSheet,ScrollView,StatusBar } from "react-native";
import HorizontalScrollView  from '../components/home/HorizontalScrollView'
import SearchBar from '../components/home/SearchBar.js'
// import SearchBar from "react-native-dynamic-search-bar";
import TabNavigation  from '../components/MaterialBottomNav.js'

function homeScreen() {
    return (
        <View style = {styles.view}>
            <SearchBar />
            <View style ={{height: 230, marginTop: 20, backgroundColor: 'white', borderColor: 'black', borderWidth:1}}>
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

            {/* <TabNavigation/> */}

        </View>
    );
}

export default homeScreen;

const styles = StyleSheet.create({

    view: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})