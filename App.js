import * as SplashScreen from 'expo-splash-screen';

import {OpenSans_400Regular, OpenSans_700Bold, useFonts} from '@expo-google-fonts/open-sans'; //importamos las fuentes

import React from 'react';
import ShopNavigator from './src/Navigators/ShopNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync(); 
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <ShopNavigator /> // lo primero que importamos
  );
}
