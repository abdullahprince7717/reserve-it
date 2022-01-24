import React from 'react';
import { View, StyleSheet, Text,Image, Dimensions } from 'react-native';
// import { Card, Button, Icon } from 'react-native-elements';

function BusinessCard (props) {

return (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={props.image} />
            <View style={styles.infoStyle}>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Text style={styles.descriptionStyle}>{props.description}</Text>
            </View>
        </View>
    </View>
);
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
container: {
    width: deviceWidth - 20,
    alignItems: 'center',
    marginTop: 25,
},
cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#D5D8DC',
    height: 200,
    borderRadius: radius,
    shadowColor: '#000',
    shadowOffset: {
        width: 5,
        height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
},
imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
},
titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
},
descriptionStyle: {
    paddingLeft: 10
},

infoStyle: {
    marginHorizontal: 5,
    marginVertical: 5,
},

})

export default BusinessCard;