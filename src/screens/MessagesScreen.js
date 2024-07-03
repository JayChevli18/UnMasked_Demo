import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import { Divider } from "react-native-paper";


export const MessagesScreen = () => {
    const stories = [
        { id: '1', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", name: 'ulomplad' },
        { id: '2', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg', name: 'Nerson' },
        { id: '3', image: 'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg', name: 'Ricky' },
        { id: '4', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg', name: 'Mutobo' },
        { id: '5', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg', name: 'James' },
        { id: '6', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg", name: 'ulomplad' },
        { id: '7', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", name: 'ulomplad' },
    ];
    const comment = [
        { id: '1', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', desc: "Nice one" },
        { id: '2', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', desc: "Great Effort Buddy!" },
        { id: '3', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', desc: "Great Going" },
        { id: '4', image: 'https://randomuser.me/api/portraits/men/26.jpg', name: 'Nicol Res', desc: "Good work" },
    ]


    const StoryItem = ({ story }) => (
        <TouchableHighlight style={styles.storyItem} underlayColor="#ffffffd8" onPress={() => { console.log("cl", story.id) }}>
            <View style={{ alignItems: 'center' }}>
                <View style={[styles.imageContainer, { borderWidth: 2 }]}>
                    <Image source={{ uri: story.image }} style={styles.storyImage} />
                </View>
                {/* <Text style={styles.storyName}>{story.name}</Text> */}
            </View>
        </TouchableHighlight>
    );

    const Users = ({ item }) => (
        <View style={{ alignItems: 'flex-start', justifyContent: "center", margin: 4, marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <View style={[styles.chatImage, { alignItems: "center", justifyContent: "center", }]}>
                    <Image source={{ uri: item.image }} style={styles.chatImage} />
                </View>
                <View style={{ marginLeft: 20, }}>
                    <Text style={{ color: "black", }}>{item.name}</Text>
                    <Text>{item.desc}</Text>
                </View>
            </View>
            <Divider style={{ marginTop: 10, backgroundColor: "black", width: "100%" }} ></Divider>

        </View>
    )


    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Messages</Text>
            <View>
                <FlatList
                    horizontal
                    data={stories}
                    renderItem={({ item }) => <StoryItem story={item} />}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContainer}
                    style={{ paddingTop: 20, }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={comment}
                    renderItem={({ item }) => <Users item={item}></Users>}
                    scrollEnabled={false}
                >
                </FlatList>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    storyItem: {
        alignItems: 'center',
        marginRight: 10,
    },
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
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    storyName: {
        marginTop: 5,
        fontSize: 12,
        color: "black"
    },

})