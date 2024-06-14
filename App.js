import React, { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import { Provider } from 'react-redux';
import {Navigation} from "./src/navigation/index";
import { PersistGate } from 'redux-persist/integration/react';
//import {store, persistor} from "./src/store/store";
import { firebaseConfig } from './src/firebase/firebase';
import store from "./src/store/store";
import { Settings } from 'react-native-fbsdk-next';

firebaseConfig;

const App = () => {

  Settings.setAppID("450217887952682");
  Settings.initializeSDK();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

  if (isLoading) {
    return <SplashScreen></SplashScreen>
  }

  return (
    <Provider store={store}>
      {/* <PersistGate loading={<SplashScreen></SplashScreen>} persistor={persistor}> */}
        <Navigation></Navigation>
      {/* </PersistGate> */}
    </Provider>
  );
}


export default App;


