import React from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground, View, Text, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={{ flex: 2, width: "85%" }}>
          <Image source={require('../../assets/Frame.png')} style={styles.microImage} />
          <ImageBackground source={require('../../assets/Group3.png')} style={styles.imageBackground} resizeMode='cover'>
            <Image source={require('../../assets/Frame.png')} />
          </ImageBackground>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start", marginLeft: 30, marginTop: 250, width: 300 }}>
        <Text style={{ fontSize: 16 }}>Get Started</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "black", marginTop: 10 }}>Millions of people use to show their ideas to world.</Text>
      </View>

      <View style={{ flex: 0.7, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 50 }}>
        <TouchableHighlight style={styles.button} underlayColor="lightgrey" onPress={() => navigation.navigate("LoginScreen")}>
          <View>
            <Text style={{ color: "black" }}>Log In</Text>
          </View>
        </TouchableHighlight>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#FBB4D1", "#BF9EF2"]} style={{ borderRadius: 10 }}>
          <TouchableHighlight underlayColor="#BF9EF2" style={[styles.button, { backgroundColor: "transparent", borderColor: "white" }]} onPress={() => navigation.navigate("SignUpScreen")}>
            <View>
              <Text style={{ color: "white" }}>Sign Up</Text>
            </View>
          </TouchableHighlight>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.5,
    width: "100%"
  },
  microImage: {
    alignItems: "flex-start",
    width: 50,
    height: 25,
    marginTop: 45,
    //marginLeft:30
  },
  imageBackground: {
    height: 400,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: "center"
  },
  button: {
    alignItems: 'center',
    borderColor: "grey",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
});

