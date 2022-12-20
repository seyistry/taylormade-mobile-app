import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { blueBg, greyBg, white } from "../../utils/color";

export default function DailyCard(props) {
    const link = props.imgLink;
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
        >
            <Text style={styles.t1}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        borderRadius: 5,
        height: "25%",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    t1: {
        color: white,
        fontFamily: "LatoXb",
        fontSize: 18,
    },
});
