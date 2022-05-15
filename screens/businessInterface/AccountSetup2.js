import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Feather, Ionicons } from "@expo/vector-icons/"
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from 'react';

const BusinessDetails = (props) => {
    // const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Restaurant', value: 'restaurant' },
        { label: 'Salon', value: 'salon' },
        { label: 'Doctor', value: 'doctor' }
    ]);

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : null}
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        >
            <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginTop: 20 }}>
                    Business Details
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -15 }}>
                    {/* <Ionicons color="#57B9BB" name="business" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Name"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <MaterialCommunityIcons color="#57B9BB" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business email"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                        mode="outlined"
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={{
                            backgroundColor: "#E7E7E7",
                            borderRadius: 5,
                            height: 55,
                        }}
                        containerStyle={{
                            width: '85%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop:30
                        }}
                        textStyle={{
                            fontSize: 15
                        }}
                        labelStyle={{
                            fontWeight: "bold"
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <Feather color="#57B9BB" name="phone" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        label="Business Description"
                        placeholderTextColor={"grey"}
                        multiline={true}
                        underlineColorAndroid='transparent'
                        style={styles.description}
                        mode="outlined"

                    />
                </View>



                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, marginTop: 20 }}>
                    Social Media
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -15 }}>
                    {/* <Feather color="red" name="instagram" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        placeholder="Instagram"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <Feather color="blue" name="facebook" size={23} style ={{margin:10, marginTop: 25, }} />  */}
                    <TextInput
                        placeholder="Facebook"
                        placeholderTextColor={"grey"}
                        style={styles.textInput}
                    />
                </View>


                <View style={{ justifyContent: 'center', margin: 20, marginTop: 40 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            console.log("Pressed SAVE")
                            props.navigation.navigate('AccountSetup3')
                        }}
                    >

                        <Text style={{ color: '#fff', fontSize: 17 }}>
                            NEXT
                        </Text>

                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BusinessDetails;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    textInput: {
        width: '85%',
        // borderWidth:1,
        // borderColor: '#000',
        height: 50,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#000',
        // padding:10,

    },
    description: {
        width: '85%',
        // borderWidth:1,
        // borderColor: '#000',
        height: 95,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        color: '#000',
        padding: 10,

    },
    button: {
        backgroundColor: '#57B9BB',
        width: deviceWidth - 45,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

});
