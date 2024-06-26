import React from "react";
import { SafeAreaView, Text, View, TextInput, StyleSheet, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
export const ChatMoreScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, marginTop: 10,alignItems:"center", }}>
                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Set up a Welcome message to your subscribers"
                        multiline={true}
                        editable={true}
                        numberOfLines={10}
                        style={{
                            textAlignVertical: 'top',
                            fontSize:16
                        }}
                    />
                </View>
                <View>
                    <Text>This message will be sent as a thank you or a welcome message to your new subscribers</Text>
                </View>
                <View style={{ margin: 10, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("VV") }}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>Create New Post</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textInput: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 20,
    }
})