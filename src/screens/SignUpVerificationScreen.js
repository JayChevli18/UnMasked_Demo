import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, KeyboardAvoidingView, Platform, Text, View, Image, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SignUpVerificationScreen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [codeError, setCodeError] = useState("");

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

        // cleanup function
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const validate = () => {
        let valid = true;

        if (!verificationCode) {
            setCodeError("Verification code is required");
            valid = false;
        } else {
            setCodeError("");
        }

        return valid;
    };

    const handleCreateAccount = () => {
        if (validate()) {
            console.log("Verification code is valid");
            // Handle create account logic
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
            <KeyboardAwareScrollView>
                <View style={styles.topContainer}>
                    <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
                </View>
                <View style={styles.middleContainer}>
                    <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 100 }}>Sign Up</Text>

                    <Text style={{ color: "black", marginTop: 40,  width: 300, textAlign: "center" }}>We have sent a 6 digit verification code to your email</Text>

                    <TextInput
                        style={[styles.textInput, { marginTop: 40, marginTop: 30 }]}
                        placeholder="Verification Code"
                        mode="outlined"
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        value={verificationCode}
                        onChangeText={setVerificationCode}
                        error={!!codeError}
                    />
                    {codeError ? <Text style={styles.errorText}>{codeError}</Text> : null}

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 30 }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center" }]} onPress={handleCreateAccount}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Create Account</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                    <View style={{flexDirection:"row",  justifyContent:"center", marginTop: 15, width: 300,}}>
                    <Text style={{ color: "black"}}>Didn't receive code? </Text>
                    <TouchableHighlight underlayColor="lightgrey"  onPress={()=>{console.log("called")}}>
                    <Text style={{ fontWeight: "bold", color:"black" }}> Resend </Text>                
                    </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            {!keyboardVisible && (
                <View style={styles.bottomContainer}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ width: 550, height: 330, borderRadius: 200, justifyContent: "center", left: -80, alignItems: "center", position: "absolute", bottom: -280 }}>
                    </LinearGradient>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 110 }}>Already have an account?</Text>
                        <TouchableHighlight underlayColor="#fac3ff" style={{ marginLeft: 5, marginTop: 110, borderRadius: 10 }} onPress={() => navigation.navigate("LoginScreen")}>
                            <Text style={{ color: "blue" }}> Sign In </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
}

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
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 15,
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
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: 45,
        marginBottom: 5,
    },
});
