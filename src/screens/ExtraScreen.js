import React, { useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, PaperProvider } from 'react-native-paper';
import Dots from 'react-native-dots-pagination';
import LinearGradient from 'react-native-linear-gradient';
const { width } = Dimensions.get('window');

export const ExtraScreen = () => {
    // Hardcoded data
    const cards = [
        { title: '$3941.23', description: 'Current Balance', name: 'VISA', cardnumber: "* * * *    * * * *     * * * *     5213" },
        { title: '$4325.23', description: 'Current Balance', name: 'VISA', cardnumber: "* * * *    * * * *     * * * *     6789" },
        { title: 'Add New Card', },
    ];

    const [activeDot, setActiveDot] = useState(0);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveDot(index);
    };

    return (
        <PaperProvider>
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    {cards.map((card, index) => (
                        <Card key={index} style={styles.card}>
                            <LinearGradient style={{ padding: 12, width: "100%", height: 200, borderRadius: 10 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#00165f", "#0044ff"]}>
                                <Card.Content style={{ flex: 1, justifyContent: "space-between" }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <Title style={{ color: "white", fontWeight: "500", fontSize: 24 }}>{card.title}</Title>
                                            <Title style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>{card.name}</Title>
                                        </View>
                                        <Paragraph style={{ color: "white" }}>{card.description}</Paragraph>
                                    </View>
                                    <Title style={{ color: "yellow", fontWeight: "500", fontSize: 18, textAlignVertical: 'bottom' }}>{card.cardnumber}</Title>
                                </Card.Content>
                            </LinearGradient>
                        </Card>
                    ))}
                </ScrollView>
            </View>
            <Dots length={cards.length} active={activeDot} activeColor='blue' />

        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    card: {
        width: width - 40,
        height: 200,
        marginHorizontal: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
});

//export default ExtraScreen;
