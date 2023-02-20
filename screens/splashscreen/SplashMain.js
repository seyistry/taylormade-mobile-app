import { View, StyleSheet } from "react-native";
import React from "react";
import { blackBg } from "../../utils/color";
import SplashImg from "../../assets/img/splashImg";

export default function SplashMain() {
    return (
        <View style={styles.container}>
            <SplashImg />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
        alignItems: "center",
        justifyContent: "center",
    },
});
