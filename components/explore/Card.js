import * as React from 'react';
import {  Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet,Dimensions} from 'react-native';

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const BusinessCard = () => (
    
    <Card style = {styles.card}>

        <Card.Cover 
            source={{ uri: 'https://picsum.photos/700' }}
            style={{height:150,resizeMode:'contain'}}
        />
        <Card.Content>
            <Title>Card title</Title>
            <Paragraph>lorem ipsum dolor sit amet, consectetur adipis.lorem ipsum dolor sit amet, 
                consectetur adipis.lorem ipsum dolor sit amet.
            </Paragraph>
        </Card.Content>
    </Card>
);

export default BusinessCard;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create  ({
    card: {
        height: 260,
        width: deviceWidth-30,
        marginTop:10,
        borderRadius:10

    },
});