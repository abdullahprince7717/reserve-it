import { View, Text,StyleSheet,Dimensions } from 'react-native';
import {Divider} from 'react-native-paper';
import React from 'react';

const AppointmentCard = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.leftColumn}>
                <View style={{ height: '75%', width :'85%',backgroundColor:'white',flexDirection:'column',}}>
                    <Text style={{color:'black', fontSize:20, fontWeight:'bold',}}>
                        Service Title
                    </Text>
                    <Text style={{color:'black', fontSize:18, fontWeight:'200', marginTop :20}}>
                        Business Name
                    </Text>
                    <Text style={{color:'black', fontSize:16, fontWeight:'100', marginTop :2}}>
                        Address
                    </Text>
                </View>
            </View>

            <Divider style = {{height:'100%',color:'#000',width:'0.5%'}} />
            
            <View style={styles.rightColumn}>
                <View style={{ height: '85%', width :'90%',backgroundColor:'white',
                flexDirection:'column',justifyContent: 'center',alignItems: 'center',
                }}>

                    <Text style={{color:'black', fontSize:20, fontWeight:'bold',}}>
                        day and date
                    </Text>
                    <Text style={{color:'black', fontSize:19, fontWeight:'200',margin:10}}>
                        Time
                    </Text>

                </View>
            </View>
        </View>
    );
};

export default AppointmentCard;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height: 170,
        width: deviceWidth-40,
        margin:20,
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
        height: 170,
        // backgroundColor: 'blue',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20, 
    },
    rightColumn: {
        flex: 1,
        height: 170,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
})
