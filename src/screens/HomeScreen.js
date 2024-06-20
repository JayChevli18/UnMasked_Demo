import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, TouchableHighlight, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice";
import Icon from "react-native-vector-icons/MaterialIcons";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OCIcon from "react-native-vector-icons/Octicons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FEIcon from "react-native-vector-icons/Feather";
import { Menu, MenuOption, MenuProvider, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import PagerView from 'react-native-pager-view';
import PaginationDot from 'react-native-dots-pagination';

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  const stories = [
    { id: '1', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", name: 'ulomplad' },
    { id: '2', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg', name: 'Nerson' },
    { id: '3', image: 'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg', name: 'Ricky' },
    { id: '4', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg', name: 'Mutobo' },
    { id: '5', image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg', name: 'James' },
    { id: '6', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg", name: 'ulomplad' },
    { id: '7', image: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", name: 'ulomplad' },
  ];

  const posts = [
    {
      id: '1',
      user: {
        username: 'johndoe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        time: "2 mins ago"
      },
      images: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg',
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
      ],
      likes: 120,
      description: 'Delicious homemade burgers!Delicious home made burgers',
      comments: [
        { id: '1', username: 'janedoe', comment: 'Looks amazing!' },
        { id: '2', username: 'foodie123', comment: 'Yummy!' }
      ]
    },
    {
      id: '2',
      user: {
        username: 'janedoe',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        time: "9 mins ago"
      },
      images: [
        'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg'
      ],
      likes: 89,
      description: 'Burgers for dinner!',
      comments: [
        { id: '1', username: 'johndoe', comment: 'Nice!' },
        { id: '2', username: 'burgerlover', comment: 'Can I have some?' }
      ]
    }
  ];

  const StoryItem = ({ story }) => (
    <TouchableHighlight style={styles.storyItem} underlayColor="white" onPress={() => { console.log("cl", story.id) }}>
      <View style={{ alignItems: 'center' }}>
        <View style={[styles.imageContainer, {borderWidth: 2}]}>
          <Image source={{ uri: story.image }} style={styles.storyImage} />
        </View>
        <Text style={styles.storyName}>{story.name}</Text>
      </View>
    </TouchableHighlight>
  );

  const YourStory = () => (
    <TouchableHighlight style={styles.storyItem} underlayColor="white" onPress={() => { console.log("Add to your story") }}>
      <View style={{ alignItems: 'center', justifyContent: "center", paddingTop:4 }}>
        <View style={[styles.imageContainer, {backgroundColor:"#97979794", }]}>
          <View style={[styles.storyImage, { alignItems: "center", justifyContent: "center"}]}>
            <Icon name="add" size={40} color="#696969" />
          </View>
        </View>
        <Text style={styles.storyName}>Your Story</Text>
      </View>
    </TouchableHighlight>
  );

  const Post = ({ post }) => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
      <View style={styles.postContainer}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={{ flexDirection: "row" }}>
            <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.username}>{post.user.username}</Text>
              <Text style={{ fontSize: 12 }}>{post.user.time}</Text>
            </View>
          </View>
          <View style={{ alignSelf: "flex-end", justifyContent: "flex-end" }}>
            <Menu>
              <MenuTrigger>
                <MCIcon name="dots-horizontal" size={35}></MCIcon>
              </MenuTrigger>
              <MenuOptions customStyles={{
                optionsContainer: {
                  marginTop: 30, // Adjust this value as needed to position the menu correctly
                  borderRadius: 8,
                  padding: 5,
                },

              }}>
                <MenuOption style={{ flexDirection: "row", justifyContent: "center" }} onSelect={() => console.log("Report User")}>
                  <OCIcon name="report" size={25} style={{ marginRight: 20 }}></OCIcon>
                  <Text style={{ fontSize: 15 }}>Report User</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
        </View>
        {/* Post Images */}

        <PagerView style={{ height: 400 }} initialPage={0} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
          {post.images.map((image, index) => (
            <View key={index} style={{ borderRadius: 10, overflow: "hidden", marginBottom: 5 }}>
              <ImageBackground source={{ uri: image }} style={styles.postImage}>
                <TouchableHighlight style={{ borderRadius: 10, backgroundColor: "rgba(255, 255, 255, 0.384)", borderWidth: 1, borderColor: "white", alignSelf: "flex-end", padding: 3, marginRight: 15 }} onPress={() => { console.log("cl") }}>
                  <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <FAIcon name="dollar" size={14} style={{ color: "white", marginRight: 5 }}></FAIcon>
                    <Text style={{ fontWeight: "bold", color: "white" }}>Tip Creator</Text>
                  </View>
                </TouchableHighlight>
                <PaginationDot
                  active={currentPage}
                  length={post.images.length}
                  activeColor="#ffffff"
                  passiveDotWidth={7}
                  passiveDotHeight={7}
                  activeDotWidth={10}
                  activeDotHeight={10}
                  passiveColor="#ffffffc0"
                ></PaginationDot>

              </ImageBackground>
            </View>
          ))}
        </PagerView>

        <Text style={{ color: "black", fontWeight: "500", marginTop: 5 }}>{post.description}</Text>

        {/* Post Footer */}
        <View style={styles.postFooter}>
          <View style={styles.actionIcons}>
            <Icon name="favorite-border" size={25} style={styles.icon} />
            <Text style={{ fontSize: 12, marginRight: 10, color: "black", fontWeight: "500" }}>{post.likes}</Text>
            <Icon name="chat-bubble-outline" size={25} style={styles.icon} />
            <Text style={{ fontSize: 12, marginRight: 10, color: "black", fontWeight: "500" }}>{post.likes}</Text>
            <FEIcon name="send" size={25} style={styles.icon} />
          </View>
          {/* <Text style={styles.description}><Text style={styles.username}>{post.user.username} </Text>{post.description}</Text>
        {post.comments.map(comment => (
          <Text key={comment.id} style={styles.comment}><Text style={styles.username}>{comment.username} </Text>{comment.comment}</Text>
        ))} */}
        </View>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
        <Icon name="notifications-none" size={30} style={styles.microImage} />
      </View>

      <FlatList
        horizontal
        data={[{ id: 'your_story' }, ...stories]}
        renderItem={({ item }) => item.id === 'your_story' ? <YourStory /> : <StoryItem story={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <MenuProvider>
        <View>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Post post={item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </MenuProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
  },
  microImage: {
    width: 50,
    height: 28,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  storiesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  storyItem: {
    alignItems: 'center',
    margin: 10,
  },
  imageContainer: {
    padding: 3, // Padding between image and border
    borderRadius: 60,
    borderColor: '#97979794', // Instagram-like border color
  },
  yourStoryContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#cacaca',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: "black"
  },
  postContainer: {
    //marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    //    alignItems: "center",
    marginBottom: 10
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15
  },
  postImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  postFooter: {
    //    padding: 10,
    marginTop: 10
  },
  actionIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  likes: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  comment: {
    marginBottom: 2,
  },
  header: {
    paddingBottom: 10,
  },
});
