import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { greyBg, greyText, white } from "../../utils/color";
import PlanMainButton from "../button/PlanMainButton";

export default function PlanActivityCard(props) {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "space-around" }}>
                <View>
                    <Text style={styles.t1}>STRENGTH: HOME</Text>
                    <Text style={styles.t2}>Chest & Shoulders</Text>
                </View>
                <PlanMainButton onPress={props.onPress} />
            </View>
            <View
                style={{
                    flex: 1,
                    // borderWidth: 1,
                }}
            >
                <Image
                    style={{
                        flex: 1,
                        width: 90,
                        height: "90%",
                        alignSelf: "flex-end",
                        // justifyContent: "flex-start",
                        // alignContent: "flex-start",
                        // alignItems: "flex-start",
                        // borderWidth: 1,
                    }}
                    source={require("../../assets/img/authImg.png")}
                    resizeMode={"contain"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        backgroundColor: greyBg,
        borderRadius: 5,
        marginHorizontal: "5%",
        paddingLeft: 20,
        flexDirection: "row",
        marginBottom: 10,
    },
    t1: {
        color: white,
        fontFamily: "LatoB",
        fontSize: 16,
    },
    t2: {
        fontFamily: "LatoR",
        fontSize: 14,
        color: greyText,
    },
});
