import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet, Platform, Text, ActivityIndicator, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import LinearGradient from 'react-native-linear-gradient';

const requestGalleryPermission = async () => {
    const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    const result = await request(permission);
    return result === RESULTS.GRANTED;
};

const ImageGrid = ({ onSelectImage, selectedImages }) => {
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
                if (selectedImages.length === 0 && photosResponse.edges.length > 0) {
                    onSelectImage([{ uri: photosResponse.edges[0].node.image.uri }]);
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

    const renderItem = ({ item }) => {
        const isSelected = selectedImages.findIndex(image => image.uri === item.node.image.uri) !== -1;
        const selectionNumber = selectedImages.findIndex(image => image.uri === item.node.image.uri) + 1;

        const toggleSelection = () => {
            if (isSelected) {
                const index = selectedImages.findIndex(image => image.uri === item.node.image.uri);
                if (index !== -1) {
                    const newSelectedImages = [...selectedImages];
                    newSelectedImages.splice(index, 1);
                    onSelectImage(newSelectedImages); // Update selected images after deselection
                }
            } else {
                onSelectImage([...selectedImages, { uri: item.node.image.uri }]); // Add image to selected images
            }
        };

        return (
            <View style={{ width: itemSize, height: itemSize, margin: 1 }}>
                <TouchableOpacity onPress={toggleSelection}>
                    <Image
                        source={{ uri: item.node.image.uri }}
                        style={[
                            styles.image,
                            isSelected && styles.selectedImageBorder
                        ]}
                    />
                    {isSelected && (
                        <View style={styles.selectionNumberContainer}>
                            <Text style={styles.selectionNumberText}>{selectionNumber}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            {loading ? (
                <ActivityIndicator size="large" color="#BF9EF2" />
            ) : (
                <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={4}
                    scrollEnabled={false}
                    onEndReached={loadMorePhotos}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={loadingMore ? <ActivityIndicator size="small" color="#BF9EF2" /> : null}
                />
            )}
        </>
    );
};

export const AddNewPostScreen = ({navigation}) => {
    const [selectedImages, setSelectedImages] = useState([]);

    const onSelectImage = (newSelectedImages) => {
        setSelectedImages(newSelectedImages);
    };
    
    const uploadImages = async () => {
        if (selectedImages.length === 0) return;

        const data = new FormData();
        selectedImages.forEach((image, index) => {
            data.append('file', {
                uri: image.uri,
                type: 'image/jpeg',
                name: `photo_${index}.jpg`,
            });
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

    const windowWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {selectedImages.length > 0 && (
                    <ScrollView horizontal style={{ padding: 20, gap: 20 }}>
                        {selectedImages.map((image, index) => (
                            <View style={{ marginRight: 40, width: windowWidth - 40, height: 400, overflow: "hidden" }} key={index}>
                                <Image source={{ uri: image.uri }} style={styles.fullSelectedImage} />
                            </View>
                        ))}
                    </ScrollView>
                )}
                <View>
                    <Text style={{ fontSize: 16, color: "black", fontWeight: "bold", paddingLeft: 20, paddingBottom: 12 }}>Your Gallery</Text>
                </View>
                <ImageGrid onSelectImage={onSelectImage} selectedImages={selectedImages} />
            </ScrollView>
            <View style={{ padding: 20, position: 'absolute', bottom: 0, left: 0, right: 0, alignItems: 'center' }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10, width: "100%", alignItems: "center", height: 40, justifyContent: "center", marginTop: 20, alignSelf: "center" }}>
                    <TouchableHighlight underlayColor="#BF9EF2" style={{ borderRadius: 10, backgroundColor: "transparent", width: "100%", alignItems: "center", height: 40, justifyContent: "center" }} onPress={()=>{navigation.navigate("Upload Post", {selectedImages})}}>
                        <View>
                            <Text style={{ color: "white", fontSize: 18 }}>Next</Text>
                        </View>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        </SafeAreaView>
    );
};

const windowWidth = Dimensions.get('window').width;

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
    selectedImageBorder: {
        borderColor: "#BF9EF2",
        borderWidth: 3,
    },
    selectionNumberContainer: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#BF9EF2',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectionNumberText: {
        color: 'white',
        fontSize: 16,
    },
    fullSelectedImage: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    uploadButton: {
        marginTop: 10,
    },
});
