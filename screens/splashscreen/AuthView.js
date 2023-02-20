import { Button, Image, Text, View } from "react-native";
import React from "react";
import StyleSheet from "react-native-media-query";
import { blackBg } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import ButtonFillNone from "../../components/button/ButtonFillNone";

export default function AuthView({ navigation }) {
    const handlePressReg = () => {
        navigation.navigate("STEP 1 OF 20");
    };
    const handlePressLog = () => {
        navigation.navigate("Login");
    };
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={require("../../assets/img/authImg.png")}
                />
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={[styles.text, styles.t1]}>CREATE YOUR</Text>
                <Text style={[styles.text, styles.t2]}>IDEAL BODY</Text>
                <Text style={styles.t3}>
                    Develop your dream muscle body with our training{"\n"}mobile
                    app whether at home without equipment{"\n"}or at the gym
                </Text>
            </View>
            <View
                style={{
                    height: "30%",
                    justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <ButtonFill
                    name="REGISTER"
                    fill={true}
                    onPress={handlePressReg}
                />
                <ButtonFillNone onPress={handlePressLog} name="LOG IN" />
            </View>
        </View>
    );
}

const { ids, styles } = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    imgContainer: {
        height: "50%",
        justifyContent: "center",
        alignItems: "center",
        // borderColor: "white",
        // borderWidth: 2,
    },
    image: {
        width: 239,
        "@media (max-width: 700px)": {
            width: 220,
            height: 350,
        },
        "@media (max-width: 400px)": {
            width: 190,
            height: 300,
        },
    },
    text: {
        color: "#FFFFFF",
    },
    t1: {
        fontFamily: "LatoR",
        fontSize: 34,
        "@media (max-width: 700px)": {
            fontSize: 40,
        },
        "@media (max-width: 400px)": {
            fontSize: 32,
        },
    },
    t2: {
        fontFamily: "LatoXb",
        fontSize: 34,
        "@media (max-width: 700px)": {
            fontSize: 40,
        },
        "@media (max-width: 400px)": {
            fontSize: 32,
        },
    },
    t3: {
        color: "#BDBDBD",
        textAlign: "center",
        fontSize: 16,
        fontFamily: "LatoR",
        "@media (max-width: 700px)": {
            fontSize: 17,
            paddingVertical: 20,
        },
        "@media (max-width: 400px)": {
            fontSize: 14,
            paddingVertical: 10,
        },
    },
});
