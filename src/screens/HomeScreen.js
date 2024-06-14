import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signOut } from "firebase/auth";
import  {auth } from "../firebase/firebase";
//import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";

export const HomeScreen1=({navigation})=>{

    const dispatch = useDispatch();

  const onLogout = () => {
    cls();
    dispatch(logoutUser());
  };
//     const onLogout = async () => {
//         try {
//             console.log("callllll",auth, await AsyncStorage.getItem("userToken"));
//             await AsyncStorage.removeItem('userToken');
//             await signOut(auth);
//             navigation.replace("Account");
// //            setUser(null);
//         } catch (error) {
//             console.error('Error logging out:', error);
//         }
//     };

    const cls=async()=>{
        const t=await AsyncStorage.getItem("userToken");
//        console.log(t);
    }
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
