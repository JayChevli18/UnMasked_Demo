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
import { PostDetailsScreen } from "../screens/PostDetailsScreen";
import { TouchableHighlight, Text, View } from "react-native";
import { Menu, MenuOption, MenuProvider, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OCIcon from "react-native-vector-icons/Octicons";
import AIcon from "react-native-vector-icons/AntDesign";

const Stack = createStackNavigator();


export const More_Navigation = () => {

    const EditPost = () => (
        <Menu style={{paddingRight:8}}>
            <MenuTrigger style={{ padding: 8 }}>
                <MCIcon name="dots-horizontal" size={35}></MCIcon>
            </MenuTrigger>
            <MenuOptions customStyles={{
                optionsContainer: {
                    marginTop: 48, // Adjust this value as needed to position the menu correctly
                    borderRadius: 8,
                    padding: 4,
                },

            }}>
                <MenuOption style={{ flexDirection: "row",  padding:8 }} >
                    <OCIcon name="pencil" size={20} style={{ marginRight: 20 }}></OCIcon>
                    <Text style={{ fontSize: 16 }}>Edit</Text>
                </MenuOption>
                <MenuOption style={{ flexDirection: "row",  padding:8 }}>
                    <AIcon name="delete" size={20} style={{ marginRight: 20 }}></AIcon>
                    <Text style={{ fontSize: 16 }}>Delete</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    )

    return (
        <MenuProvider>

            <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="More" component={MoreScreen} />
                <Stack.Screen name="Post Management" component={PostManagementScreen} />
                <Stack.Screen name="Chat" component={ChatMoreScreen} />
                <Stack.Screen name="Support" component={SupportMoreScreen} />
                <Stack.Screen name="Analytics" component={AnalyticsScreen} />
                <Stack.Screen name="Subscribers" component={SubscribersScreen} />
                <Stack.Screen name="Followers" component={FollowersScreen} />
                <Stack.Screen name="Post" component={PostDetailsScreen} options={{ headerRight: () => (<EditPost></EditPost>) }} />

            </Stack.Navigator>
        </MenuProvider>

    )
}