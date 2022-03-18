import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CustomerCard = () => {
    return (
        <View style ={styles.container}>
            <View style ={{flexDirection:'column',width:'100%'}}>
                <Text style = {{fontSize:17,fontWeight:'bold'}}>
                    Customer Name
                </Text>

                <View style ={{flexDirection:'row',justifyContent: 'space-between',marginRight:25,paddingLeft:8}}>
                    <Text>
                        03214323489
                    </Text>

                    <Text>
                        test@test.com
                    </Text>
                </View>

            </View>
            <View style = {{alignItems: 'center',justifyContent: 'center'}}>
                <MaterialCommunityIcons name="greater-than" />
            </View>
        </View>
    )
}

export default CustomerCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        height:70,
        width:'100%',
        flexDirection:'row',
        padding:15,
        justifyContent: 'space-between',
        
    },
})