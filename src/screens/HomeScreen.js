import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
//import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
//import { Profile } from "react-native-fbsdk-next";

export const HomeScreen1=({navigation})=>{

    const dispatch = useDispatch();

    const onLogout = () => {
//    cls();
    dispatch(logoutUser());
  };

//     const cls=async()=>{
//         const t=await AsyncStorage.getItem("userToken");
// //        console.log(t);
//     }


    return(
        <View>
            <TouchableHighlight onPress={onLogout}>
                <View style={{padding:100}}>
                    <Text>ok</Text>
                </View>
                
            </TouchableHighlight>
        </View>
    )
}
