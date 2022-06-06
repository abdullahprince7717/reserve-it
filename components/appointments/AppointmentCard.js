import { View, Text,StyleSheet,Dimensions,TouchableWithoutFeedback } from 'react-native';
import {Divider,Button} from 'react-native-paper';
import React,{useState,useEffect} from 'react';
import moment from 'moment';

const AppointmentCard = (props) => {

    useEffect(() => {
        console.log(moment(props.date).format('ll'))
        // console.log(moment(props.time).format('LTS'))
        // console.log(props.time)
    },[])

    return (

    <TouchableWithoutFeedback
            onPress ={props.onPress}
    >
        <View style = {styles.container}>        
            <View style = {{flexDirection: 'row',alignItems: 'center'}}>
                <View style = {styles.leftColumn}>
                    <View style={{ height: '65%', width :'85%',backgroundColor:'white',flexDirection:'column',}}>
                        <Text style={{color:'black', fontSize:20, fontWeight:'bold',}}>
                            Service: {props.title}
                        </Text>
                        <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginTop :20}}>
                            Business: {props.businessName}
                        </Text>
                        <Text style={{color:'black', fontSize:16, fontWeight:'100', marginTop :4}}>
                            Address: {props.address}
                        </Text>
                    </View>
                </View>

                <Divider style = {{height:'80%',color:'#000',width:'0.5%'}} />

                <View style={styles.rightColumn}>
                    <View style={{ height: '85%', width :'90%',backgroundColor:'white',
                    flexDirection:'column',justifyContent: 'center',alignItems: 'center',
                    }}>

                        <Text style={{color:'black', fontSize:19, fontWeight:'bold',}}>
                            {moment(props.date).format('ll')}
                        </Text>
                        <Text style={{color:'black', fontSize:17, fontWeight:'200',margin:10}}>
                            {props.time}
                        </Text>

                    </View>
                </View>    
            </View>

            {/* <Divider style = {{height:'0.8%',color:'#000',width:'80%'}} /> */}

            <View style = {styles.buttonArea}>
                <View style = {{flexDirection:'row',}}>

                    <Button mode="outlined" 
                        style = {{marginRight:25,marginLeft:25,borderColor: 'green',borderWidth:1}}
                        color = 'green' 
                        onPress={props.onEditPress}
                        >
                            
                        {props.buttonText1}
                    </Button>

                    <Button mode="outlined" 
                        style = {{marginRight:25,marginLeft:25,borderColor: 'red',borderWidth:1}}
                        color = 'red' 
                        onPress={props.onCancelPress}>
                            
                            
                        {props.buttonText2}
                    </Button>

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
        flexDirection:'column',
        // flexWrap:'wrap',
        height: 200,
        width: deviceWidth-40,
        margin:20,
        marginTop:0,
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
        height: 140,
        // backgroundColor: 'blue',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20, 
    },
    rightColumn: {
        flex: 1,
        height: 130,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    buttonArea:{
        flex: 1,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',

    },
})
