import React from 'react';
import { View, Text,StyleSheet,Dimensions,ScrollView } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Caption,Title,Divider,Button} from 'react-native-paper';

import ServiceCard from  '../components/businessProfile/serviceCard.js';


const BusinessProfile = (props) => {
    return (
        <View style = {styles.container}>
            <ScrollView>
                <ImageSlider
                    data={[                                 //{props.images}
                        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
                        {img: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
                        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
                    ]}
                    autoPlay={false}
                    // onItemChanged={(item) => console.log("item", item)}
                    closeIconColor="#fff"
                    >
                </ImageSlider>

                <View style = {{marginLeft:10}}>
                    <View style={{margin:10,}}>
                        <Title>
                            Title of business                        {/* {props.title} */}
                        </Title>
                        <Caption>
                            Address of business                        {/* {props.address} */}
                        </Caption>
                    </View>

                    <Divider style = {{height:2,color:'#000',marginBottom:10}} />

                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                            onPress ={ () => {
                                console.log('Pressed')
                                props.navigation.navigate('Booking')
                            }}
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                            onPress ={ () => {
                                console.log('Pressed')
                                props.navigation.navigate('Testing')       //just for testing
                            }}
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "2999"
                        />
                        <ServiceCard
                            name = "Haircut"
                            price = "299"
                        />
                </View>
            </ScrollView>
        </View>
            
    );
};

export default BusinessProfile;
const deviceWidth = Math.round(Dimensions.get('window').width);
styles = StyleSheet.create({

    container: {
        
        flex:2,
        backgroundColor: 'grey',
    },
    services:{
        borderRadius: 30,
    },
    service: {
        flexDirection: 'column',
        backgroundColor: 'blue',
        width: deviceWidth-25,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 20,
        height:80,
        flexWrap: 'wrap',
        marginBottom: 20,
        borderRadius: 30,
        

    },

    listView: {
        flexDirection: 'row',
        backgroundColor: 'red',
        flex:3,
        
    },
    buttonView: {
        flexDirection: 'row',
        backgroundColor: 'green',
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#F39DFF',
        width:'85%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    scrollView:{  

    },

});