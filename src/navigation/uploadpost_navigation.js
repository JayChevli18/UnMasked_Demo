import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AddNewPostScreen } from "../screens/AddNewPostScreen";
import { AddNewPostDetailsScreen } from "../screens/AddNewPostDetailsScreen";
import { SendPrivatelyScreen } from "../screens/SendPrivatelyScreen";

const Stack = createStackNavigator();

export const UploadPost_Navigation=({navigation})=>{
    return(
        <Stack.Navigator screenOptions={{headerTitleAlign:"center"}}>
            <Stack.Screen name="New Post" component={AddNewPostScreen}></Stack.Screen>
            <Stack.Screen name="Upload Post" component={AddNewPostDetailsScreen}></Stack.Screen>
            <Stack.Screen name="Choose to send" component={SendPrivatelyScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}
