import React, { useState, useEffect } from "react";
import { StyleSheet, Keyboard, Text, View, Image, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Checkbox } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {useDispatch, useSelector} from "react-redux";
import { loginUser, signInWithGoogle } from "../store/authSlice";
import { auth } from "../firebase/firebase";
import { Navigation } from "../navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getAuth } from "firebase/auth";

export const LoginScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const auth=getAuth();

  const dispatch=useDispatch();
  const {loading , error}=useSelector((state)=>state.auth)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const validate = () => {
    let valid = true;

    if (!email) {
      setEmailError("Email ID is required");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };


  const handleLogin = () => {
    if (validate()) {
      dispatch(loginUser({auth,email,password}))
        .unwrap()
        .then((res)=>{
          console.log("----------------------",res);
          //AsyncStorage.setItem("userToken", JSON.stringify({email, password}))
        })
        .catch((err)=>{console.log(err)})
    }
  };


  const handleGoogleLogin=()=>{
    dispatch(signInWithGoogle()).then(()=>{console.log("okthen")}).catch((err)=>{console.log(err)});
  }

  const handleFacebookLogin=()=>{
    
  }

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
      <KeyboardAwareScrollView>
        <View style={styles.topContainer}>
          <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
        </View>

        <View style={styles.middleContainer}>
          <Text style={{ fontSize: 30, color: "black", fontWeight: "bold", marginTop: 100 }}>Log In</Text>

          <TextInput
            style={[styles.textInput, { marginTop: 40 }]}
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
            style={[styles.textInput, {marginTop:15}]}
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

          <View style={{ alignSelf: "flex-start", alignItems: "center", marginLeft: 38, flexDirection: "row", marginTop: 15 }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
            />
            <Text style={{ fontSize: 15, marginRight: 45 }}>Remember Me!</Text>
            <TouchableHighlight underlayColor="#e2e2e2" onPress={() => navigation.navigate("ForgotPasswordScreen")}>
              <Text style={{ fontSize: 15 }}>Forgot Password?</Text>
            </TouchableHighlight>
          </View>

          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={["#FBB4D1", "#BF9EF2"]}
            style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15 }}
          >
            <TouchableHighlight
              underlayColor="#BF9EF2"
              style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center" }]}
              onPress={handleLogin}
            >
              <View>
                <Text style={{ color: "white", fontSize: 18 }}>Log In</Text>
              </View>
            </TouchableHighlight>
          </LinearGradient>

          {!keyboardVisible && (
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: 300, marginTop: 30 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
                <View>
                  <Text style={{ width: 50, textAlign: 'center' }}>or</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: "center", gap: 20, alignItems: 'center', width: 300, marginTop: 10 }}>
                <TouchableHighlight style={styles.mediaicon} underlayColor="lightblue" onPress={handleFacebookLogin}>
                  <MaterialIcons name="facebook" size={35} color="#338bff" />
                </TouchableHighlight>
                <TouchableHighlight style={styles.mediaicon} underlayColor="#ffa08f" onPress={() => {handleGoogleLogin}}>
                  <FontAwesome name="google-plus-circle" size={35} color="#ff5638" />
                </TouchableHighlight>
                <TouchableHighlight style={styles.mediaicon} underlayColor="#ace8ff" onPress={() => { console.log("twitter") }}>
                  <Entypo name="twitter-with-circle" size={35} color="#1abeff" />
                </TouchableHighlight>
              </View>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
      {!keyboardVisible && (
        <View style={styles.bottomContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={["#FBB4D1", "#BF9EF2"]}
            style={{ width: 550, height: 330, borderRadius: 200, justifyContent: "center", left: -80, alignItems: "center", position: "absolute", bottom: -280 }}
          >
          </LinearGradient>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15, color: "black", marginTop: 65 }}>Don't have an account?</Text>
            <TouchableHighlight
              underlayColor="#fac3ff"
              style={{ marginLeft: 5, marginTop: 65, borderRadius: 10 }}
              onPress={handleLogin}
            >
              <Text style={{ color: "blue" }}> Create new one </Text>
            </TouchableHighlight>
          </View>
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
