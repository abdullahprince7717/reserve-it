import React, { useState,useEffect } from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Text,View, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import StarRating from 'react-native-star-rating-widget';
import { Chip } from 'react-native-paper';



// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const BusinessCard = (props) => {

    useEffect(() => {
        console.log(props?.category)
        // props.category == ""
    }, [])

    // const [isFilled,setIsFilled] = useState(false)
    const [category,setCategory] = useState('salon')

    return (
        <TouchableWithoutFeedback
            onPress={props.onPress}
        >
            <Card style={styles.card}>

                <Card.Cover
                    source={{ uri: 'https://picsum.photos/700' }}
                    style={{ height: 150, resizeMode: 'contain' }}
                />
                <Card.Content >
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <StarRating
                            rating="2.5"
                            onChange={(rating) => console.log(rating)}
                            disabled={true}
                            maxStars={5}
                            starSize={20}
                            color="orange"


                        />
                        <Chip icon= {(props?.category == "salon") ? "suitcase":"stethoscope" } style={{ height: 28, width: 80, backgroundColor: (props.category === 'salon' ) ? '#57B9BB': '#ff7cb5'  , }}
                            onPress={() => console.log('Pressed')
                        }>
                            <Text style={{ color: 'white' }}>{props.category == "salon" ? "Salon" : "Doctor"}</Text>
                        </Chip>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Title>{props.title}</Title>
                        {/* <TouchableOpacity style = {{marginTop:10}} onPress={() => {
                            setIsFilled(!isFilled)
                        }}>
                            <Ionicons name= {isFilled ? "heart" : "heart-outline"} size={28} color="red" />

                        </TouchableOpacity> */}
                    </View>

                    <Paragraph>{props.address}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableWithoutFeedback>
    )
}

export default BusinessCard;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: "50%",
        width: deviceWidth - 30,
        marginTop: 10,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,

    },
});