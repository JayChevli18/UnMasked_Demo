import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, Text, View, Image, TouchableHighlight, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Checkbox } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { registerUser } from "../store/authSlice";
import { auth } from "../firebase/firebase";

export const SignUpScreen = ({ navigation }) => {

    const [checked, setChecked] = useState(false);
    const [secureText, setSecureText] = useState(true);
    const [cnfsecureText, cnfsetSecureText] = useState(true);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userNameError, setUserNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [checkedError, setCheckedError]=useState("");

    const dispatch=useDispatch();

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

    const validate = () => {
        let valid = true;

        if (!userName) {
            setUserNameError("User Name is required");
            valid = false;
        } else {
            setUserNameError("");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError("Email ID is required");
            valid = false;
        } 
        else if(!emailRegex.test(email)){
            setEmailError("Invalid Email ID!");
        }
        else {
            setEmailError("");
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,}$/;
        if (!password) {
            setPasswordError("Password is required");
            valid = false;
        } 
        else if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
            valid = false;
        }      
        else {
            setPasswordError("");
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm Password is required");
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            valid = false;
        } else {
            setConfirmPasswordError("");
        }

        if(!checked){
            setCheckedError("Please accept the terms and conditions!");
//            Alert.alert("");
            valid=false;
        }
        else
        {
            setCheckedError("");
            setChecked(false);
        }
        return valid;
    };

    const handleSignUp = async() => {
        if (validate()) 
        {
            try{
            await dispatch(registerUser({auth,email,password}))
                .unwrap()
                .then((res)=>{
                  console.log("R----------------------",res);
                  //AsyncStorage.setItem("userToken", JSON.stringify({email, password}))                  
                })
                .catch((err)=>{
                    console.log("Cc",err);
                    throw err;
                    //Alert.alert("User Already Registered!", err);
                });
                console.log("sssswwwwwwwwwwww");
                navigation.navigate("SignUpVerificationScreen");
            }
            catch(error)
            {
                console.log("qqqqqqqqq");
                Alert.alert("User Already Registered!");
            }
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
                    <TextInput
                        style={[styles.textInput, { marginTop: 40 }]}
                        placeholder="Enter User Name"
                        mode="outlined"
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        value={userName}
                        onChangeText={setUserName}
                        error={!!userNameError}
                    />
                    {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}

                    <TextInput
                        style={[styles.textInput, { marginTop: 15 }]}
                        placeholder="Enter Email ID"
                        mode="outlined"
                        returnKeyType="google"
                        textContentType="emailAddress"
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        value={email}
                        onChangeText={setEmail}
                        error={!!emailError}
                    />
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                    <TextInput
                        style={[styles.textInput, { marginTop: 15 }]}
                        placeholder="Enter Password"
                        mode="outlined"
                        secureTextEntry={secureText}
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        value={password}
                        onChangeText={setPassword}
                        error={!!passwordError}
                        right={
                            <TextInput.Icon
                                icon={secureText ? "eye-off" : "eye"}
                                color="grey"
                                onPress={() => setSecureText(!secureText)}
                            />
                        }
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                    <TextInput
                        style={[styles.textInput, { marginTop: 15 }]}
                        placeholder="Confirm Password"
                        mode="outlined"
                        secureTextEntry={cnfsecureText}
                        placeholderTextColor="grey"
                        outlineColor="grey"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        error={!!confirmPasswordError}
                        right={
                            <TextInput.Icon
                                icon={cnfsecureText ? "eye-off" : "eye"}
                                color="grey"
                                onPress={() => cnfsetSecureText(!cnfsecureText)}
                            />
                        }
                    />
                    {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}

                    <View style={{ alignSelf: "flex-start", alignItems: "center", marginLeft: 38, flexDirection: "row", marginTop: 10 }}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", marginRight: 65, marginTop: 10 }}>
                            <Text style={{ fontSize: 13 }}>By Signing up you accept the </Text>
                            <TouchableHighlight underlayColor="lightgrey" onPress={() => { console.log("TMS") }}>
                                <Text style={{ fontSize: 13, color: "blue" }}>Terms of service</Text>
                            </TouchableHighlight>
                            <Text style={{ fontSize: 13 }}> and </Text>
                            <TouchableHighlight underlayColor="lightgrey" onPress={() => { console.log("PP") }}>
                                <Text style={{ fontSize: 13, color: "blue" }}>Privacy Policy</Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    {checkedError ? <Text style={styles.errorText}>{checkedError}</Text> : null}


                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 30 }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center", }]} onPress={handleSignUp}>
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

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 45 }}>Already have an account?</Text>
                        <TouchableHighlight underlayColor="#fac3ff" style={{ marginLeft: 5, marginTop: 45, borderRadius: 10 }} onPress={() => navigation.navigate("LoginScreen")}>
                            <Text style={{ color: "blue" }}> Sign In </Text>
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
    errorText: {
        color: 'red',
        alignSelf: 'flex-start',
        marginLeft: 45,
        marginBottom: 0,
    },
});
