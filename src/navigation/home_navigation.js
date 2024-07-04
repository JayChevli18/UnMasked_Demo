import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PaymentScreen } from "../screens/PaymentScreen";
import { ExtraScreen } from "../screens/ExtraScreen";
import { MoreScreen } from "../screens/MoreScreen";
import { More_Navigation } from "./more_navigation";
import { NotificationScreen } from "../screens/NotificationScreen";
import { YourStoryScreen } from "../screens/YourStoryScreen";
import { Text, TouchableHighlight, View } from "react-native";
import EIcon from "react-native-vector-icons/Entypo";

const Stack = createStackNavigator();

export const Home_Navigation = () => {

    const Notification = () => (
        <TouchableHighlight onPress={() => { console.log("read") }} style={{ padding: 20 }} underlayColor="lightgrey">
            <Text>Mark all as read</Text>
        </TouchableHighlight>
    )

    const Cancel = ({ onPress }) => (
        <TouchableHighlight onPress={onPress} style={{ padding: 10 }} underlayColor="lightgrey">
            <EIcon name="cross" size={30} color="white"></EIcon>
        </TouchableHighlight>
    )

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
            <Stack.Screen name="ExtraScreen" component={ExtraScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{ headerShown: true, headerRight: () => (<Notification></Notification>) }} />
            <Stack.Screen name="YourStory" component={YourStoryScreen} options={({ route }) => ({
                headerShown: true,
                headerTitleAlign: "center",
                headerTitle: "Add Story",
                headerTransparent: true,
                headerTitleStyle: { color: "white" },
                headerTintColor: "white",
                headerRight: () => (<Cancel onPress={route.params?.handleCancel} />)
            })}></Stack.Screen>
            {/* <Stack.Screen name="MoreScreen" component={More_Navigation} /> */}
        </Stack.Navigator>
    )
}
