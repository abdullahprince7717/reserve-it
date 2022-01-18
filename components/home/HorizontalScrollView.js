import * as React from 'react';
import {StyleSheet,View,ScrollView,Image,Text } from "react-native";

function HorizontalScrollView(props){    
return(
    
    <View style = {{height: 160, marginTop:90}}>

            <View style = {{height: 160, width:120, marginLeft: 7 }} >
                <View style = {{flex:2}}>
                    <Image source = {props.image} style = {{flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 60}} />

                </View>

                <View style = {{flex:1, paddingTop: 10,  alignItems: 'center',   }}>
                    <Text style={{color: 'white'}}>{props.name}</Text>
                </View>

            </View>
    </View>

)
}

export default HorizontalScrollView;