import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, KeyboardAvoidingView, Platform, Text, View, Image, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Checkbox, Icon, IconButton } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SignUpScreen = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const [secureText, setSecureText] = useState(true);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

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

    return (

        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
            <View style={styles.topContainer}>
                <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
            </View>
            <KeyboardAwareScrollView>
                <View style={styles.middleContainer}>
                    <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 70 }}>Sign Up</Text>
                    <TextInput style={[styles.textInput, { marginTop: 40, marginBottom: 15 }]} placeholder="Enter User Name" mode="outlined" placeholderTextColor="grey" outlineColor="grey"></TextInput>
                    <TextInput style={[styles.textInput, { marginBottom: 15 }]} placeholder="Enter Email ID" mode="outlined" returnKeyType="google" textContentType="emailAddress" placeholderTextColor="grey" outlineColor="grey"></TextInput>
                    <TextInput
                        style={[styles.textInput, { marginBottom: 15 }]}
                        placeholder="Enter Password"
                        mode="outlined"
                        secureTextEntry={secureText}
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        right={
                            <TextInput.Icon
                                icon={secureText ? "eye-off" : "eye"}
                                color="grey"
                                onPress={() => setSecureText(!secureText)}
                            />
                        }
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        mode="outlined"
                        secureTextEntry={secureText}
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        right={
                            <TextInput.Icon
                                icon={secureText ? "eye-off" : "eye"}
                                color="grey"
                                onPress={() => setSecureText(!secureText)}
                            />
                        }
                    />

                    <View style={{ alignSelf: "flex-start", alignItems: "center", marginLeft: 38, flexDirection: "row", marginTop: 10 }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <Text style={{ fontSize: 13, marginTop: 8, marginRight: 75 }}>By Signing up you accept the Terms of service and Privacy Policy</Text>
                    </View>

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 30 }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center", }]} onPress={()=>navigation.navigate("SignUpVerificationScreen")}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Sign Up</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>

                </View>
            </KeyboardAwareScrollView>

            {!keyboardVisible && (
                <View style={styles.bottomContainer}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ width: 550, height: 330, borderRadius: 200, justifyContent: "center", left: -80, alignItems: "center", position: "absolute", bottom: -280 }}>
                    </LinearGradient>

                    <View style={{flexDirection:"row"}}>
                    <Text style={{ fontSize: 15, color: "black", marginTop: 40 }} >Already have an account?</Text>
                    <TouchableHighlight underlayColor="#c6e1ff" style={{marginLeft:5,marginTop: 40}} onPress={()=>navigation.navigate("LoginScreen")}>
                        <Text style={{ color: "blue"}}> Sign In </Text>
                    </TouchableHighlight>
                    </View>
                </View>
            )}

        </SafeAreaView>

    )
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    microImage: {
        alignItems: "flex-start",
        width: 50,
        height: 25,
        marginLeft: 30,
        marginTop:30
    },
    textInput: {
        width: 300,
        backgroundColor: "white"
    },
    mediaicon: {
        borderRadius: 5
    }
})
