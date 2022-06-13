import * as React from 'react';
import { View } from "react-native";
import BusinessCard from '../explore/Card.js';
import BusinessCard2 from '../explore/CardTest.js';


function HorizontalScrollView(props) {
    return (

        <View style={{ height: 310, marginTop: 10, marginRight: 80, zIndex: -99, }}>

            <View style={{ height: 280, width: 220, marginLeft: 7, marginRight: 90 }} >
                <View style={{ flex: 2, margin: 10 }}>
                    <BusinessCard2 />
                </View>
            </View>
        </View>

    )
}

export default HorizontalScrollView;