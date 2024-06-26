import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SupportMoreScreen = () => {
    const options = ["General Enquiries", "Data Deletion Related", "Payment Related", "Report a Bug"];
    const [selected, setSelected] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
                    <View style={styles.textInput}>
                        <TextInput placeholder="Contact Number" style={{ fontSize: 16 }} textContentType="telephoneNumber" keyboardType="phone-pad"/>
                    </View>
                    <View style={styles.textInput}>
                        <SelectList inputStyles={{ color: "black" }} setSelected={setSelected} data={options} />
                    </View>
                    <View style={[styles.textInput, { height: 200, maxHeight: "50%" }]}>
                        <TextInput
                            placeholder="Description"
                            multiline={true}
                            numberOfLines={7}
                            style={{
                                textAlignVertical: 'top',
                                fontSize: 16,
                            }}
                        />
                    </View>
                </View>
                <View style={{ padding: 20, width: "100%" }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={styles.button}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={styles.touchableHighlight} onPress={() => { console.log("VV") }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
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
    button: {
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        alignSelf: "center"
    },
    touchableHighlight: {
        borderRadius: 10,
        backgroundColor: "transparent",
        width: "100%",
        alignItems: "center",
        height: 40,
        justifyContent: "center"
    }
});
