import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground, View, Text, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AccountNavigation } from './src/navigation/account_navigation';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {

  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  },[]);

  if(isLoading)
  {
    return <SplashScreen></SplashScreen>
  }

  return (
      <AccountNavigation></AccountNavigation>
  );
}


export default App;
