import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import { Provider } from "react-redux";
import store from "./store";
import { StyleSheet, View, SafeAreaView } from "react-native";
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
import { goalUrl, motiveUrl } from "./utils/apiLinks";
import { RegContext } from "./utils/RegContext";

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
    const [regLoaded, setRegLoaded] = useState();

    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        await setTimeout(() => {
            setFontsLoaded(true);
        }, 1000);
    }

    useKeepAwake();

    useEffect(() => {
        loadFontsAsync();
        Promise.all([
            fetch(goalUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(motiveUrl),
        ])
            .then((responses) => {
                // Get a JSON object from each of the responses
                return Promise.all(
                    responses.map((response) => {
                        return response.json();
                    })
                );
            })
            .then((data) => {
                // Log the data to the console
                // You would do something with both sets of data here
                setRegLoaded(data);
            })
            .catch((error) => {
                // if there's an error, log it
                console.log(error);
            });
    }, [fontsLoaded, regLoaded]);

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
            <Provider store={store}>
                <AppStatusBar backgroundColor={greyHeader} style="light" />
                <RegContext.Provider value={regLoaded}>
                    <Main />
                </RegContext.Provider>
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
