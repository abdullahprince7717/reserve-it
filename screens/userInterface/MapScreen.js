import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { db, auth, } from "../../firebase/FirebaseConfig.js";
import { doc, getDoc, setDoc, collection, getDocs, where, query,limit } from "firebase/firestore";


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;




const MapScreen = (props) => {
    // const theme = useTheme();
    const [data, setData] = useState([]);
    const [businesses,setBusiness] = useState([])
    const Images = [
        { image: require("../../assets/map-marker.png") },
        { image: require("../../assets/logo.png") },
        { image: require("../../assets/icon.png") },
        { image: require("../../assets/doc-logo.jpg") },
    ];

    useEffect(() => {
        console.log(props?.route?.params?.data)
        if(!props?.route?.params?.data) return;
        // {
        //     coordinate: {
        //         latitude: 22.6293867,
        //         longitude: 88.4354486,
        //     },
        //     title: "WA Restaurant",
        //     description: "This is the best food place",
        //     image: Images[0].image,
        //     rating: 4,
        //     reviews: 99,
        // },
        let temp = []
        props.route.params.data.map(item => {
            let av = {
                coordinate: {
                    latitude: item.latitude?item.latitude:0,
                    longitude: item.longitude?item.longitude:0,
                },
                title: item.business_name,
                business_description: item.business_description,
                rating: item.rating,
                image: item.image,
                business_address: item.business_address,
                reviews: item?.reviews,
                id: item?.id,
                category: item?.category,
                business_name: item?.business_name,
                business_description: item?.business_description,
                business_phone: item?.business_phone,
                business_email: item?.business_email,
                email: item?.email,
                instagram: item?.instagram,
                facebook: item?.facebook,
                monday:{
                    day: item?.monday?.day,
                    isOpen: item?.monday?.isOpen,
                    startTime: item?.monday?.startTime,
                    endTime: item?.monday?.endTime,
                },
                tuesday:{
                    day: item?.tuesday?.day,
                    isOpen: item?.tuesday?.isOpen,
                    startTime: item?.tuesday?.startTime,
                    endTime: item?.tuesday?.endTime,
                },
                wednesday:{
                    day: item?.wednesday?.day,
                    isOpen: item?.wednesday?.isOpen,
                    startTime: item?.wednesday?.startTime,
                    endTime: item?.wednesday?.endTime,
                },
                thursday:{
                    day: item?.thursday?.day,
                    isOpen: item?.thursday?.isOpen,
                    startTime: item?.thursday?.startTime,
                    endTime: item?.thursday?.endTime,
                },
                friday:{
                    day: item?.friday?.day,
                    isOpen: item?.friday?.isOpen,
                    startTime: item?.friday?.startTime,
                    endTime: item?.friday?.endTime,
                },
                saturday:{
                    day: item?.saturday?.day,
                    isOpen: item?.saturday?.isOpen,
                    startTime: item?.saturday?.startTime,
                    endTime: item?.saturday?.endTime,
                },
                sunday:{
                    day: item?.sunday?.day,
                    isOpen: item?.sunday?.isOpen,
                    startTime: item?.sunday?.startTime,
                    endTime: item?.sunday?.endTime,
                }
                    


            }
            temp.push(av);
        })
        setData(temp)
    },[])
    

    const markers = [
        {
            coordinate: {
                latitude: 22.6293867,
                longitude: 88.4354486,
            },
            title: "WA Restaurant",
            description: "This is the best food place",
            image: Images[0].image,
            rating: 4,
            reviews: 99,
        },
        {
            coordinate: {
                latitude: 22.6345648,
                longitude: 88.4377279,
            },
            title: "Ab Salon",
            description: "This is the second best food place",
            image: Images[1].image,
            rating: 5,
            reviews: 102,
        },
        {
            coordinate: {
                latitude: 22.6281662,
                longitude: 88.4410113,
            },
            title: "Simba movies",
            description: "This is the third best food place",
            image: Images[2].image,
            rating: 3,
            reviews: 220,
        },
        {
            coordinate: {
                latitude: 22.6341137,
                longitude: 88.4497463,
            },
            title: "crunch",
            description: "This is the fourth best food place",
            image: Images[3].image,
            rating: 4,
            reviews: 48,
        },
        {
            coordinate: {
                latitude: 22.6292757,
                longitude: 88.444781,
            },
            title: "Fifth Amazing Food Place",
            description: "This is the fifth best food place",
            image: Images[3].image,
            rating: 4,
            reviews: 178,
        },
    ];


    const initialMapState = {
        businesses,
        data,
        categories: [
            {
                name: "Doctor",
                icon: (
                    <MaterialCommunityIcons
                        style={styles.chipsIcon}
                        name="food-fork-drink"
                        size={18}
                    />
                ),
            },
            {
                name: "Restaurant",
                icon: (
                    <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />
                ),
            },
            {
                name: "Salon",
                icon: (
                    <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />
                ),
            },
            {
                name: "Movie Theater",
                icon: (
                    <MaterialCommunityIcons
                        name="food"
                        style={styles.chipsIcon}
                        size={18}
                    />
                ),
            },
        ],
        region: {
            latitude: 22.62938671242907,
            longitude: 88.4354486029795,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        },
    };

    const [state, setState] = React.useState(initialMapState);

    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        console.log(props?.route?.params?.data)
        setBusiness(props?.route?.params?.data)

        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            //state.markers with data
            if (index >= data.length) {
                index = data.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    //state.market with data
                    const { coordinate } = data[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });

    //state.markers with data
    const interpolations = data.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            (index + 1) * CARD_WIDTH,
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp",
        });

        return { scale };
    });

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = markerID * CARD_WIDTH + markerID * 20;
        // if (Platform.OS === "ios") {
        //     x = x - SPACING_FOR_CARD_INSET;
        // }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    };

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);

    return (
        <View style={styles.container}>
            <MapView
                ref={_map}
                initialRegion={state.region}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                // customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
            >
                {data.map((marker, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolations[index].scale,
                            },
                        ],
                    };
                    return (
                        <MapView.Marker
                            key={index}
                            coordinate={marker.coordinate}
                            onPress={(e) => onMarkerPress(e)}
                        >
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={require("../../assets/map-marker.png")}
                                    style={[styles.marker, scaleStyle]}
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </MapView.Marker>
                    );
                })}
            </MapView>
            {/* <View style={styles.searchBox}>
                <TextInput
                    placeholder="Search here"
                    placeholderTextColor="#000"
                    autoCapitalize="none"
                    style={{ flex: 1, padding: 0 }}
                />
                <Ionicons name="ios-search" size={20} />
            </View> */}
            {/* <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipsScrollView}
                contentInset={{
                    // iOS only
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 20,
                }}
                contentContainerStyle={{
                    paddingRight: Platform.OS === "android" ? 20 : 0,
                }}
            >
                {state.categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView> */}
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={styles.scrollView}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET,
                }}
                contentContainerStyle={{
                    paddingHorizontal:
                        Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                },
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )}
            >
                {data.map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <Image
                            source={{uri: marker.image}}
                            style={styles.cardImage}
                            resizeMode="cover"
                        />
                        {console.log(marker.image)}
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardtitle}>
                                {marker.title}
                            </Text>

                            {/* <StarRating ratings={marker.rating} reviews={marker.reviews} /> */}

                            <Text numberOfLines={1} style={styles.cardDescription}>
                                {marker.business_address}
                            </Text>

                            <View style={styles.button}>
                                <TouchableOpacity
                                    onPress={() => { props.navigation.navigate("BusinessProfile",{data: data[index]}) 
                                                    console.log(data[index])
                                }}
                                    style={[
                                        styles.signIn,
                                        {
                                            borderColor: "#FF6347",
                                            borderWidth: 1,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.textSign,
                                            {
                                                color: "#FF6347",
                                            },
                                        ]}
                                    >
                                        See Details
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBox: {
        position: "absolute",
        marginTop: Platform.OS === "ios" ? 40 : 20,
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "90%",
        alignSelf: "center",
        borderRadius: 5,
        padding: 10,
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipsScrollView: {
        position: "absolute",
        top: Platform.OS === "ios" ? 90 : 80,
        paddingHorizontal: 10,
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        height: 35,
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignItems: "center",
        marginTop: 5,
    },
    signIn: {
        width: "100%",
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    textSign: {
        fontSize: 14,
        fontWeight: "bold",
    },
});
