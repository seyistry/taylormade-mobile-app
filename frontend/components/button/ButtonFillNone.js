import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { white } from "../../utils/color";

const ButtonFillNone = () => {
    return (
        <TouchableOpacity style={styles.btnContainer}>
            <Text style={{ color: white, fontFamily: "LatoXb" }}>LOG IN</Text>
        </TouchableOpacity>
    );
};

export default ButtonFillNone;

const styles = StyleSheet.create({
    btnContainer: {
        marginHorizontal: "5%",
        borderRadius: 5,
        height: 57,
		borderWidth: 1,
		borderColor: white,
        justifyContent: "center",
        alignItems: "center",
    },
});
