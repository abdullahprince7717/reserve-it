import { View,StyleSheet,Dimensions, StatusBar,TouchableOpacity } from "react-native";
import { Agenda} from 'react-native-calendars';
import React, {useState} from 'react';
import {Text,Card, Avatar} from 'react-native-paper';
import moment from 'moment';
// import Typography from '../components/Typography';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};


function appointments() {

    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = 0; i < 15; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                // const time = moment().format("h:mm:ss a");
                const strTime = timeToString(time);
                // const strTime = time;
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = 3;

                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                        name: 'Item for ' + strTime + ' #' + j,
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
            }
    const newItems = {};
    Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
    });
    setItems(newItems);
    }, 1000);
};

    const renderItem = (item) => {
        return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <Card>
                <Card.Content>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text>{item.name}</Text>
                        <Avatar.Text label="J" />
                    </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
        );
    };

let now = new Date();
var currentDate = moment(now).format('YYYY-MM-DD');

    return (

        
        <View style={styles.view}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={currentDate}
                renderItem={renderItem}
            />
        </View>

        // <SafeAreaView style = {styles.view}>

        //     <Calendar style ={styles.Calendar}
                
        //         onDayPress={day => {
        //             console.log('selected day', day);
        //         }}

        //         theme = {{

        //             selectedDayBackgroundColor: '#00adf5',
        //             selectedDayTextColor: '#fff',
        //         }} 
            
        //     /> 
        // </SafeAreaView>
    );
}

export default appointments;



const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);


const styles = StyleSheet.create({

    view: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    Calendar: {
        width: deviceWidth,
    }
})