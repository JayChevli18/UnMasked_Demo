import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen1 } from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountNavigation } from "./account_navigation";

const Stack = createStackNavigator();

//const Tab=createBottomTabNavigator();
export const AppNavigation = () => {

    return (
        // <NavigationContainer>
        // <Tab.Navigator>
        //     <Tab.Screen name="HomeScreen1" component={HomeScreen1}></Tab.Screen>
        // </Tab.Navigator>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen1" component={HomeScreen1}></Stack.Screen>
                {/* <Stack.Screen name="Account" component={AccountNavigation}></Stack.Screen> */}
            </Stack.Navigator>
        // </NavigationContainer>
    )
}