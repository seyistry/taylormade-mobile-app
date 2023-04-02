import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import { Provider } from "react-redux";
import store from "./store";
import { StyleSheet, View, SafeAreaView, Alert } from "react-native";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { blackBg, greyHeader, white } from "./utils/color";
import SplashMain from "./screens/splashscreen/SplashMain";
import React, { useEffect, useState } from "react";
import PreAuthStack from "./navigation/PreAuthStack";
import { useSelector, useDispatch } from "react-redux";
import PlanView from "./screens/plan/PlanView";
import MealView from "./screens/meal/MealView";
import MealInfo from "./screens/meal/MealInfo";
import Tabs from "./navigation/Tabs";
import PostAuthStack from "./navigation/PostAuthStack";
import Main from "./Main";
import {
    bodyTypeUrl,
    fitnessLevelUrl,
    goalUrl,
    hindranceUrl,
    motiveUrl,
    targetAreaURL,
    walkoutLocationUrl,
} from "./utils/apiLinks";
import { RegContext } from "./utils/RegContext";
import { FetchRegData } from "./hooks/useFetch";

function AppStatusBar({ backgroundColor, ...props }) {
    return (
        <SafeAreaView
            style={{ backgroundColor, height: Constants.statusBarHeight }}
        >
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </SafeAreaView>
    );
}

let customFonts = {
    LatoXb: require("./assets/fonts/Lato-Black.ttf"),
    LatoR: require("./assets/fonts/Lato-Regular.ttf"),
    LatoB: require("./assets/fonts/Lato-Bold.ttf"),
    LatoL: require("./assets/fonts/Lato-Light.ttf"),
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [regLoaded, setRegLoaded] = useState(false);

    const { data, isLoading } = FetchRegData();

    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        setTimeout(() => {
            setFontsLoaded(true);
        }, 1000);
    }

    useKeepAwake();

    useEffect(() => {
        loadFontsAsync();
        if (isLoading === false) {
            setRegLoaded(data);
        }
    }, [fontsLoaded, isLoading]);

    if (!fontsLoaded || !regLoaded) {
        return (
            <>
                <AppStatusBar backgroundColor={blackBg} style="light" />
                <View style={styles.container}>
                    <SplashMain />
                </View>
            </>
        );
    } else {
        return (
            <Provider store={store}>
                <AppStatusBar backgroundColor={greyHeader} style="light" />
                <SafeAreaView style={styles.container}>
                    <RegContext.Provider value={regLoaded}>
                        <PreAuthStack />
                    </RegContext.Provider>
                </SafeAreaView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
