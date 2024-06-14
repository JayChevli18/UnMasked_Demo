import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { AccountNavigation } from "./account_navigation";
import { AppNavigation } from "./app_navigation";
import { auth } from '../firebase/firebase';
import { setUser, clearUser } from '../store/authSlice';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Navigation = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

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
        const checkLoginStatus = async () => {
            const userToken = await AsyncStorage.getItem("userToken");
            console.log(userToken);
            if (userToken) {
                dispatch(setUser(JSON.parse(userToken)));
            } else {
                dispatch(clearUser());
            }
        };
        checkLoginStatus();

        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUser(authUser.toJSON()));
            } else {
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


