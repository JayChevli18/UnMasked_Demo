import React from "react";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from "react-native";
import { Icon } from "@rneui/themed";
import { Divider } from "react-native-paper";

export const MoreScreen = () => {
    const data = [
        { id: '1', title: 'Analytics', icon: 'analytics', type: 'material' },
        { id: '2', title: 'Content Management', icon: 'content-save-edit-outline', type: 'material-community' },
        { id: '3', title: 'Post Management', icon: 'image-edit-outline', type: 'material-community' },
        { id: '4', title: 'Chat', icon: 'chatbubbles-outline', type: 'ionicon' },
        { id: '5', title: 'Content Type', icon: 'view-dashboard-outline', type: 'material-community' },
        { id: '6', title: 'Transaction History', icon: 'history', type: 'material-community' },
        { id: '7', title: 'Subscription price', icon: 'tag-multiple-outline', type: 'material-community' },
        { id: '8', title: 'Support', icon: 'question', type: 'simple-line-icon' },
    ];
    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableHighlight>
                        <View style={{ backgroundColor: "white", flexDirection: 'row', padding: 20, borderBottomWidth: 2, borderBottomColor: '#e2e2e2', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Icon name={item.icon} type={item.type} color="#BF9EF2" size={30} />
                                <Text style={{ fontSize: 16, marginLeft: 20 }}>{item.title}</Text>
                            </View>
                            <Icon name="chevron-forward-sharp" type="ionicon" size={30} />
                        </View>
                    </TouchableHighlight>
                )}
            >

            </FlatList>
        </SafeAreaView>
    )
}
