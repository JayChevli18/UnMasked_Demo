import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';
import { Home_Navigation } from "./home_navigation";
import { ProfileScreen } from "../screens/ProfileScreen";
import { More_Navigation } from "./more_navigation";
import { OtherUserProfileScreen } from "../screens/OtherUserProfileScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AddNewPostScreen } from "../screens/AddNewPostScreen";
import { UploadPost_Navigation } from "./uploadpost_navigation";

const Tab = createMaterialBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={["#FBB4D1", "#BF9EF2"]}
      style={{ flex: 1,}}
    >
      <Tab.Navigator
        labeled={false}
        activeColor='white'
        activeIndicatorStyle={{ backgroundColor: "transparent" }}
        barStyle={{ backgroundColor: "transparent", alignItems:"center", justifyContent:"center", height:"7%" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "HomeScreenMain") {
              iconName = "home";
              size=27;
            } else if (route.name === "Search") {
              iconName = "search"; // Corrected icon name
              size=25;

            } else if (route.name === "Add") {
              iconName = "plus-circle"; // Corrected icon name
              size=29;

            }
             else if (route.name === "Chat") {
                size=25;

                iconName = "heart";
            }
            else if (route.name === "Profile") {
                size=25;

                iconName = "user-circle";
              }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeScreenMain" component={Home_Navigation} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={UploadPost_Navigation} />
        <Tab.Screen name="Chat" component={OtherUserProfileScreen} />
        <Tab.Screen name="Profile" component={More_Navigation} />
      </Tab.Navigator>
    </LinearGradient>
  );
};
