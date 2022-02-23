import React, {useState} from 'react';
import { View, Text,StyleSheet,Dimensions,ScrollView,useWindowDimensions,TouchableOpacity, } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";
import { Caption,Title,Divider,TouchableRipple,Paragraph,ProgressBar,Subheading } from 'react-native-paper';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { AntDesign,Ionicons } from "@expo/vector-icons/"
import StarRating from 'react-native-star-rating-widget';
import moment from 'moment';
import ServiceCard from  '../components/businessProfile/ServiceCard.js';

const BusinessProfile = (props) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [rating, setRating] = useState(5);

    const time = moment().format('MMMM Do YYYY');



    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff',margin:10, }}>
            <ScrollView>
                <ServiceCard
                    name = "Haircut"
                    price = "2999"
                    time = "1 hr"
                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')
                    }}
                />
                <ServiceCard
                    name = "Haircut"
                    price = "1999"
                    time = "40 mins"

                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')       //just for testing
                    }}
                />
                <ServiceCard
                    name = "Haircut"
                    price = "1999"
                    time = "40 mins"

                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')       //just for testing
                    }}
                />
                <ServiceCard
                    name = "Haircut"
                    price = "1999"
                    time = "40 mins"

                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')       //just for testing
                    }}
                />
                <ServiceCard
                    name = "Haircut"
                    price = "1999"
                    time = "40 mins"

                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')       //just for testing
                    }}
                />
                <ServiceCard
                    name = "Haircut"
                    price = "1999"
                    time = "40 mins"

                    onPress ={ () => {
                        console.log('Pressed')
                        props.navigation.navigate('Booking')       //just for testing
                    }}
                />
                
                
            </ScrollView>    
        </View>
    );
    
    const SecondRoute = () => (
       
        <ScrollView>    
            <View style={{ flex: 1,alignItems:'center' }} >
            
                {/* START of Overall rating card */}

                <View style = {{flexDirection: 'row', backgroundColor:'white',height:130,borderRadius:20,borderWidth:0.4,justifyContent:'center',alignItems:'center',margin:20, flexWrap:'wrap'}}>

                    <View style = {{flexDirection: 'column',height : '90%',width : '46%',justifyContent:'center',
                                    alignItems:'center',}}>

                    <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 0,fontSize: 30}}>
                                5.0 
                            </Text>
                            <Text style = {{marginTop: 10,fontSize: 20}}>
                                /5 
                            </Text>
                    </View>
                        <StarRating
                            rating={rating}
                            onChange={setRating}
                            maxStars = {5}
                            starSize = {20}
                            color = "orange"
                            style  = {{margin:5}}

                        />
                        <Text style = {{marginTop: 10,fontSize: 10}}>
                            Based on 25 reviews
                        </Text>
                    </View>

                    <View style = {{flexDirection: 'column',margin: 5, width : 0.4, height : '90%', backgroundColor: 'grey'}}/>

                    <View style = {{flexDirection: 'column',height : '90%',width : '50%',justifyContent:'center',alignItems:'center',}}>
                        <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 5}}>
                                5 <Ionicons color="orange" name="star" size={16} />
                            </Text>

                            <ProgressBar style={{height: 5, width:115,backgroundColor: 'grey'}} progress={1} color='orange' />

                            <Text style = {{marginLeft: 5}}>
                                5 
                            </Text> 
                        </View>

                        <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 5}}>
                                4 <Ionicons color="orange" name="star" size={16} />
                            </Text>

                            <ProgressBar style={{height: 5, width:115,backgroundColor: 'grey'}} progress={0.25} color='orange' />

                            <Text style = {{marginLeft: 5}}>
                                1 
                            </Text> 

                        </View>

                        <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 5}}>
                                3 <Ionicons color="orange" name="star" size={16} />
                            </Text>

                            <ProgressBar style={{height: 5, width:115,backgroundColor: 'grey'}} progress={0.9} color='orange' />

                            <Text style = {{marginLeft: 5}}>
                                9 
                            </Text> 

                        </View>

                        <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 5}}>
                                2 <Ionicons color="orange" name="star" size={16} />
                            </Text>

                            <ProgressBar style={{height: 5, width:115,backgroundColor: 'grey'}} progress={0.8} color='orange' />

                            <Text style = {{marginLeft: 5}}>
                                8 
                            </Text> 

                        </View>

                        <View style = {{flexDirection:'row',margin : 3,alignItems: 'center',}}>
                            <Text style = {{marginRight: 5}}>
                                1 <Ionicons color="orange" name="star" size={16} />
                            </Text>

                            <ProgressBar style={{height: 5, width:115,backgroundColor: 'grey'}} progress={0.5} color='orange' />

                            <Text style = {{marginLeft: 5}}>
                                5 
                            </Text> 

                        </View>
                    </View>
                </View>      

                {/* END of Overall rating card */}

            
                <View style = {{width: '90%', flex:1, flexDirection :'column', borderRadius: 5}}>
                    <View style ={{flexDirection :'row', justifyContent: 'space-between',
                                alignItems: 'center',
                    }}>
                        <Text style ={{marginLeft: 10, fontSize : 19, fontWeight: 'bold',}}>
                            Abdullah Ali
                        </Text>
                        <Text style ={{marginRight: 10}}>
                            {time}
                        </Text>
                    </View>

    
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        maxStars = {5}
                        starSize = {20}
                        color = "orange"
                        style  = {{margin:5}}
                    />
                    
                    <Subheading style ={{marginLeft: 10}}>
                        Service name
                    </Subheading>
                    
                    <Caption style ={{ marginLeft: 15,}} >
                        By Business Name
                    </Caption>
                                        
                    <Paragraph style ={{marginLeft: 10, backgroundColor: 'white', borderRadius: 10,paddingLeft : 5}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                    </Paragraph>

                </View>

                <Divider style = {{height:2, width : '75%', color:'#000',marginTop:15,marginBottom:20,}} />

                <View style = {{width: '90%', flex:1, flexDirection :'column', borderRadius: 5}}>
                    <View style ={{flexDirection :'row', justifyContent: 'space-between',
                                alignItems: 'center',
                    }}>
                        <Text style ={{marginLeft: 10, fontSize : 19, fontWeight: 'bold',}}>
                            Abdullah Ali
                        </Text>
                        <Text style ={{marginRight: 10}}>
                            {time}
                        </Text>
                    </View>

    
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        maxStars = {5}
                        starSize = {20}
                        color = "orange"
                        style  = {{margin:5}}
                    />
                    
                    <Subheading style ={{marginLeft: 10}}>
                        Service name
                    </Subheading>
                    
                    <Caption style ={{ marginLeft: 15,}} >
                        By Business Name
                    </Caption>
                                        
                    <Paragraph style ={{marginLeft: 10, backgroundColor: 'white', borderRadius: 10,paddingLeft : 5}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                    </Paragraph>

                </View>

                <Divider style = {{height:2, width : '75%', color:'#000',marginTop:15,marginBottom:20,}} />

                <View style = {{width: '90%', flex:1, flexDirection :'column', borderRadius: 5}}>
                    <View style ={{flexDirection :'row', justifyContent: 'space-between',
                                alignItems: 'center',
                    }}>
                        <Text style ={{marginLeft: 10, fontSize : 19, fontWeight: 'bold',}}>
                            Abdullah Ali
                        </Text>
                        <Text style ={{marginRight: 10}}>
                            {time}
                        </Text>
                    </View>

    
                    <StarRating
                        rating={rating}
                        onChange={setRating}
                        maxStars = {5}
                        starSize = {20}
                        color = "orange"
                        style  = {{margin:5}}
                    />
                    
                    <Subheading style ={{marginLeft: 10}}>
                        Service name
                    </Subheading>
                    
                    <Caption style ={{ marginLeft: 15,}} >
                        By Business Name
                    </Caption>
                                        
                    <Paragraph style ={{marginLeft: 10, backgroundColor: 'white', borderRadius: 10,paddingLeft : 5}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec eget ex vitae nunc tincidunt egestas.
                    </Paragraph>

                </View>

                <Divider style = {{height:2, width : '75%', color:'#000',marginTop:15,marginBottom:20,}} />
                
            </View>
        </ScrollView>    

    );
    
    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',}} >
            <ScrollView>
                <View style={styles.details}>

                    <Text style={{ color:'black',fontSize: 17, fontWeight:'bold'}}>
                        ABOUT US
                    </Text>

                    <Paragraph style={{ color:'black',fontSize: 15, marginTop:10}}>
                        lorem ipsum dolor sit amet,
                    </Paragraph>

                    <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:10,}} />

                    <Text style={{ color:'black',fontSize: 17, fontWeight:'bold'}}>
                        CONTACT AND BUSINESS HOURS
                    </Text>

                    <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:10,}} />

                    <View style = {{flexDirection:'row'}}>   
                        <AntDesign color="black" name="mobile1" size={20} />
                        <Text style = {{marginLeft:10,color:"black",fontSize: 17, color:'grey'}}>
                            03214323489
                        </Text>
                    </View>    

                    <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:15,}} />

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

                    <Text style={{ color:'black',fontSize: 17, fontWeight:'bold'}}>
                        Social Media and Share
                    </Text>

                    <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:10,}} />

                    <View style ={{flexDirection:'row', justifyContent:'space-evenly', width:360,marginTop : 20,marginBottom : 20}}>
                        
                        <TouchableOpacity>
                            <AntDesign color="red" name="instagram" size={40} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign color="green" name="sharealt" size={40} />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign color="blue" name="facebook-square" size={40} />
                        </TouchableOpacity>

                    </View>

                    <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:10,}} />
                    
                    <TouchableRipple
                        onPress = { ()=> {
                                console.log("jhasdk,")
                        }}
                    >
                        <Text style={{ color:'grey',fontSize: 20, fontWeight:'bold',marginLeft: 10,marginTop: 10,marginBottom: 10 }}>
                            Payment and Cancellation Policy
                        </Text>
                    </TouchableRipple>
                    
                    <TouchableRipple
                        onPress = { ()=> {
                                console.log("jhasdk,")
                        }}
                    >
                        <Text style={{ color:'grey',fontSize: 20, fontWeight:'bold',marginLeft: 10,marginTop: 10,marginBottom: 10 }}>
                            Report
                        </Text>
                    </TouchableRipple>

                    

                    <Text style={{ color:'white',fontSize: 20, fontWeight:'bold',marginLeft: 15,marginTop: 10 }}>
                        EXTRAA TEXT
                    </Text>
                    {/* <Divider style = {{height:1,color:'#000',marginTop:10,marginBottom:10,}} /> */}

                </View>
            </ScrollView>
        </View>
    );
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#fff' }}
            style={{ backgroundColor: '#57B9BB', }}
        />
    );
    
    const [routes] = React.useState([
        { key: 'first', title: 'Services' },
        { key: 'second', title: 'Reviews' },
        { key: 'third', title: 'Details' },
    ]);

    // const renderScene = ({ route }) => {
    //     switch (route.key) {
    //         case 'first':
    //             return <FirstRoute prop={props} />;
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

            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>     
    );
};

export default BusinessProfile;

const deviceWidth = Math.round(Dimensions.get('window').width);

styles = StyleSheet.create({

    container: {
        
        flex:1,
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
        backgroundColor: '#57B9BB',
        width:'85%',
        height: '55%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    imageSlider:{  
        flex:0.45,
    },
    details:{
        flex:1,
        width:deviceWidth-30,
        backgroundColor: '#fff',
        marginTop: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
        
    },

});