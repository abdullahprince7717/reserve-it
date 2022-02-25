import {Text, View,StyleSheet,ScrollView,StatusBar,Dimensions,Image } from "react-native";
import HorizontalScrollView  from '../../components/home/HorizontalScrollView'
import SearchBar from '../../components/home/SearchBar.js'
import logo from '../../assets/logo.png';
// import SearchBar from "react-native-dynamic-search-bar";
// import TabNavigation  from '../components/MaterialBottomNav.js'

// import BeautifulHorizontalList from "react-native-beautiful-horizontal-list";


function homeScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.logo}>

                <Image style ={{height:'140%' }}  source={require('../../assets/homeLogo.png')} />

            </View>

            <View style ={styles.scrollView}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <HorizontalScrollView image = {require('../../assets/doc-logo.jpg')} name = 'Doctor'  />
                    <HorizontalScrollView image = {require('../../assets/salon-logo.jpg')} name = 'Salon'  />
                    <HorizontalScrollView image = {require('../../assets/plate-logo.jpg')} name = 'Restaurant'  />
                    <HorizontalScrollView image = {require('../../assets/logo.png')} name = 'Movie'  />

                </ScrollView>
            </View>

        
            <View style = {styles.listView}>
                <ScrollView>

                    <View>
                        <Text style = {{fontSize: 30,color: 'black',}}>List of popular businesses</Text>
                    </View>
                        
                    
                </ScrollView>
            </View>
            
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
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom : 70,
        // backgroundColor: '#000',
    },
    logo:{
        width: deviceWidth,
        flex:0.65,
        paddingTop:15,
        paddingBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    scrollView: {
        flex:2, 
        backgroundColor: '#000', 
        borderColor: 'black', 
        borderWidth:0.3
    },
    listView: {
        flex:5.5,
        width: deviceWidth-5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
    },
})