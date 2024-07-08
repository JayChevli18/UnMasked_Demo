import React, { useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableHighlight, Image, ScrollView } from "react-native";
import { Divider } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

export const SendPrivatelyScreen = () => {
    const [selectedIds, setSelectedIds] = useState([]);

    const comment = [
        { id: '1', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', desc: "Nice one" },
        { id: '2', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', desc: "Great Effort Buddy!" },
        { id: '3', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', desc: "Great Going" },
        { id: '4', image: 'https://randomuser.me/api/portraits/men/26.jpg', name: 'Nicol Res', desc: "Good work" },
        { id: '5', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', desc: "Nice one" },
        { id: '6', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', desc: "Great Effort Buddy!" },
        { id: '7', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', desc: "Great Effort Buddy!" },
        { id: '8', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', desc: "Great Going" },
        { id: '9', image: 'https://randomuser.me/api/portraits/men/26.jpg', name: 'Nicol Res', desc: "Good work" },

    ];

    const handleSelection = (id) => {
        const newSelectedIds = selectedIds.includes(id)
            ? selectedIds.filter(selectedId => selectedId !== id)
            : [...selectedIds, id];

        setSelectedIds(newSelectedIds);
        console.log(newSelectedIds.map(selectedId => comment.find(item => item.id === selectedId)));
    };

    const Users = ({ item }) => (
        <View style={{ alignItems: 'flex-start', justifyContent: "space-between", margin: 4, marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
                    <View style={[styles.chatImage, { alignItems: "center", justifyContent: "center" }]}>
                        <Image source={{ uri: item.image }} style={styles.chatImage} />
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: "black" }}>{item.name}</Text>
                        <Text>{item.desc}</Text>
                    </View>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => handleSelection(item.id)}
                        style={[styles.highlight, selectedIds.includes(item.id) && styles.highlightSelected]}
                        underlayColor="transparent"
                    >
                        <View />
                    </TouchableHighlight>
                </View>
            </View>
            <Divider style={{ marginTop: 10, backgroundColor: "black", width: "100%" }} />
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
            <ScrollView>
                <FlatList
                    data={comment}
                    renderItem={({ item }) => <Users item={item} />}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    style={{marginBottom:48}}
                />
            </ScrollView>
                <View style={{ padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center' }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("send now") }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Send Now</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    highlight: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: "#FBB4D1",
        width: 24,
        height: 24,
    },
    highlightSelected: {
        backgroundColor: "#BF9EF2",
    },
});
