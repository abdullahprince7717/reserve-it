import { StyleSheet, Text, View, } from 'react-native'
import React, {useState} from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';

const ServicesList = (props) => {
    
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style = {styles.container}>

            <Card 
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('Checkout', {review: reviews[0]})}
                }}

            />

            <Card 
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('EditService')}
                }}
            />


        </View>
    )
}

export default ServicesList

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: 20
    },
    fab: {
        position: 'absolute',
        margin: 10,
        right: 15,
        bottom: 20,
        elevation: 1,
        backgroundColor: '#57B9BB',
        // borderRadius: 80,
    },
})