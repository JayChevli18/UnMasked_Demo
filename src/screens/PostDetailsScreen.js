import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableHighlight, ImageBackground, Modal, ScrollView } from "react-native";
import { TextInput, } from "react-native-paper";
import PagerView from 'react-native-pager-view';
import PaginationDot from 'react-native-dots-pagination';
import Icon from "react-native-vector-icons/MaterialIcons";
import FEIcon from "react-native-vector-icons/Feather";
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from "react-native-linear-gradient";


export const PostDetailsScreen = ({ route }) => {
    const { post } = route.params;
    const comment = [
        { id: '1', image: "https://randomuser.me/api/portraits/men/1.jpg", name: 'ulomplad Khan', desc: "Nice one" },
        { id: '2', image: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Nerson Azamma', desc: "Great Effort Buddy!" },
        { id: '3', image: 'https://randomuser.me/api/portraits/women/10.jpg', name: 'Ricky Nicolas', desc: "Great Going" },
        { id: '4', image: 'https://randomuser.me/api/portraits/men/26.jpg', name: 'Nicol Res', desc: "Good work" },
    ]

    const Users = ({ item }) => (
        <View style={{ marginTop: 12, }}>
            <View style={{ alignItems: 'flex-start', justifyContent: "center", margin: 4, }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <View style={[styles.storyImage, { alignItems: "center", justifyContent: "center", }]}>
                        <Image source={{ uri: item.image }} style={styles.storyImage} />
                    </View>
                    <View style={{ marginLeft: 20, }}>
                        <Text>{item.desc}</Text>
                        <Text style={{ color: "black", }}>{item.name}</Text>
                    </View>
                </View>
            </View>
        </View>
    )




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20,  }}>
            <ScrollView>
                <View style={{ borderRadius: 10, overflow: "hidden", marginBottom: 5 }}>
                    <ImageBackground source={{ uri: post }} style={styles.postImage}>
                        <PaginationDot
                            length={1}
                            activeColor="#ffffff"
                            passiveDotWidth={7}
                            passiveDotHeight={7}
                            activeDotWidth={10}
                            activeDotHeight={10}
                            passiveColor="#ffffffc0"
                        ></PaginationDot>

                    </ImageBackground>
                </View>
                <View>

                    {/* Post Footer */}
                    <View style={styles.postFooter}>
                        <View style={styles.actionIcons}>
                            <Icon name="favorite-border" size={25} style={styles.icon} />
                            <Text style={{ fontSize: 12, marginRight: 10, color: "black", fontWeight: "500" }}>120</Text>
                            <Icon name="chat-bubble-outline" size={25} style={styles.icon} />
                            <Text style={{ fontSize: 12, marginRight: 10, color: "black", fontWeight: "500" }}>25</Text>
                            <FEIcon name="send" size={25} style={styles.icon} />
                        </View>
                    </View>
                    <Text style={{ color: "black", fontWeight: "500", marginTop: 5 }}>post.description</Text>

                </View>

                <FlatList
                    data={comment}
                    renderItem={({ item }) => <Users item={item}></Users>}
                    scrollEnabled={false}
                    style={{marginBottom:10}}
                >
                </FlatList>
            </ScrollView>

            <View style={{ alignItems: 'center' }}>
                <TextInput
                    placeholder="Send a message"
                    placeholderTextColor="grey"
                    style={styles.textInput}
                    left={
                        <TextInput.Icon
                            icon={() => (<Image source={{ uri: post }} style={styles.storyImage}></Image>)}
                        />
                    }
                    right={
                        <TextInput.Icon
                            icon={() => (<MaskedView
                                style={{ width: 20, height: 20 }}
                                maskElement={
                                    <View style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                        <FEIcon name="send" size={20} color="black" />
                                    </View>
                                }
                            >
                                <LinearGradient
                                    colors={['#BF9EF2', '#FF9EF2']}
                                    style={{ flex: 1 }}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                />
                            </MaskedView>
                            )}
                        />
                    }
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    postImage: {
        width: '100%',
        height: 400,
        borderRadius: 10,
        justifyContent: "flex-end",
    },
    postFooter: {
        //    padding: 10,
        marginTop: 10
    },
    actionIcons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 5,
    },
    icon: {
        marginRight: 5,
    },
    storyImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textInput: {
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
        width: "100%",
    },

})