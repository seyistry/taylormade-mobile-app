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

    async function loadFontsAsync() {
        await Font.loadAsync(customFonts);
        await setTimeout(() => {
            setFontsLoaded(true);
        }, 1000);
    }

    function fetchData() {
        Promise.all([
            fetch(goalUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(motiveUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(bodyTypeUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(targetAreaURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(fitnessLevelUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(hindranceUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(walkoutLocationUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
        ])
            .then((responses) => {
                // Get a JSON object from each of the responses
                return Promise.all(
                    responses.map((response) => {
                        // console.log(response.json());
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw new Error("Server Error!");
                        }
                    })
                );
            })
            .then((data) => {
                // Log the data to the console
                // You would do something with both sets of data here
                // console.log(data);
                setRegLoaded(data);
            })
            .catch((error) => {
                // if there's an error, log it
                Alert.alert("Network error ", "Unable to connect to network", [
                    { text: "Try Again", onPress: () => fetchData() },
                ]);
            });
    }

    useKeepAwake();

    useEffect(() => {
        loadFontsAsync();
        if (fontsLoaded === false) {
            fetchData();
        }
    }, [fontsLoaded, regLoaded]);

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
                <RegContext.Provider value={regLoaded}>
                    <PostAuthStack />
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
