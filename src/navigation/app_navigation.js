import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={["#FBB4D1", "#BF9EF2"]}
      style={{ flex: 1,}}
    >
      <Tab.Navigator
        activeColor='white'
        activeIndicatorStyle={{ backgroundColor: "transparent" }}
        barStyle={{ backgroundColor: "transparent", height: "8%" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "HomeScreen") {
              iconName = "home";
              size=25;
            } else if (route.name === "Search") {
              iconName = "search"; // Corrected icon name
              size=25;

            } else if (route.name === "Chat") {
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
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </LinearGradient>
  );
};
