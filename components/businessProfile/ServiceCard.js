import { View, Text,StyleSheet,Dimensions, } from 'react-native';
import {Divider,Button} from 'react-native-paper';
import React from 'react';

const ServiceCard = (props) => {
    return (    
        <View style = {styles.container}>
            <View style = {styles.leftColumn}>
                <View style={{ height: '65%', width :'95%',backgroundColor:'white',flexDirection:'row', justifyContent:'space-between'}}>

                    <Text style={{color:'black', fontSize:20, fontWeight:'bold',}}>
                        {props.name}
                    </Text>

                    <View>
                        <Text style={{color:'black', fontSize:18, fontWeight:'200',}}>
                            {props.price} Pkr
                        </Text>

                        <Text style={{color:'grey', fontSize:15, fontWeight:'100',}}>
                            {props.time}
                        </Text>

                    </View>
                    
                    
                </View>
            </View>

            <Divider style = {{height:'100%',color:'#000',width:'0.5%'}} />
            
            <View style={styles.rightColumn}>
                <View style={{ height: '85%', width :'90%',backgroundColor:'white',
                    flexDirection:'column',justifyContent: 'center',alignItems: 'center',
                }}>

                <Button 
                mode="contained" 
                onPress={props.onPress}
                style ={{ backgroundColor: '#57B9BB' }}
                >

                    Book
                </Button>

                </View>
            </View>
        </View>   
    );
};

export default ServiceCard;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        height: 70,
        width: deviceWidth-40,
        margin:10,
        borderRadius: 10,
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
