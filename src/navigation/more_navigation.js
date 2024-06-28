import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MoreScreen } from "../screens/MoreScreen";
import { PostManagementScreen } from "../screens/PostManagementScreen";
import { ChatMoreScreen } from "../screens/ChatMoreScreen";
import { SupportMoreScreen } from "../screens/SupportMoreScreen";
import { AnalyticsScreen } from "../screens/AnalyticsScreen";
const Stack = createStackNavigator();


export const More_Navigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="More" component={MoreScreen}/>
            <Stack.Screen name="Post Management" component={PostManagementScreen}/>
            <Stack.Screen name="Chat" component={ChatMoreScreen}/>
            <Stack.Screen name="Support" component={SupportMoreScreen}/>
            <Stack.Screen name="Analytics" component={AnalyticsScreen}/>
        </Stack.Navigator>
    )
}