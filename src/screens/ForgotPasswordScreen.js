import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, Modal, View, Image, Text, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "@react-native-community/blur";

export const ForgotPasswordScreen = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
            {modalVisible && (
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={1}                    
                    reducedTransparencyFallbackColor="red"
                />
            )}
            <View style={styles.topContainer}>
                <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
            </View>
            <View style={styles.middleContainer}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", textAlign: "center" }}>Check Your Email</Text>
                            <Text style={{ color: "black", marginTop: 30, alignSelf: "center", marginBottom: 15, width: 300, textAlign: "center" }}>We have sent instructions to recover your password to your email</Text>

                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 10, alignSelf: "center" }}>
                                <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center" }]} onPress={() => setModalVisible(!modalVisible)}>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 18 }}>Login Now</Text>
                                    </View>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                    </View>
                </Modal>

                <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 70 }}>Forgot Password</Text>
                <Text style={{ color: "black", marginTop: 40, marginBottom: 15, width: 300, textAlign: "center" }}>Enter your email to reset your password</Text>
                <TextInput style={[styles.textInput, { marginTop: 40, marginBottom: 10 }]} placeholder="Email" mode="outlined" placeholderTextColor="grey" outlineColor="grey" />
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 10 }}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center" }]} onPress={() => setModalVisible(true)}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>Reset Password</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>

            {!keyboardVisible && (
                <View style={styles.bottomContainer}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ width: 550, height: 330, borderRadius: 200, justifyContent: "center", left: -80, alignItems: "center", position: "absolute", bottom: -280 }}>
                    </LinearGradient>
                    <Text style={{ fontSize: 15, color: "black", marginTop: 40 }}>Already have an account?
                        <Text style={{ color: "blue" }}>   Sign In</Text>
                    </Text>
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: "center",
    },
    middleContainer: {
        flex: 7,
        alignItems: "center"
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    microImage: {
        alignItems: "flex-start",
        width: 50,
        height: 25,
        marginLeft: 30,
        marginTop: 30
    },
    textInput: {
        width: 300,
        backgroundColor: "white"
    },
    mediaicon: {
        borderRadius: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
