import * as React from 'react';
import {TextInput,View,Text,StyleSheet, SafeAreaView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar(){

    return(
        <SafeAreaView style={{flex:1}}>
        <View style = {{flex:1 }}>
            <View style = {{height: 70, backgroundColor: 'white',  zIndex: 1000, elevation: (Platform.OS === 'android') ? 50 : 0  }}>
                <View style={{flexDirection: 'row', padding: 10,paddingTop: 20,backgroundColor: 'white',
                marginHorizontal: 20, elevation: 1, borderRadius: 20}}>
                <MaterialCommunityIcons name="magnify"  size={22} style = {{marginTop: 8}} />
                <TextInput 
                    placeholder = "Search for Services"
                    placeholderTextColor = "grey"
                    style ={{flex:1,fontWeight:'700',height: 38,backgroundColor: '#fff', borderWidth: 1, paddingLeft: 5, borderRadius: 15 }}
                />
                </View>
            </View>

            </View>
        </SafeAreaView>
    )
    
    
}

export default SearchBar;

const styles = StyleSheet.create({
    
    });
