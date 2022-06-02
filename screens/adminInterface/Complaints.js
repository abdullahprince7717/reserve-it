import { StyleSheet, Text, View, StatusBar, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import ComplaintCard from '../../components/adminUIComponents/ComplaintCard'
import SearchBar from '../../components/home/SearchBar.js'


const Settings = () => {
    return (
        <View style={styles.container}>
            <SearchBar/>
            
            <ScrollView style = {{}}>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 0.15 }}>
                    <ComplaintCard />
                </TouchableOpacity>
            </ScrollView>

        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // backgroundColor:'#57B9BB',
        // justifyContent:'center',
        // alignItems: 'center',
    }
})