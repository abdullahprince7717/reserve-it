import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity } from 'react-native';
import React,{useState} from 'react'

const AddPayment = () => {

    // const [value, setValue] = useState<ValueMap>({
    //     hours: 1,
    //     minutes: 0,
    //     seconds: 0,
    // });

    // const handleChange = (newValue: ValueMap) => {
    //     setValue(newValue);
    // };

    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Service Name"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Duration"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',margin: 10, }}>
                <TextInput
                    placeholder="Price"
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {() =>{
                    // navigation.navigate('BookingConfirm')
                }}
                >
                    <Text style = {{color: '#fff'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddPayment

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textInput:{  
        width: '95%',
        borderWidth:1,
        borderColor: '#000',
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
    
    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth-40,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    buttonContainer:{
        width:deviceWidth-40, 
        marginBottom: 20,
        flexDirection:'column',
        // backgroundColor:'#000',
        alignItems: 'flex-end',
        justifyContent:'flex-end',
        marginTop: 20,
        flexWrap:'wrap',
    },

})