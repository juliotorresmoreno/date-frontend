
import { Text, View } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';

const Camera = () => {
    useEffect(function () {
        (async function () {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Permiso de la cámara',
                    'message': 'La aplicación necesita acceso a tu cámara' +
                        'para que pueda tomar fotos impresionantes.',
                    'buttonPositive': 'Please accept bare mortal'
                }
            );
            if (granted === 'granted') {

            }
        })();
    });
    const cameraRef = useRef(null);
    const takePicture = () => {
        console.log(cameraRef.current);
    }
    return (
        <View>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Camera;
