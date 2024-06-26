import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PaymentScreen } from "../screens/PaymentScreen";
import { ExtraScreen } from "../screens/ExtraScreen";
import { MoreScreen } from "../screens/MoreScreen";
import { More_Navigation } from "./more_navigation";
const Stack = createStackNavigator();

export const Home_Navigation=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="ExtraScreen" component={ExtraScreen} />
            <Stack.Screen name="MoreScreen" component={More_Navigation} />
        </Stack.Navigator>
    )
}