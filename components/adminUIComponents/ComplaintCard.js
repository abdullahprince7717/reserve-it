import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const ComplaintCard = (props) => {
    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'column', marginBottom: 4 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4}}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ fontWeight: 'bold', }}>
                            Complaint From:
                        </Text>
                        <Text style={{ marginLeft: 5 }}>
                            sdsdf
                        </Text>

                    </View>

                    <Text> Time</Text>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Complaint Against:
                    </Text>
                    <Text style={{ marginLeft: 5 }}>
                        dcsdcd
                    </Text>

                </View>
                <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                    <Text style={{ fontWeight: 'bold', }}>
                        Complaint Reason:
                    </Text>
                    <Text style={{ marginLeft: 5 }}>
                        dcsdcd
                    </Text>
                </View>

                {/* <Button mode = "outlined" onPress={()=>{}} color = "blue">delete</Button> */}

            </View>
        </View>

    )
}

export default ComplaintCard

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        margin: 7,
        padding:10
    },

})