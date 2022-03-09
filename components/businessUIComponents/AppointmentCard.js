import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback } from 'react-native';
import {Divider} from 'react-native-paper';
import React from 'react';

const AppointmentCard = (props) => {
    return (

    <TouchableWithoutFeedback
            onPress ={props.onPress}
    >
                
        <View style = {styles.container}>
            <View style = {styles.leftColumn}>
                <View style={{ height: '65%', width :'85%',backgroundColor:'white',flexDirection:'column',}}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold',}}>
                        {props.customerName}
                    </Text>
                    <Text style={{color:'black', fontSize:18, fontWeight:'200', marginTop :20}}>
                        {props.serviceName}
                    </Text>
                    <Text style={{color:'black', fontSize:14, fontWeight:'100', marginTop :4}}>
                        {props.servicePrice}
                    </Text>
                </View>
            </View>

            <Divider style = {{height:'100%',color:'#000',width:'0.5%'}} />
            
            <View style={styles.rightColumn}>
                <View style={{ height: '85%', width :'90%',backgroundColor:'white',
                flexDirection:'column',justifyContent: 'center',alignItems: 'center',
                }}>

                    <Text style={{color:'black', fontSize:19, fontWeight:'bold',}}>
                        {props.date}
                    </Text>
                    <Text style={{color:'black', fontSize:17, fontWeight:'200',margin:10}}>
                        {props.time}
                    </Text>

                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>    
    );
};

export default AppointmentCard;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height: 140,
        width: deviceWidth-40,
        margin:20,
        marginBottom : 0,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftColumn: {
        flex: 2.5,
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20, 
    },
    rightColumn: {
        flex: 1,
        height: '100%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
})
