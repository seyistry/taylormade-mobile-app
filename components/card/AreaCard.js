import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blueBg, greyBg, white } from "../../utils/color";

export default function AreaCard(props) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
        >
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        borderRadius: 5,
        height: "25%",
        width: "25%",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: white,
        fontFamily: "LatoXb",
        fontSize: 12,
    },
});
