import { Text,View } from "react-native";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StartScreen } from "../screens/StartScreen";
import {LoginScreen} from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { SignUpVerificationScreen } from "../screens/SignUpVerificationScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";

export const AccountNavigation=()=>{
    const Stack=createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="StartScreen" component={StartScreen}></Stack.Screen>
                <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
                <Stack.Screen name="SignUpScreen" component={SignUpScreen}></Stack.Screen>
                <Stack.Screen name="SignUpVerificationScreen" component={SignUpVerificationScreen}></Stack.Screen>
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
