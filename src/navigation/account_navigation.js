import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screens/StartScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { SignUpVerificationScreen } from "../screens/SignUpVerificationScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen";
import { AppNavigation } from "./app_navigation";

const Stack = createStackNavigator();

export const AccountNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SignUpVerificationScreen" component={SignUpVerificationScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            {/* <Stack.Screen name="Home" component={AppNavigation}></Stack.Screen> */}
        </Stack.Navigator>
    );
};
