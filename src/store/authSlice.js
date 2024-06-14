import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, signInWithCredential } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth } from '../firebase/firebase'; // Adjust the path as per your Firebase setup
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import authfirebase from "@react-native-firebase/auth";
// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
//      console.log("Cl", userCredential.user.uid);
      await AsyncStorage.setItem("userToken", JSON.stringify({ email, password }));
      setUser(userCredential);
      // console.log("ssssssssssssssssssssss",setUser(userCredential));
      return userCredential.user.toJSON();
    } catch (error) {
      throw error; // This will be automatically handled in the rejected action
    }
  }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await signOut(auth);
      authfirebase().signOut().then(()=>{console.log("Google-Sign OUT")})
      await GoogleSignin.revokeAccess();
      return null; // Successfully logged out, return null or appropriate data
    } catch (error) {
      throw error; // This will be automatically handled in the rejected action
    }
  }
);

export const registerUser=createAsyncThunk(
  'auth/registerUser',
  async({email,password})=>{
    try{
      const userCredential=await createUserWithEmailAndPassword(auth,email,password);
      await AsyncStorage.setItem("userToken", JSON.stringify({email,password}));
      setUser(userCredential);
      return userCredential.user.toJSON();
    }
    catch(error){
      throw error;
    }
  }
)


export const signInWithGoogle=createAsyncThunk(
  "auth/signInWithGoogle",
  async()=>{
    try{
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
      const {idToken} = await GoogleSignin.signIn();
      const credential=authfirebase.GoogleAuthProvider.credential(idToken);
      const userCredential=await authfirebase().signInWithCredential(credential);
      const email=userCredential.user.email;
      const uid=userCredential.user.uid;
      await AsyncStorage.setItem("userToken", JSON.stringify({email,uid}));
      return userCredential.user.toJSON();
    }
    catch(error)
    {
      console.log("Ddd",error);
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
      });
  },
});

export const { setUser, clearUser } = authSlice.actions; // Removed logoutUser action from exports
export default authSlice.reducer;
