import React from "react";
import { SafeAreaView, SectionList, TouchableHighlight, FlatList, StyleSheet, StatusBar, Text, View, Dimensions, Image, ScrollView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { BlurView } from "@react-native-community/blur";

const DATA = [
    {
        title: 'Live Posts',
        data: [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
        ],
    },
    {
        title: 'Scheduled Posts',
        data: [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',

        ],
    },

];


export const PostManagementScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const itemSize = (windowWidth - 6) / 3; // Calculate item size based on screen width

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <View style={{ flex: 1, padding: 3 }}>
                    <FlatList
                        data={DATA[0].data} // Assuming posts is passed as a prop
                        ListHeaderComponent={<View style={{ padding: 15 }}><Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>Live Posts</Text></View>}
                        renderItem={({ item }) => (
                            <View style={{ width: itemSize, height: itemSize, margin: 1 }}>
                                <Image
                                    source={{ uri: item }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        resizeMode: "cover",
                                    }}
                                />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={3}
                        scrollEnabled={false}
                        ListFooterComponent={<View style={{ padding: 15, marginTop: 20 }}><Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>{DATA[1].title}</Text></View>}
                    />
                    <View>
                        <FlatList
                            data={DATA[1].data} // Assuming posts is passed as a prop
                            renderItem={({ item }) => (
                                <View style={{ width: itemSize, height: itemSize, margin: 1, }}>
                                    <Image
                                        source={{ uri: item }}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            resizeMode: "cover",
                                        }}
                                    />
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={3}
                            scrollEnabled={false}
                        />
                        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "rgba(0, 0, 0, 0.356)" }]}></View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ margin: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("VV") }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>Create New Post</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>

        </SafeAreaView>
    );
}

