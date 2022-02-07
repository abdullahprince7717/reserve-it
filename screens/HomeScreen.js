import {Text, View,StyleSheet,ScrollView,StatusBar,Dimensions } from "react-native";
import HorizontalScrollView  from '../components/home/HorizontalScrollView'
import SearchBar from '../components/home/SearchBar.js'
// import SearchBar from "react-native-dynamic-search-bar";
// import TabNavigation  from '../components/MaterialBottomNav.js'

// import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";


function homeScreen() {
    return (
        <View style = {styles.container}>
            
            <View style = {styles.searchBar}>
                <SearchBar />
            </View>

            <View style ={styles.scrollView}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />
                    <HorizontalScrollView image = {require('../assets/logo.png')} name = 'doctor'  />

                </ScrollView>

                <View style = {styles.listView}>
                    <Text>List of popular businesses</Text>
                </View>

            </View>

            {/* <TabNavigation/> */}

        </View>
    );
}

export default homeScreen;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    searchBar:{
        width: deviceWidth-30,
        marginBottom: 10,
        marginTop: 10,
    },
    scrollView: {
        flex:1, 
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderWidth:0.3
    },
    listView: {
        flex:150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F39DFF',
    },
})