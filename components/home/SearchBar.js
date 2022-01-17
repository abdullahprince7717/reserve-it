import * as React from 'react';
import {TextInput,View,Text,StyleSheet, SafeAreaView} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function SearchBar(){

    return(
        <SafeAreaView style={{flex:1}}>
        <View style = {{flex:1, marginBottom: 50 }}>
            <View style = {{height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd', zIndex: 1  }}>
                <View style={{flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,}}>
                <MaterialCommunityIcons name="magnify"  size={20} style = {{marginTop: 5}} />
                <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder = "Search for Services"
                    placeholderTextColor = "grey"
                    style ={{flex:1,fontWeight:'700',backgroundColor: '#fff', }}
                />
                </View>
            </View>

            </View>
        </SafeAreaView>
    )
    
    
}

export default SearchBar;