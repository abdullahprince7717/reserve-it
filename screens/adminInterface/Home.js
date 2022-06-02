import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, useWindowDimensions, StatusBar, Button } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchBar from '../../components/home/SearchBar.js'
import CustomerCard from '../../components/adminUIComponents/home/CustomerCard.js'
// import Modal from "react-native-modal";

const Home = (props) => {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);

    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };



    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', }}>
            <View style={{ width: '93%', margin: 10 }}>
                <SearchBar />
            </View>

            <View style={{ width: '93%', backgroundColor: 'grey', height: 2 }}></View>

            <View style={{ width: '90%', marginTop: 10 }}>

                <ScrollView 
                    
                >

                    <CustomerCard title='Abdullah' phone="03214323489" email='sdfbhwo@ddqed.com'
                        onPress={() => {
                            console.log('Pressed')
                            props.navigation.navigate('CustomerProfile')
                        }} />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.com' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Abdullah' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>


                </ScrollView>


            </View>
        </View>
    );

    const SecondRoute = () => (

        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', }}>
            <View style={{ width: '93%', margin: 10 }}>
                <SearchBar />
            </View>

            <View style={{ width: '93%', backgroundColor: 'grey', height: 2 }}></View>


            <View style={{ width: '90%', marginTop: 10 }}>

                <ScrollView >

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.'
                        onPress={() => {
                            console.log('Pressed')
                            props.navigation.navigate('BusinessProfile')
                        }}
                    />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Dr. Strange clinic' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Wah wah salon' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Wah wah salon' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Wah wah salon' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Wah wah salon' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>

                    <CustomerCard title='Wah wah salon' phone='03214323489' email='sdfbhwo@ddqed.' />

                    <View style={{ width: '90%', backgroundColor: 'grey', height: 1, marginHorizontal: 20 }}></View>


                </ScrollView>
            </View>
        </View>

    );

    // const ThirdRoute = () => (
    //     <View style={{ flex: 1, backgroundColor: '#fff',alignItems: 'center',}} >
    //         <ScrollView>

    //         </ScrollView>
    //     </View>
    // );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        // third: ThirdRoute,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#fff' }}
            style={{ backgroundColor: '#000', }}
        />
    );

    const [routes] = React.useState([
        { key: 'first', title: 'Customers' },
        { key: 'second', title: 'Businesses' },
        // { key: 'third', title: 'Details' },
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
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
            {/* <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal> */}
        </View>
    );
};

export default Home;

const deviceWidth = Math.round(Dimensions.get('window').width);

styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // backgroundColor: 'grey',
    },
});