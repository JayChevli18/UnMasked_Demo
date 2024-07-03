import React, { useState } from "react";
import { SafeAreaView, Text, ScrollView, Image, View, TextInput, StyleSheet, Dimensions, Switch, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Dropdown } from "react-native-element-dropdown";
import ToggleSwitch from "toggle-switch-react-native";


export const AddNewPostDetailsScreen = ({ navigation, route }) => {
    const { selectedImages } = route.params;
    const windowWidth = Dimensions.get('window').width;
    const options = [{ label: "Everyone", value: "Everyone" }, { label: "Friend", value: "Friend" }, { label: "Subscribers", value: "Subscribers" },];
    const [value, setValue] = useState("Everyone");

    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
                <View>
                    <View style={{ paddingLeft: 20, paddingRight: 20, flex:1 }}>
                        <TextInput
                            placeholder="Add your caption here!"
                            multiline={true}
                            editable={true}
                            numberOfLines={1}
                            style={{
                                textAlignVertical: 'top',
                                fontSize: 16,
                                backgroundColor: "white"
                            }}
                        />

                    </View>

                    <ScrollView horizontal style={{ paddingLeft: 20,paddingRight:20, gap: 20, }}>
                        {selectedImages.map((image, index) => (
                            <View style={{ marginRight: 40, width: windowWidth - 40, height: 400, overflow: "hidden" }} key={index}>
                                <Image source={{ uri: image.uri }} style={styles.fullSelectedImage} />
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <Text>Show post to</Text>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ width: "40%", borderRadius: 8 }}>
                            <Dropdown
                                data={options}
                                style={{
                                    width: "100%",
                                    height: 40,
                                    borderColor: 'gray',
                                    borderWidth: 0.5,
                                    borderRadius: 8,
                                    paddingHorizontal: 8,
                                }}
                                placeholderStyle={{ fontSize: 16, color: "white" }}
                                labelField="label"
                                valueField="value"
                                selectedTextStyle={{ color: "white" }}
                                iconColor="white"
                                containerStyle={{ maxHeight: "70%" }}
                                value={value}
                                onChange={item => {
                                    setValue(item.value);
                                }}
                            ></Dropdown>
                        </LinearGradient>
                    </View>
                    <View style={{ flexDirection: "row", padding: 20, justifyContent: "space-between", alignItems: "center" }}>
                        <Text>Schedule post</Text>
                        <ToggleSwitch
                            isOn={isEnabled}
                            offColor="#FBB4D1"
                            onColor="#BF9EF2"
                            size="medium"
                            onToggle={isOn => { console.log(isOn); setIsEnabled(isOn) }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20 }}>
                    <View style={{ flex: 1, marginRight: 20 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15, }}>
                            <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", alignItems: "center", height: 40, justifyContent: "center", width: "100%" }} onPress={() => { console.log("ok") }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: 18 }}>Send Privately</Text>
                                </View>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    <View style={{ flex: 1 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, alignItems: "center", height: 40, justifyContent: "center", marginTop: 15, width: "100%" }}>
                            <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", alignItems: "center", height: 40, justifyContent: "center", width: "100%" }} onPress={() => { console.log("ok") }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: 18 }}>{isEnabled ? "Schedule" : "Post Now"}</Text>
                                </View>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullSelectedImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },

})