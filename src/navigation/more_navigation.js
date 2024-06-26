import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MoreScreen } from "../screens/MoreScreen";
import { PostManagementScreen } from "../screens/PostManagementScreen";
import { ChatMoreScreen } from "../screens/ChatMoreScreen";
const Stack = createStackNavigator();


export const More_Navigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="More" component={MoreScreen}/>
            <Stack.Screen name="Post Management" component={PostManagementScreen}/>
            <Stack.Screen name="Chat" component={ChatMoreScreen}/>
        </Stack.Navigator>
    )
}