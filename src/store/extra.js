//IMP: important

//Facebook:

// Facebook:

// //1) Run in cmd from JAVA JDK folder    
// keytool -exportcert -alias androiddebugkey -keystore "C:\Users\jay\.android\debug.keystore" | "C:\Users\jay\OpenSSL\bin\openssl" sha1 -binary | "C:\Users\jay\OpenSSL\bin\openssl" base64
  
// //Got this key  
// g8Vop/bdX/8H6Vovsto7RkF+HWY=


// //Got this key when run in cmd from folder UnMasked_demo1
// 3ZLW/TAqPvR43Zh79ejFQDOdka8=


// //Converted SHA key(Hex format) of my andorid app to base64
// //https://tomeko.net/online_tools/hex_to_base64.php?lang=en
// SHA: Xo8WBi6jzSxKDVR4drqm84yr9iU=





















// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import authReducer from "./authSlice";

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth'], // Reducer names to persist
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     // Add other reducers as needed
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false, // Disable serializable check as per your earlier issue
//   }),
// });

// let persistor = persistStore(store);

// export { store, persistor };




















// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import authReducer from "./authSlice";

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['auth'], // Reducer names to persist
// };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     // Add other reducers as needed
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck: false, // Disable serializable check as per your earlier issue
//   }),
// });

// let persistor = persistStore(store);

// export { store, persistor };
