import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, signInWithCredential, TwitterAuthProvider } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase/firebase'; // Adjust the path as per your Firebase setup
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authfirebase from "@react-native-firebase/auth";
import { LoginManager, AccessToken, Settings } from "react-native-fbsdk-next";
import { Alert, NativeModules } from 'react-native';

const { RNTwitterSignIn } = NativeModules;



// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const userCredential = await authfirebase().signInWithEmailAndPassword(email, password);
      //      console.log("Cl", userCredential.user.uid);
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, password }));
      setUser(userCredential);
      // const currentUser=authfirebase().currentUser;
      // console.log(currentUser, "ok");
      // console.log("ssssssssssssssssssssss",setUser(userCredential));
      return userCredential.user.toJSON();
    } catch (error) {
      throw error; // This will be automatically handled in the rejected action
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    try {

      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.clear();
      
      const currentUser=authfirebase().currentUser;

      if(!currentUser){
        console.log("No user is currently logged in");
        return null;
      }
      
      const providerId=currentUser.providerData[0]?.providerId;
      console.log(providerId, "ccccssss");
      if(providerId==="google.com")
      {
        await signOut(auth);
        await GoogleSignin.revokeAccess();
      }
      // else if(providerId="facebook.com")
      // {
      //   console.log("C");
      //   LoginManager.logOut();
      //   console.log("d");
      // }
      // else{

      // }
      await authfirebase().signOut().then(() => { console.log("Sign OUT") }).catch((error)=>{console.log("error-logout",error)})
      console.log("ee");
      console.log("Dd");
      return null; // Successfully logged out, return null or appropriate data
    } catch (error) {
      console.log("Error: Log out", error);
      throw error; // This will be automatically handled in the rejected action
    }
  }
);


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password }) => {
    try {
      const userCredential = await authfirebase().createUserWithEmailAndPassword(email, password);
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, password }));
      setUser(userCredential);
      return userCredential.user.toJSON();
    }
    catch (error) {
      Alert.alert("Currently, out Service is down! Please try again later!");
      throw error;
    }
  }
)


export const signInWithGoogle = createAsyncThunk(
  "auth/signInWithGoogle",
  async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const credential = authfirebase.GoogleAuthProvider.credential(idToken);
      const userCredential = await authfirebase().signInWithCredential(credential);
      const email = userCredential.user.email;
      const uid = userCredential.user.uid;
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, uid }));
      return userCredential.user.toJSON();
    }
    catch (error) {
      Alert.alert("Currently, Google Service is down! Please try another option!");
      console.log("Ddd", error);
      throw error;
    }
  }
)


export const signInWithFacebook = createAsyncThunk(
  "auth/signInWithFacebook",
  async () => {
    try {
      console.log("c");
      Settings.setAppID("450217887952682");
      Settings.initializeSDK();

      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      console.log("e", result);
      if (result.isCancelled) {
        console.log("User cancelled the login process");
      }
      else {
        console.log("Login Success with permission: " + result.grantedPermissions.toString());
      }
      console.log("res.....", result);
      const data = await AccessToken.getCurrentAccessToken();
      console.log("data.....", data);

      if (!data) {
        throw "Something went wrong obtaining access token";
      }

      const facebookCredential = authfirebase.FacebookAuthProvider.credential(data.accessToken);
      console.log("dddddddddddddd", facebookCredential);
      const userCredential = await authfirebase().signInWithCredential(facebookCredential);
      console.log(userCredential, "ffffffffffffffff");
      const email = userCredential.user.email;
      const uid = userCredential.user.uid;
      console.log(email, uid);
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, uid }));
      return userCredential.user.toJSON();

    }
    catch (error) {
      Alert.alert("Currently, Facebook Service is down! Please try another option!");
      console.log("ereeeeeee", error);
      throw error;
    }
  }
)


export const signInWithTwitter=createAsyncThunk(
  "auth/signInWithTwitter",
  async()=>{
    await RNTwitterSignIn.init('1zki592REzcoqx3WRdfgvFAw2', 'ILSF8DHWsGEooSiTufO4MdREjQCY0ZT9wFvte7kLdnBzQaa8A6').then(() =>
      console.log('Twitter SDK initialized'),
    );
    try{      
      console.log("Ddd", RNTwitterSignIn);
      const {authToken, authTokenSecret}=await RNTwitterSignIn.logIn();
      console.log(authToken,authTokenSecret);
      console.log("Dddddd");
      const l=TwitterAuthProvider.credential(authToken, authTokenSecret);
      console.log("ll",l);
      const twitterCredential=await authfirebase.TwitterAuthProvider.credential(authToken,authTokenSecret);
      console.log(twitterCredential, "eeee");
      const userCredential=await authfirebase().signInWithCredential(twitterCredential);
      const email = userCredential.user.email;
      const uid = userCredential.user.uid;
      console.log(email, uid);
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, uid }));
      return userCredential.user.toJSON();
    }
    catch(error){
      Alert.alert("Currently, Twitter Service is down! Please try another option!");
      console.log(error,"err");
      throw error;
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error message from rejected action
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null; // Clear user on successful logout
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle error message from rejected action
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signInWithFacebook.pending, (state) => {
        console.log("addCaasee");
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithFacebook.fulfilled, (state, action) => {
        console.log("Fulll");

        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithFacebook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signInWithTwitter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInWithTwitter.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInWithTwitter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export const { setUser, clearUser } = authSlice.actions; // Removed logoutUser action from exports
export default authSlice.reducer;
