import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";

import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingsScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

const AppNavigator = createStackNavigator(
    {
        Details: HomeScreen,
        Sign_Up: SettingsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'white',

            },
            headerTintColor: "black",
            headerTitleAlign:'center',


        },
    }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
    const [fontsLoaded]=useFonts({
        'MyriadProBold': require('./assets/font/MyriadProBold.ttf'),
        'MyriadProCond': require('./assets/font/MyriadProCond.ttf'),
    });
    if (!fontsLoaded) {
        return  <AppLoading/>;
    }
    return (
        <Navigator>
            <HomeScreen />
        </Navigator>
    );
}
