import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { blueBg, white } from "../../utils/color";

export default function PlanMainButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{ fontFamily: "LatoXb", fontSize: 14, color: white }}>
                START WORKOUT
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 30,
        backgroundColor: blueBg,
        justifyContent: "center",
        alignItems: "center",
        width: 180,
    },
});
