import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#57B9BB',
        justifyContent:'center',
        alignItems: 'center',
    }
})