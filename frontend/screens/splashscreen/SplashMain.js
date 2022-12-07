import { View, Image } from "react-native";
import React from "react";
import { blackBg } from "../../utils/color";
import StyleSheet from "react-native-media-query";

export default function SplashMain() {
    return (
        <View style={styles.container} data-media={ids.container}>
            <Image
                style={styles.logo}
                data-media={ids.logo}
                source={require("../../assets/splash.png")}
            />
        </View>
    );
}

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 100,
        "@media (max-width: 700px)": {
            width: 300,
            height: 260,
        },
        "@media (max-width: 400px)": {
            width: 169,
            height: 145,
        },
    },
});
