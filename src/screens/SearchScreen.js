import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-paper";

export const SearchScreen = () => {
    const stories = [
        { id: '1', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', subscribers: 240 },
        { id: '2', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', subscribers: 190 },
        { id: '3', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', subscribers: 160 },
        { id: '4', image: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Mutobo Kit', subscribers: 170 },
        { id: '5', image: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'James Perry', subscribers: 127 },
        { id: '6', image: "https://randomuser.me/api/portraits/women/3.jpg", name: 'Nairobi Wisdon', subscribers: 142 },
        { id: '7', image: "https://randomuser.me/api/portraits/men/9.jpg", name: 'Keth Sol', subscribers: 120 },
    ];

    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(stories);

    const handleSearch = (query) => {
        setSearch(query);
        const newData = stories.filter(item => {
            const itemData = item.name.toUpperCase();
            const queryData = query.toUpperCase();
            return itemData.indexOf(queryData) > -1;
        });
        setFilteredData(newData);
    };

    const Users = ({ item }) => (
        <View style={{  marginTop: 12 }}>
            <View style={{ alignItems: 'flex-start', justifyContent: "center", margin: 4 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.storyImage, { alignItems: "center", justifyContent: "center" }]}>
                        <Image source={{ uri: item.image }} style={styles.storyImage} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 4 }}>@{item.name} | Subscribers: {item.subscribers}K</Text>
                    </View>
                </View>
                <Divider style={{ marginTop: 10, backgroundColor: "black", width: "100%" }} />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Search</Text>
            <Searchbar
                style={{  marginBottom: 20, backgroundColor:"white" }}
                placeholder="Search"
                onChangeText={handleSearch}
                value={search}
                mode="view"
            />
            <FlatList
                data={filteredData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Users item={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
});
