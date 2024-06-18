import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { AccountNavigation } from "./account_navigation";
import { AppNavigation } from "./app_navigation";
import { auth } from '../firebase/firebase';
import { setUser, clearUser } from '../store/authSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";
import authfirebase from "@react-native-firebase/auth";
import { ActivityIndicator } from "react-native-paper";



export const Navigation = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    console.log("userrrr", user);
    const [isLoading, setIsLoading] = useState(false);


    // useEffect(() => {
    //     const checkLoginStatus = async () => {
    //         const userToken = await AsyncStorage.getItem("userToken");
    //         if (userToken) {
    //             // User token exists, dispatch setUser action
    //             dispatch(setUser(JSON.parse(userToken)));
    //         } else {
    //             console.log("checklloginstatue");
    //             // User token doesn't exist, dispatch clearUser action
    //             dispatch(clearUser());
    //         }
    //     };
    //     checkLoginStatus();

    //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //         if (authUser) {
    //             // Firebase auth user exists, dispatch setUser action
    //             dispatch(setUser(authUser.toJSON()));
    //         } else {
    //             console.log("unsubscribeelse");
    //             // Firebase auth user doesn't exist, dispatch clearUser action
    //             dispatch(clearUser());
    //         }
    //     });

    //     return () => unsubscribe();
    // }, [dispatch]);


    useEffect(() => {

        if(isLoading){
            console.log("goinf");
            return <>
                <ActivityIndicator>

                </ActivityIndicator>
            </>
        }
        else
        {
            console.log("down");
            setIsLoading(false);
        }

        const checkLoginStatus = async () => {
            const userToken = await AsyncStorage.getItem("userToken");
            console.log(userToken, "index");
            console.log("LLLLLL",authfirebase().currentUser)
            if (userToken) {
                dispatch(setUser(JSON.parse(userToken)));
            } else {
                dispatch(clearUser());
            }
        };
        checkLoginStatus();

        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log("coas");
                dispatch(setUser(authUser.toJSON()));
            } else {
                console.log("wwww");
                dispatch(clearUser());
            }
        });

        return unsubscribe;
    }, [dispatch]);


    return (
        <NavigationContainer>
            {
                user ?
                    <AppNavigation />
                    :
                    <AccountNavigation />
            }
        </NavigationContainer>
    );
};

export default Navigation;


