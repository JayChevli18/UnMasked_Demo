import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export const NotificationScreen = () => {

    const notifications = [
        {
            id: '1', 
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            notification: "James Courtney liked your photo",
            time: "13h ago"
        },
        {
            id: '2', 
            image: "https://randomuser.me/api/portraits/men/2.jpg",
            notification: "James Courtney and 12 others liked your photo",
            time: "13h ago"
        },
        {
            id: '3', 
            image: "https://randomuser.me/api/portraits/women/3.jpg",
            notification: "James Courtney followed you",
            time: "12h ago"
        },
        {
            id: '4', 
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            notification: "James Courtney subscribed to you",
            time: "13h ago"
        },
        {
            id: '5', 
            image: "https://randomuser.me/api/portraits/women/18.jpg",
            notification: "James Courtney purchased your All Gaming setup bundle for $9.99",
            time: "13h ago"
        },
        {
            id: '6', 
            image: "https://randomuser.me/api/portraits/women/16.jpg",
            notification: "James Courtney liked your photo",
            time: "12h ago"
        },
        {
            id: '7', 
            image: "https://randomuser.me/api/portraits/men/8.jpg",
            notification: "James Courtney liked your photo",
            time: "12h ago"
        },
        {
            id: '8', 
            image: "https://randomuser.me/api/portraits/men/19.jpg",
            notification: "James Courtney subscribed to you",
            time: "13h ago"
        },
        {
            id: '9', 
            image: "https://randomuser.me/api/portraits/women/20.jpg",
            notification: "James Courtney subscribed to you",
            time: "13h ago"
        },
        {
            id: '10', 
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            notification: "James Courtney subscribed to you",
            time: "13h ago"
        }
    ]

    const stories = [
        { id: '1', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', subscribers: 240 },
        { id: '2', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', subscribers: 190 },
        { id: '3', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', subscribers: 160 },
        { id: '4', image: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Mutobo Kit', subscribers: 170 },
        { id: '5', image: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'James Perry', subscribers: 127 },
        { id: '6', image: "https://randomuser.me/api/portraits/women/3.jpg", name: 'Nairobi Wisdon', subscribers: 142 },
        { id: '7', image: "https://randomuser.me/api/portraits/men/9.jpg", name: 'Keth Sol', subscribers: 120 },
    ];

    const Users = ({ item }) => (
        <View style={{ marginLeft: 20, marginRight: 20, marginTop: 12}}>
            <View style={{ alignItems: 'flex-start', justifyContent: "center", margin: 4, }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <View style={[styles.storyImage, { alignItems: "center", justifyContent: "center", }]}>
                        <Image source={{ uri: item.image }} style={styles.storyImage} />
                    </View>
                    <View style={{ marginLeft: 20, marginRight:20}}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", marginRight:20, }}>{item.notification}</Text>
                        <Text style={{ fontSize: 12, marginTop: 4 }}>{item.time}</Text>
                    </View>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: "black", width: "100%" }} ></Divider>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                style={{ marginTop: 5 }}
                data={notifications}
                renderItem={({ item }) => <Users item={item}></Users>}
            >

            </FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        padding: 3, // Padding between image and border
        borderRadius: 60,
        borderColor: '#97979794', // Instagram-like border color
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
})
