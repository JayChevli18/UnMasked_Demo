import React, { useState } from "react";
import { SafeAreaView, Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Card, Title, Paragraph, Provider as PaperProvider, Divider } from 'react-native-paper';
import Dots from 'react-native-dots-pagination';
import Icon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
const { width } = Dimensions.get('window');

const RenderHeader = () => {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
            </View>
        </View>
    )
}

const ExtraScreen = () => {
    // Hardcoded data
    const cards = [
        { title: '$3941.23', description: 'Current Balance', name: 'VISA', cardnumber: "* * * *    * * * *     * * * *     5213" },
        { title: '$4325.23', description: 'Current Balance', name: 'VISA', cardnumber: "* * * *    * * * *     * * * *     6789" },
        { title: 'Add New Card' },
    ];

    const data = [
        {
            id: '1',
            creator: 'Tipped Creator',
            amount: '- $10.99',
            username: '@Jonethon.23421',
            date: '11 February 4:12 PM',
        },
        {
            id: '2',
            creator: 'Received Tip',
            amount: '+ $421.00',
            username: '@Joness.758',
            date: '9 January 2:45 PM',
        },
        // Add more data items here
    ];
    const [activeDot, setActiveDot] = useState(0);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveDot(index);
    };

    return (
        <PaperProvider>
            <ScrollView horizontal={false}>
                <View style={styles.container}>
                    <View>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={handleScroll}
                            scrollEventThrottle={16}
                        >
                            {cards.map((card, index) => (
                                <Card key={index} style={styles.card}>
                                    <LinearGradient
                                        style={styles.gradient}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        colors={["#00165f", "#0044ff"]}
                                    >
                                        <Card.Content style={styles.cardContent}>
                                            <View style={{ flex: 1 }}>
                                                <View style={styles.cardHeader}>
                                                    <Title style={styles.cardTitle}>{card.title}</Title>
                                                    <Title style={styles.cardName}>{card.name}</Title>
                                                </View>
                                                <Paragraph style={styles.cardDescription}>{card.description}</Paragraph>
                                            </View>
                                            <Title style={styles.cardNumber}>{card.cardnumber}</Title>
                                        </Card.Content>
                                        {
                                            !card.description &&
                                            <Card.Actions>
                                                <TouchableHighlight style={{ borderRadius: 40, borderWidth: 2, borderColor: "white" }} underlayColor="#ffffff9d" onPress={() => { console.log("Add to your story") }}>
                                                    <View style={{ alignItems: 'center', justifyContent: "center", padding: 3, borderRadius: 40 }}>
                                                        <Icon name="add" size={40} color="#ffffff" />
                                                    </View>
                                                </TouchableHighlight>
                                            </Card.Actions>
                                        }
                                    </LinearGradient>
                                </Card>
                            ))}
                        </ScrollView>
                        <Dots length={cards.length} active={activeDot} activeColor='blue' />
                    </View>
                    <View style={{ alignItems: "center", marginTop:15 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "90%", alignItems: "center", justifyContent: "center", }}>
                            <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }]} onPress={() => { console.log("withdraw") }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: 18 }}>Withdraw</Text>
                                </View>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={{ margin: 25 }}>
                        <Title style={{ color: "black", fontWeight: "500", fontSize: 24, marginBottom: 25 }}>Activity</Title>

                        {data.map(item =>
                            <View key={item.id} style={{ backgroundColor: "white" }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>{item.creator}</Text>
                                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.amount}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "black" }}>{item.username}</Text>
                                    <Text>{item.date}</Text>
                                </View>
                                <Divider style={{ marginTop: 10, marginBottom: 10 }}></Divider>
                            </View>

                        )}
                    </View>
                    <View style={{alignItems:"center"}}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "90%", alignItems: "center", justifyContent: "center", }}>
                            <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }]} onPress={() => { console.log("withdraw") }}>
                                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                                    <MCIcon name="message-outline" color="white" size={22}></MCIcon>
                                    <Text style={{ color: "white", fontSize: 18, marginLeft:10 }}>Say Thanks</Text>
                                </View>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
};

export const PaymentScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <RenderHeader />
            <ExtraScreen />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },
    card: {
        width: width - 40,
        height: 200,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom:10
    },
    cardContent: {
        flex: 1,
        justifyContent: "space-between",
    },
    gradient: {
        padding: 12,
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cardTitle: {
        color: "white",
        fontWeight: "500",
        fontSize: 24,
    },
    cardName: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
    cardDescription: {
        color: "white",
    },
    cardNumber: {
        color: "yellow",
        fontWeight: "500",
        fontSize: 18,
        textAlignVertical: 'bottom',
    },
    header: {
        paddingBottom: 10,
    },
    microImage: {
        width: 50,
        height: 28,
        marginLeft: 20,
        marginTop: 10,
    },
    container: {
        marginTop: 25,
    },
})

