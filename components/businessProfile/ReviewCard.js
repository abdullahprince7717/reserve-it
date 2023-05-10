import React from 'react'
import { View, Text } from 'react-native';
import {Divider} from 'react-native-paper';
import StarRating from 'react-native-star-rating-widget';
import moment from 'moment';

function ReviewCard() {
    return (
        <View>
            <View style={{ width: '90%', flex: 1, flexDirection: 'column', borderRadius: 5 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ marginLeft: 10, fontSize: 19, fontWeight: 'bold', }}>
                        Abdullah Ali
                    </Text>
                    <Text style={{ marginRight: 10 }}>
                        {time}
                    </Text>
                </View>


                <StarRating
                    rating={rating}
                    onChange={setRating}
                    maxStars={5}
                    starSize={20}
                    color="orange"
                    style={{ margin: 5 }}
                />

                <Subheading style={{ marginLeft: 10 }}>
                    Service name
                </Subheading>

                <Caption style={{ marginLeft: 15, }} >
                    By Business Name
                </Caption>

                <Paragraph style={{ marginLeft: 10, backgroundColor: 'white', borderRadius: 10, paddingLeft: 5 }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec eget ex vitae nunc tincidunt egestas.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec eget ex vitae nunc tincidunt egestas.
                </Paragraph>

            </View>

            <Divider style={{ height: 2, width: '75%', color: '#000', marginTop: 15, marginBottom: 20, }} />
        </View>
    )
}

export default ReviewCard