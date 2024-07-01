import React, { useState } from "react";
import { ImageBackground, SafeAreaView, Text, View, Image, StyleSheet, TouchableHighlight, Dimensions, FlatList, ScrollView } from "react-native";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OCIcon from "react-native-vector-icons/Octicons";
import FEIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import { Menu, MenuOption, MenuProvider, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import LinearGradient from "react-native-linear-gradient";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BlurView } from "@react-native-community/blur";

export const OtherUserProfileScreen = ({ navigation }) => {
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
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
            ],
            likes: 120,
            description: 'Delicious homemade burgers!Delicious home made burgers',
            comments: [
                { id: '1', username: 'janedoe', comment: 'Looks amazing!' },
                { id: '2', username: 'foodie123', comment: 'Yummy!' }
            ]
        },
        {
            id: '2',
            user: {
                username: 'janedoe',
                avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
                time: "9 mins ago"
            },
            images: [
                'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg'
            ],
            likes: 89,
            description: 'Burgers for dinner!',
            comments: [
                { id: '1', username: 'johndoe', comment: 'Nice!' },
                { id: '2', username: 'burgerlover', comment: 'Can I have some?' }
            ]
        }
    ];

    const initialLayout = { width: Dimensions.get('window').width };

    const ProfileImage = () => (
        <View>
            <View style={{ margin: 5, }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ alignItems: "flex-start" }}>
                        <TouchableHighlight style={{ borderWidth: 2, padding: 3, borderRadius: 60, borderColor: '#97979794', }} underlayColor="#ffffffd8" onPress={() => { console.log("cl") }}>
                            <Image source={{ uri: posts[0].user.avatar }} style={{ width: 60, height: 60, borderRadius: 30, }} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", }}>
                        <TouchableHighlight>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 20, padding: 10, marginRight: 10 }}>
                                <OCIcon name="credit-card" size={20} ></OCIcon>
                            </LinearGradient>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 20, padding: 10, marginRight: 10 }}>
                                <FEIcon name="send" size={20} ></FEIcon>
                            </LinearGradient>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{ margin: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>{posts[0].user.username}</Text>
                    <Text>@{posts[0].user.username} | {posts[0].user.time}</Text>
                    <Text>Australia's best gamer | Deathmatch | Call of Duty | Fortnite</Text>
                    <View style={{ elevation: 10, padding: 2, borderRadius: 5, justifyContent: "center", backgroundColor: "white", marginTop: 10, }}>
                        {/* <Card.Content> */}
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
                        {/* </Card.Content> */}
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flex: 1, marginRight: 5 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15, }}>
                                <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", alignItems: "center", height: 40, justifyContent: "center", width: "100%" }} onPress={() => { console.log("ok") }}>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 18 }}>Follow</Text>
                                    </View>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                        <View style={{ flex: 1 }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15, width: "100%" }}>
                                <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", alignItems: "center", height: 40, justifyContent: "center", width: "100%" }} onPress={() => { console.log("ok") }}>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 18 }}>Subscribe</Text>
                                    </View>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );

    const PostsRoute = () => {
        const windowWidth = Dimensions.get('window').width;
        const itemSize = (windowWidth - 6) / 3; // Calculate item size based on screen width

        return (
            <View style={{ flex: 1, padding: 3 }}>
                <FlatList
                    scrollEnabled={false}
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
                />
                <View style={StyleSheet.absoluteFillObject}>
                    <BlurView
                        style={StyleSheet.absoluteFillObject}
                        blurType="dark"
                        blurAmount={1}
                        reducedTransparencyFallbackColor="red"
                    />
                </View>
            </View>
        );
    };
    const SubscriptionRoute = () => (
        <View style={{ alignItems: "center", justifyContent: "center", marginTop:80}}>
            <Text>You have not subscribed any creators.</Text>
            <Text>Subscribed now to your favourite creators.</Text>
            <View style={{ flex: 1, marginRight: 5,width:"80%" }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15, padding:10}}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", alignItems: "center", height: 40, justifyContent: "center", width: "100%" }} onPress={() => { console.log("ok") }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>View Followers</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        </View>
    );

    const renderScene = SceneMap({
        posts: PostsRoute,
        bundles: SubscriptionRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'posts', title: 'Posts' },
        { key: 'bundles', title: 'Bundles' },
    ]);
    
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView>
                <MenuProvider>
                    <View style={{ height: 400, backgroundColor: "white" }}>
                        <View>
                            <ImageBackground source={require("../../assets/rose.png")} style={{ width: "100%", height: "75%" }}>
                                <View style={{ flexDirection: "row", paddingLeft: 20, paddingRight: 20, paddingTop: 10, alignItems: "center", justifyContent: "space-between" }}>
                                    <IonIcon name="chevron-back-sharp" size={30} color="white"></IonIcon>
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
                                                <MenuOption style={{ justifyContent: "center" }} onSelect={() => { navigation.navigate("More") }}>
                                                    <View style={{ flexDirection: "row", }}>
                                                        <FEIcon name="settings" size={25} style={{ marginRight: 20, alignSelf: "flex-start" }}></FEIcon>
                                                        <Text style={{ fontSize: 15, }}>More</Text>
                                                    </View>
                                                </MenuOption>
                                                <MenuOption>
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
                                    <View style={{ bottom: -70, margin: 10, }}>
                                        <ProfileImage></ProfileImage>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white" }}>
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

                    </View>
                </MenuProvider>
            </ScrollView>
            
            <MCIcon name="lock" size={100} color="white" style={{ position: "absolute", top: "80%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] }}></MCIcon>

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