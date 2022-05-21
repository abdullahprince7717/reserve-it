import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';

const ServicesList = (props) => {

    return (
        <View style = {styles.container}>

            <Card 
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('EditService')}
                }}

            />

            <Card 
                onPress = {() => {
                    console.log('pressed')
                    {props.navigation.navigate('EditService')}
                }}
            />


                <FAB
                    style={styles.fab}
                    label = "Add"
                    large
                    icon="plus"
                    onPress={() => {
                        console.log('Pressed')
                        props.navigation.navigate('AddService')
                    }}
                    color = '#fff'
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