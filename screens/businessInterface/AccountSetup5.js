import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import Card from '../../components/businessUIComponents/ServiceCard.js'
import { FAB } from 'react-native-paper';

const AccountSetup5 = (props) => {

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

            <FAB
                style={styles.done}
                label = "Done"
                large
                icon="plus"
                onPress={() => {
                    console.log('Pressed')
                    props.navigation.navigate('Home')
                }}
                color = '#fff'
            />



        </View>
    )
}

export default AccountSetup5

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
        bottom: 150,
        elevation: 1,
        backgroundColor: '#57B9BB',
        // borderRadius: 80,
    },
    done: {
        position: 'absolute',
        margin: 10,
        right: 90,
        bottom: 60,
        elevation: 2,
        backgroundColor: 'pink',
        width: 200,
        // borderRadius: 80,
    },
})