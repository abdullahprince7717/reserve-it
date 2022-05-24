import React, { useState, useEffect } from 'react';
import { Image, View,Text } from 'react-native';
import {Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 6],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const deleteImage = () => {
        setImage(null);
    }

    return (

        <View style={{ flex: 1,flexDirection: "column" ,alignItems: 'center', justifyContent: 'center', }}>
            
            <View style = {{flexDirection: "row",margin:10}}>
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100,borderRadius:13 }} />}

                <View style = {{justifyContent: 'center',margin:10}}>
                    {image && 
                    <Button icon="delete" mode="outlined" color = 'red' onPress={deleteImage} />}
                </View>
                    
            </View>

            <View style = {{margin:15,marginBottom:20}}>
                <Button icon="camera" mode="outlined" color = '#57B9BB' onPress={pickImage}>
                        {image ? <Text>Reselect the picture</Text> :<Text>Select a Picture from Gallery</Text>}
                </Button>
            </View>
                
        </View>
    );
}