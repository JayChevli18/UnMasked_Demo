import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MoreScreen } from "../screens/MoreScreen";
import { PostManagementScreen } from "../screens/PostManagementScreen";
import { ChatMoreScreen } from "../screens/ChatMoreScreen";
import { SupportMoreScreen } from "../screens/SupportMoreScreen";
import { AnalyticsScreen } from "../screens/AnalyticsScreen";
import { SubscribersScreen } from "../screens/SubscribersScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { FollowersScreen } from "../screens/FollowersScreen";
const Stack = createStackNavigator();


export const More_Navigation=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="MoreScreen" component={MoreScreen}/>
            <Stack.Screen name="Post Management" component={PostManagementScreen}/>
            <Stack.Screen name="Chat" component={ChatMoreScreen}/>
            <Stack.Screen name="Support" component={SupportMoreScreen}/>
            <Stack.Screen name="Analytics" component={AnalyticsScreen}/>
            <Stack.Screen name="Subscribers" component={SubscribersScreen}/>
            <Stack.Screen name="Followers" component={FollowersScreen}/>
 
        </Stack.Navigator>
    )
}