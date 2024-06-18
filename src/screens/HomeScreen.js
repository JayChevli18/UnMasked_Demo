import React from "react";
import { View, Text, TouchableHighlight, SafeAreaView, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/MaterialIcons";

export const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutUser());
    };
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
            <KeyboardAwareScrollView>
                <View style={[styles.topContainer, {flexDirection:"row"}]}>
                    <Image source={require('../../assets/Frame.png')}  style={[styles.microImage,{marginRight:200}]} />
                    <Icon name="notifications-none" size={30} style={[styles.microImage,{alignItems:"flex-end"}]}></Icon>
                </View>

                <TouchableHighlight onPress={onLogout}>
                    <View style={{ padding: 100 }}>
                        <Text>ok</Text>
                    </View>

                </TouchableHighlight>
            </KeyboardAwareScrollView>
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
    //  alignItems: "flex-start",
      width: 50,
      height: 28,
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
      width: 300,
      marginLeft: 45,
      marginBottom: 5,
    },
  });
  