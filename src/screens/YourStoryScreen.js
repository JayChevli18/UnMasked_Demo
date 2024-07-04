import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, TouchableHighlight, Text, Image } from "react-native";
import { Camera, useCameraDevice, useCameraPermission, takePhoto } from "react-native-vision-camera";
import LinearGradient from "react-native-linear-gradient";

export const YourStoryScreen = ({ navigation }) => {
    const device = useCameraDevice('back');
    const { hasPermission } = useCameraPermission();
    const [camera, setCamera] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    useEffect(() => {
        async function getPermission() {
            const permission = await Camera.requestCameraPermission();
            console.log(`Camera permission status: ${permission}`);
            if (permission === 'denied') await Linking.openSettings();
        }
        getPermission();
    }, []);

    const handleCapturePhoto = async () => {
        if (camera) {
            try {
                const photo = await camera.takePhoto();
                console.log("Photo captured: ", photo);
                setCapturedPhoto(photo.path); // Store the captured photo in state
                console.log(photo.path);
            } catch (error) {
                console.error("Failed to capture photo: ", error);
            }
        }
    };

    const handleCancel = () => {
        setCapturedPhoto(null); // Reset the captured photo state
    };

    useEffect(() => {
        navigation.setParams({ handleCancel });
    }, [navigation]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {device != null && hasPermission && (
                <View style={{ flex: 1 }}>
                    {!capturedPhoto && (
                        <Camera
                            ref={setCamera}
                            style={StyleSheet.absoluteFill}
                            device={device}
                            isActive={true}
                            photo={true}
                        />
                    )}
                    {capturedPhoto && ( // Render the captured photo if available
                        <View style={StyleSheet.absoluteFill}>
                            <Image
                                source={{ uri: `file://${capturedPhoto}` }}
                                style={StyleSheet.absoluteFill}
                                resizeMode="cover"
                            />
                        </View>
                    )}
                </View>
            )}
            {!capturedPhoto && ( // Render camera view if no photo has been captured
                <View style={{ padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center' }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={handleCapturePhoto}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Add To Story</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        padding: 20,
    },
    camButton: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: '#B2BEB5',
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: 'white',
    },
});
