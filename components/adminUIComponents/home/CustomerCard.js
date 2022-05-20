import { StyleSheet, Text, View,TouchableOpacity,Button } from 'react-native'
import React, {useState} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Modal from "react-native-modal";


const CustomerCard = (props) => {

    // const [isModalVisible, setModalVisible] = useState(false);

    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    // };

    return (
        <TouchableOpacity
            // onPress= {toggleModal}
            onPress={props.onPress}
        >
            <View style ={styles.container}>
                <View style ={{flexDirection:'column',width:'100%'}}>
                    <Text style = {{fontSize:17,fontWeight:'bold'}}>
                        {props.title}
                    </Text>

                    <View style ={{flexDirection:'row',justifyContent: 'space-between',marginRight:25,paddingLeft:8}}>
                        <Text>
                            {props.phone}
                        </Text>

                        <Text>
                            {props.email}
                        </Text>
                    </View>

                </View>
                <View style = {{alignItems: 'center',justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="greater-than" />
                </View>
            </View>

            {/* <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal> */}
        </TouchableOpacity>

        
            
    )
}

export default CustomerCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        height:70,
        width:'100%',
        flexDirection:'row',
        padding:15,
        justifyContent: 'space-between',
    },
})