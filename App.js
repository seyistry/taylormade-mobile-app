import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { StyleSheet, View, SafeAreaView, Alert } from "react-native";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { blackBg, greyHeader, white } from "./utils/color";
import SplashMain from "./screens/splashscreen/SplashMain";
import React, { useEffect, useState } from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import Main from "./Main";
import { RegContext } from "./utils/RegContext";
import { FetchRegData } from "./hooks/useFetch";
import { PersistGate } from "redux-persist/integration/react";

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
            <StripeProvider
                publishableKey={"pk_test_wBBSXvCrbtZqfe5b2sLEGEWn00FL2kQWms"}
                merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
            >
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppStatusBar
                            backgroundColor={greyHeader}
                            style="light"
                        />
                        <SafeAreaView style={styles.container}>
                            <RegContext.Provider value={regLoaded}>
                                <Main />
                            </RegContext.Provider>
                        </SafeAreaView>
                    </PersistGate>
                </Provider>
            </StripeProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
