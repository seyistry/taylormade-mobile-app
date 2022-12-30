import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { blackBg, greyHeader, white } from "./utils/color";
import SplashMain from "./screens/splashscreen/SplashMain";
import React, { useEffect, useState } from "react";
import PreAuthStack from "./navigation/PreAuthStack";
import PlanView from "./screens/plan/PlanView";
import MealView from "./screens/meal/MealView";
import MealInfo from "./screens/meal/MealInfo";
import Tabs from "./navigation/Tabs";

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

    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        await setTimeout(() => {
            setFontsLoaded(true);
        }, 1000);
    }

    useEffect(() => {
        loadFontsAsync();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
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
            <>
                <AppStatusBar backgroundColor={greyHeader} style="light" />
                <View style={styles.container}>
                    <Tabs />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: white,
        backgroundColor: blackBg,
    },
});
