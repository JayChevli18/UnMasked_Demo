import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableHighlight } from "react-native";
import PagerView from 'react-native-pager-view';
import PaginationDot from 'react-native-dots-pagination';
import { Menu, MenuOption, MenuProvider, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { Dropdown } from "react-native-element-dropdown";
import LinearGradient from "react-native-linear-gradient";

export const EditPostScreen = ({ route }) => {

    const { post } = route.params;
    const options = [{ label: "Everyone", value: "Everyone" }, { label: "Friend", value: "Friend" }, { label: "Subscribers", value: "Subscribers" },];
    const [value, setValue] = useState("Everyone");

    return (
        <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor:"white" }}>
            <MenuProvider>
                <Text style={{ color: "black", fontWeight: "500",  marginBottom: 20 }}>post.descriptionAmazing Gaming session last night. Amazing Gaming session last night. Amazing Gaming session last night.</Text>
                <View style={{ borderRadius: 10, overflow: "hidden", marginBottom: 12 }}>
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
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text>Show post to</Text>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{width:"40%", borderRadius:8}}>
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
                            placeholderStyle={{ fontSize: 16, color:"white" }}
                            labelField="label"
                            valueField="value"
                            selectedTextStyle={{color:"white"}}
                            iconColor="white"
                            containerStyle={{maxHeight:"70%"}}
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                        ></Dropdown>
                    </LinearGradient>
                </View>
                <View style={{  position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("VV") }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>

            </MenuProvider>
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

})