import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, TouchableHighlight,StyleSheet, Platform, Text, ActivityIndicator, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import LinearGradient from 'react-native-linear-gradient';

const requestGalleryPermission = async () => {
    const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const result = await request(permission);
    return result === RESULTS.GRANTED;
};

const ImageGrid = ({ onSelectImage, initialImageSelected }) => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [lastCursor, setLastCursor] = useState(null);
    const [noMorePhotos, setNoMorePhotos] = useState(false);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        const granted = await requestGalleryPermission();
        if (granted) {
            const photosResponse = await CameraRoll.getPhotos({
                first: 20,
                assetType: 'Photos',
                after: lastCursor,
            });

            if (photosResponse.edges.length > 0) {
                setPhotos(prevPhotos => [...prevPhotos, ...photosResponse.edges]);
                setLastCursor(photosResponse.page_info.end_cursor);
                if (photosResponse.edges.length < 20) {
                    setNoMorePhotos(true);
                }
                if (!initialImageSelected.current && photosResponse.edges.length > 0) {
                    onSelectImage(photosResponse.edges[0].node.image.uri);
                    initialImageSelected.current = true;
                }
            } else {
                setNoMorePhotos(true);
            }
            setLoading(false);
            setLoadingMore(false);
        } else {
            console.log('Permission denied');
            setLoading(false);
        }
    };

    const loadMorePhotos = () => {
        if (!loadingMore && !noMorePhotos) {
            setLoadingMore(true);
            fetchPhotos();
        }
    };

    const windowWidth = Dimensions.get('window').width;
    const itemSize = (windowWidth - 6) / 4; // Calculate item size based on screen width

    const renderItem = ({ item }) => (
        <View style={{ width: itemSize, height: itemSize, margin: 1 }}>
            <TouchableOpacity onPress={() => onSelectImage(item.node.image.uri)}>
                <Image
                    source={{ uri: item.node.image.uri }}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    onEndReached={loadMorePhotos}
                    scrollEnabled={false}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#0000ff" /> : null}
                />
            )}
        </>
    );
};

export const AddNewPostScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const initialImageSelected = React.useRef(false); // Ref to track if initial image is selected

    const uploadImage = async () => {
        if (!selectedImage) return;
        const data = new FormData();
        data.append('file', {
            uri: selectedImage,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });

        // try {
        //     const response = await axios.post('https://your-server-endpoint.com/upload', data, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
        //     console.log('Upload success', response.data);
        // } catch (error) {
        //     console.error('Upload failed', error);
        // }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {selectedImage && <View style={{ padding: 20 }}><Image source={{ uri: selectedImage }} style={styles.selectedImage} /></View>}
                <View>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 20, paddingBottom: 12 }}>Your Gallery</Text>
                </View>
                <ImageGrid onSelectImage={setSelectedImage} initialImageSelected={initialImageSelected} />
            </ScrollView>
            <View style={{ padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center', }}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                        <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={() => { console.log("VV") }}>
                            <View>
                                <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                            </View>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    selectedImage: {
        width: '100%',
        height: 400,
        borderRadius: 20,
    },
    uploadButton: {
        marginTop: 10,
    },
});
