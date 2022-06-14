import React , {useState,useEffect} from 'react'
import { StyleSheet, Text, View, TextInput,Dimensions,TouchableOpacity,StatusBar,ScrollView,Alert } from 'react-native';
import { FontAwesome,MaterialCommunityIcons,Feather,Ionicons,MaterialIcons,AntDesign } from "@expo/vector-icons/"

const BusinessProfile = (props) => {

    // useEffect(() => {
    //     console.log(props.route?.params?.data)
    // },[])
    const [userData,setUserData] = useState()
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [category, setCategory] = useState('');
    const [businessPhone, setBusinessPhone] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');

    const deleteAlert = () =>
    Alert.alert(
        "Do you want to Delete this Business?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => {
                    console.log("Cancel Pressed")
                    
                },
                style: "cancel"
            },
            {   
                text: "Delete",
                onPress: () => {
                    console.log("Delete Pressed")
                    props.navigation.pop()
                } 
            }

        
        ]
    );

    const blockAlert = () =>
    Alert.alert(
        "Do you want to Block this Business?",
        "",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {   
                text: "Block",
                onPress: () => {
                    console.log("Block Pressed")
                    props.navigation.pop()
                } 
            }

        
        ]
    );

    return (
        <View style = {styles.container}>
            <ScrollView>
            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,}}>
                Personal Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <FontAwesome color="#000" name="user-o" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Full Name"
                    value= {name}
                    onChangeText={(value) =>setName(value)} 
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#000" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Email"
                    value= {email}
                    onChangeText={(value) =>setEmail(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#000" name="phone" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Phone Number"
                    value= {phone}
                    onChangeText={(value) =>setPhone(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
        

            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,marginTop: 20}}>
                Business Details
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <Ionicons color="#000" name="business" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Name"
                    value= {businessName}
                    onChangeText={(value) =>setBusinessName(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#000" name="email-outline" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Email"
                    value= {businessEmail}
                    onChangeText={(value) =>setBusinessEmail(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <MaterialCommunityIcons color="#000" name="map-marker-outline" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Address"
                    value= {businessAddress}
                    onChangeText={(value) =>setBusinessAddress(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="#000" name="phone" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Business Description "
                    value= {businessDescription}
                    onChangeText={(value) =>setBusinessDescription(value)}
                    placeholderTextColor= {"grey"}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    style={styles.description}

                />
            </View>



            <Text style = {{fontSize: 20, fontWeight:'bold', margin: 10,marginTop: 20}}>
                Social Media
            </Text>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginTop: -15}}>
                <Feather color="red" name="instagram" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Instagram"
                    value= {instagram}
                    onChangeText={(value) =>setInstagram(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>
            <View style = {{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                <Feather color="blue" name="facebook" size={23} style ={{margin:10, marginTop: 25, }} /> 
                <TextInput
                    placeholder="Facebook"
                    value= {facebook}
                    onChangeText={(value) =>setFacebook(value)}
                    placeholderTextColor= {"grey"}
                    style={styles.textInput}
                />
            </View>      
            </ScrollView>
            
            <View style = {{flexDirection: 'row',justifyContent: 'space-evenly',marginVertical : 20,marginHorizontal : 10}}>

                <TouchableOpacity 
                    style = {styles.delButton}
                    onPress = {() =>{
                        console.log("Pressed Delete")
                        deleteAlert();
                        
                    }}
                >
                <AntDesign color="red" name="delete" size={23} style ={{}} />
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}
                    onPress = {() =>{
                        console.log("Pressed SAVE")
                        props.navigation.pop()
                    }}
                >
                    <Text style ={{ color: '#fff', fontSize: 17}}>
                        SAVE
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.blockButton}
                    onPress = {() =>{
                        console.log("Pressed Block")
                        blockAlert();
                        
                    }}
                >
                    <MaterialIcons color="red" name="block" size={23} style ={{}} />
                </TouchableOpacity>

            </View>       
        </View>
    );
};

export default BusinessProfile;

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    textInput:{  
        width: '80%',
        borderWidth:1,
        borderColor: '#000',
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
        padding:10,
    
    },
    description:{  
        width: '80%',
        borderWidth:1,
        borderColor: '#000',
        height: 95,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop:20,
        color : '#000',
        padding:10,
    
    },
    button: {
        backgroundColor: '#000',
        width: '70%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal : 10        

    },
    delButton: {
        backgroundColor: '#000',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },
    blockButton: {
        backgroundColor: '#000',
        width: '15%',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',        

    },

});
