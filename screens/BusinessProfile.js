import React from 'react';
import { View, Text,StyleSheet,Dimensions,ScrollView,useWindowDimensions } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Caption,Title,Divider,Button} from 'react-native-paper';
import { TabView, SceneMap } from 'react-native-tab-view';
import { AntDesign } from "@expo/vector-icons/"

import ServiceCard from  '../components/businessProfile/ServiceCard.js';

const BusinessProfile = (props) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff',margin:10, }}>
            <ScrollView>
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
                        props.navigation.navigate('BookingConfirm')       //just for testing
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
            </ScrollView>    
        </View>
    );
    
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );
    
    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',}} >
            <ScrollView>
                <View style={styles.details}>
                    <Text style={{ color:'black',fontSize: 17, fontWeight:'bold'}}>
                        CONTACT AND BUSINESS HOURS
                    </Text>

                    <Divider style = {{height:2,color:'#000',marginTop:10,marginBottom:10,}} />

                    <View style = {{flexDirection:'row'}}>   
                        <AntDesign color="black" name="mobile1" size={20} />
                        <Text style = {{marginLeft:10,color:"black",fontSize: 17, color:'grey'}}>
                            03214323489
                        </Text>
                    </View>    

                    <Divider style = {{height:2,color:'#000',marginTop:10,marginBottom:15,}} />

                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Monday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View>
                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Tuesday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View>
                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Wednesday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View>
                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Thursday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View><View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Friday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View>
                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Saturday
                        </Text>
                        <Text style = {{fontWeight:'bold'}}>
                            10:00 AM - 10:00 PM
                        </Text>
                    </View>
                    <View style = {{flexDirection:'row',justifyContent: 'space-between',marginLeft:20,marginRight:20,marginBottom:15,}} >
                        <Text style = {{}}>
                            Sunday
                        </Text>
                        <Text style = {{fontWeight:'bold',}}>
                            CLOSED
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });
    
    const [routes] = React.useState([
        { key: 'first', title: 'Services' },
        { key: 'second', title: 'Reviews' },
        { key: 'third', title: 'Details' },
    ]);

    // const renderScene = ({ route }) => {
    //     switch (route.key) {
    //         case 'first':
    //             return <FirstRoute foo={props} />;
    //         case 'second':
    //             return <SecondRoute />;
    //         default:
    //             return null;
    //     }
    // };


    return (
        <View style = {styles.container}>
            <View style = {styles.imageSlider}>
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
            </View>
            {/* <ImageSlider
                data={[                                 //{props.images}
                    {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
                    {img: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
                    {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
                ]}
                autoPlay={false}
                // onItemChanged={(item) => console.log("item", item)}
                closeIconColor="#fff"
                >
            </ImageSlider> */}
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

                {/* <ServiceCard
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
                /> */}
                
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>     
    );
};

export default BusinessProfile;

const deviceWidth = Math.round(Dimensions.get('window').width);

styles = StyleSheet.create({

    container: {
        
        flex:2,
        // backgroundColor: 'grey',
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
    imageSlider:{  
        flex:0.45,
    },
    details:{
        width:deviceWidth-30,
        height:500,
        backgroundColor: '#fff',
        marginTop: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },

});