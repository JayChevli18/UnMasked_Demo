import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, View } from 'react-native';
import messaging from "@react-native-firebase/messaging";
import notifee, { AndroidImportance } from '@notifee/react-native';
import io from 'socket.io-client';


const socket = io('http://192.168.29.214:4000'); // Adjust the URL according to your server address

export const NotificationTest = () => {

    const [notifications, setNotifications] = useState([]);
    const [deviceToken, setDeviceToken] = useState("");

    useEffect(() => {
        requestUserPermission();

        fetchNotifications();

        getDeviceToken();

        socket.on('receiveNotification', (notification) => {
            console.log("claiing000", notification);
            setNotifications((prevNotifications) => [notification, ...prevNotifications]);
            console.log("claiing111", notification);
        });

//         const unsubscribe = messaging().onMessage(async remoteMessage => {
//             console.log("called222", remoteMessage.notification);
//             displayNotification(remoteMessage.notification);
// //            setNotifications((prevNotifications) => [remoteMessage.notification, ...prevNotifications]);
//             console.log("called333", remoteMessage.notification);
//         })

        return () => {
            socket.off('receiveNotification');
//            unsubscribe();
        };
    }, []);

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            console.log("Authorization Status:", authStatus);
        }
    }

    const getDeviceToken = async () => {
        const token = await messaging().getToken();
        setDeviceToken(token);
        console.log("token", token);
    }

    const fetchNotifications = async () => {
        try {
            const response = await fetch('http://192.168.29.214:4000/api/notifications'); // Adjust the URL according to your server address
            const data = await response.json();
            console.log("fec11", notifications);
            setNotifications(data);
            console.log("fec22", notifications);
        } catch (error) {
            console.error(error);
        }
    };

    // const displayNotification = async (notification) => {
    //     console.log("cal1", notification);
    //     await notifee.displayNotification({
    //         title: notification.title,
    //         body: notification.body,
    //         android: {
    //             channelId: 'default',
    //             importance: AndroidImportance.HIGH,
    //         },
    //     });
    // };

    const renderNotification = ({ item }) => {
        console.log("C!!!", item);
        console.log("TT", item.message);
        // if(!item.message)
        //     return null;
        return (
            <View style={styles.notificationContainer}>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.date}>{new Date(item.date).toLocaleString()}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderNotification}
                key={(item) => { console.log(item._id); item._id }}
            //keyExtractor={(item) => {console.log(item._id);item._id}}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    notificationContainer: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    message: {
        fontSize: 16,
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
});
