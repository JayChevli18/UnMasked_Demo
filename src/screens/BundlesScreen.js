import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

export const BundlesScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Bundle Name" style={{ fontSize: 16 }} />
                    </View>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Price" style={{ fontSize: 16 }} keyboardType="decimal-pad" />
                    </View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ marginTop: 10, alignSelf: "center", marginBottom: 15, width: "100%", textAlign: "center" }}>No posts added as a part of the bundle!</Text>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: 300, alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, marginBottom: 5, alignSelf: "center" }}>
                                <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { borderRadius: 10, backgroundColor: "transparent", width: 300, alignItems: "center", height: 40, justifyContent: "center" }]} onPress={() => { setPaymentModalVisible(false); navigation.navigate("PaymentScreen"); }}>
                                    <View>
                                        <Text style={{ color: "white", fontSize: 18 }}>Add Post</Text>
                                    </View>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                    </View>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%", margin:12 }}>
                        <Text>Enable Free Preview</Text>
                        <ToggleSwitch
                            isOn={isEnabled}
                            offColor="#FBB4D1"
                            onColor="#BF9EF2"
                            size="medium"
                            onToggle={isOn => { console.log(isOn); setIsEnabled(isOn) }}
                        />
                    </View>
                    <View style={{ padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center' }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                            <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { navigation.navigate("Upload Post", { selectedImages }) }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: 18 }}>Create</Text>
                                </View>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    textInput: {
        margin: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 20,
        width: "100%",
    },
    centeredView: {
        justifyContent: 'center',
        width: "100%",
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        width: "100%",
        elevation: 20,
    },

});