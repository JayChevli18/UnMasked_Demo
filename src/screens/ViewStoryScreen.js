import React, { useEffect , useState} from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableHighlight, ImageBackground, Modal, ScrollView } from "react-native";
import { TextInput, ProgressBar } from "react-native-paper";
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from "react-native-linear-gradient";
import FEIcon from "react-native-vector-icons/Feather";
import EIcon from "react-native-vector-icons/Entypo";


export const ViewStoryScreen = () => {
    const posts = [
        {
            id: '1',
            user: {
                username: 'johndoe',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                time: "2 mins ago"
            },
        }
    ]

    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setProgress(prevProgress=>{
                if(prevProgress>=1){
                clearInterval(interval);
                return 1;
            }
            return prevProgress+0.01;
            })
        }, 300);
        return ()=>clearInterval(interval);
    },[]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require("../../assets/rose.png")} style={{ flex: 1 }}>
                <View style={{marginLeft:20, marginRight:20, marginTop:8}}>
                    <ProgressBar progress={progress} color="#BF9EF2"></ProgressBar>
                </View>
                <View style={styles.postHeader}>
                    <View style={{ flexDirection: "row" }}>

                        <Image source={{ uri: posts[0].user.avatar }} style={styles.avatar} />
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold" }}>{posts[0].user.username}</Text>
                            <Text style={{ fontSize: 12, color: "white" }}>{posts[0].user.time}</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: "center", justifyContent: "center" }}>
                        <EIcon name="cross" size={30} color="white"></EIcon>
                    </View>
                </View>
                <View style={{ padding: 20, bottom: 0, left: 0, right: 0, position: "absolute" }}>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Send a message"
                            style={styles.textInput}
                            placeholderTextColor="grey"
                            left={
                                <TextInput.Icon
                                    icon={() => (<Image source={require("../../assets/rose.png")} style={styles.storyImage}></Image>)}
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
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
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
        borderRadius: 20,
        overflow: "hidden",
    },
    storyImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    postHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20

    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },

})