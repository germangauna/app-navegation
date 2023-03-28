import BreadDetailScreen from '../Screens/BreadDetailScreen'
import { COLORS } from  '../Constantes/Colors'
import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryBreadScreen from '../Screens/CategoryBreadScreen'
import { Header } from 'react-native/Libraries/NewAppScreen'
import {NavigationContainer} from '@react-navigation/native'
import { Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
// lo primero que tenesmo que llamar para   ue nos funcione NavigationContainer
// initialRouteName seria como el index 
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                 HeaderStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '' },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    HeaderTitleStyle: {
                        fontFamily: 'OpenSans_700Bold'
                    }
                }}
    
            > 
            <Stack.Screen
                    name="Home"
                    component={CategoriesScreen}
                    options={{
                        title:'Mi Pan'// ya no toma como titulo a home
                    }}
                    
                />
                <Stack.Screen
                    name="Products"
                    component={CategoryBreadScreen}
                    options={({ route}) => ({ title: route.params.name})}
                />
            <Stack.Screen name="Detail" component={BreadDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator
