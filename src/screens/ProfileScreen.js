import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, View, Image, StyleSheet, TouchableHighlight, Dimensions, FlatList } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OCIcon from "react-native-vector-icons/Octicons";
import FEIcon from "react-native-vector-icons/Feather";
import { Menu, MenuOption, MenuProvider, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import LinearGradient from "react-native-linear-gradient";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const ProfileImage = ({ posts }) => (
    <View style={{ margin: 5 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ alignItems: "flex-start" }}>
                <TouchableHighlight style={{ borderWidth: 2, padding: 3, borderRadius: 60, borderColor: '#97979794' }} underlayColor="#ffffffd8" onPress={() => { console.log("cl") }}>
                    <Image source={{ uri: posts[0].user.avatar }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <TouchableHighlight>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 20, padding: 10, marginRight: 10 }}>
                        <OCIcon name="credit-card" size={20}></OCIcon>
                    </LinearGradient>
                </TouchableHighlight>
                <TouchableHighlight>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 20, padding: 10, marginRight: 10 }}>
                        <FEIcon name="send" size={20}></FEIcon>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
        </View>
        <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>{posts[0].user.username}</Text>
            <Text>@{posts[0].user.username} | {posts[0].user.time}</Text>
            <Text>Australia's best gamer | Deathmatch | Call of Duty | Fortnite</Text>
            <View style={{ elevation: 10, padding: 2, borderRadius: 5, justifyContent: "center", backgroundColor: "white", marginTop: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textAlign: "center" }}>123.5K</Text>
                        <Text style={{ color: "black", fontSize: 12, textAlign: "center", marginTop: 5 }}>Subscribers</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textAlign: "center" }}>32</Text>
                        <Text style={{ color: "black", fontSize: 12, textAlign: "center", marginTop: 5 }}>Followers</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textAlign: "center" }}>123</Text>
                        <Text style={{ color: "black", fontSize: 12, textAlign: "center", marginTop: 5 }}>Images</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", textAlign: "center" }}>87.5K</Text>
                        <Text style={{ color: "black", fontSize: 12, textAlign: "center", marginTop: 5 }}>Videos</Text>
                    </View>
                </View>
            </View>
            <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("VV") }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>View Analytics</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        </View>
    </View>
);

const ListHeaderComponent = ({ posts, navigation }) => (
    <View style={{ height: 405, backgroundColor: "white" }}>
        <View>
            <ImageBackground source={require("../../assets/rose.png")} style={{ width: "100%", height: "75%" }}>
                <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, paddingTop: 10, alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "white", fontSize: 16 }}>Profile</Text>
                    <View style={{ alignSelf: "flex-end", justifyContent: "flex-end" }}>
                        <Menu>
                            <MenuTrigger>
                                <MCIcon name="dots-horizontal" color="white" size={35}></MCIcon>
                            </MenuTrigger>
                            <MenuOptions customStyles={{
                                optionsContainer: {
                                    marginTop: 30, // Adjust this value as needed to position the menu correctly
                                    borderRadius: 8,
                                    padding: 5,
                                    width: "40%"
                                },
                            }}>
                                <MenuOption style={{ justifyContent: "center" }} onSelect={() => { navigation.navigate("MoreScreen") }}>
                                    <View style={{ flexDirection: "row", }}>
                                        <FEIcon name="settings" size={25} style={{ marginRight: 20, alignSelf: "flex-start" }}></FEIcon>
                                        <Text style={{ fontSize: 15, }}>More</Text>
                                    </View>
                                </MenuOption>
                                <MenuOption style={{ justifyContent: "center" }} onSelect={() => { console.log("f") }}>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <MCIcon name="logout" size={25} style={{ marginRight: 20, alignSelf: "flex-start" }}></MCIcon>
                                        <Text style={{ fontSize: 15, }}>Logout</Text>
                                    </View>
                                </MenuOption>
                            </MenuOptions>
                        </Menu>
                    </View>
                </View>
                <View>
                    <View style={{ bottom: -70, margin: 10 }}>
                        <ProfileImage posts={posts} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    </View>
);

export const ProfileScreen = ({ navigation }) => {
    const posts = [
        {
            id: '1',
            user: {
                username: 'johndoe',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                time: "2 mins ago"
            },
            images: [
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            ]
        }
    ];

    const initialLayout = { width: Dimensions.get('window').width };

    const PostsRoute = () => {
        const windowWidth = Dimensions.get('window').width;
        const itemSize = (windowWidth - 6) / 3; // Calculate item size based on screen width

        return (
            <View style={{ flex: 1, padding: 3 }}>
                <FlatList
                    data={posts[0].images} // Assuming posts is passed as a prop
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
                    numColumns={3} // Number of columns in the grid
                // Remove ListHeaderComponent from here
                />
            </View>
        );
    };

    const SubscriptionRoute = () => (
        <View style={styles.scene}>
            <Text>Subscription Tab</Text>
        </View>
    );

    const renderScene = SceneMap({
        posts: PostsRoute,
        subscription: SubscriptionRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'posts', title: 'Posts' },
        { key: 'subscription', title: 'Subscription' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MenuProvider>
                <FlatList
                    data={[]} // Empty data to use FlatList as a wrapper
                    ListHeaderComponent={() => (
                        <ListHeaderComponent posts={posts} navigation={navigation} />
                    )}
                    renderItem={null} // No items to render
                    ListFooterComponent={() => (
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            initialLayout={initialLayout}
                            renderTabBar={props => (
                                <TabBar
                                    {...props}
                                    indicatorStyle={{ backgroundColor: '#BF9EF2' }}
                                    style={{ backgroundColor: 'white' }}
                                    labelStyle={{ color: 'black' }}
                                />
                            )}
                        />
                    )}
                
                />
            </MenuProvider>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
