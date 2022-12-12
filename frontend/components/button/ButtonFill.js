import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blueBg, greyBg, white } from "../../utils/color";

const ButtonFill = (props) => {
    return (
        <TouchableOpacity
            style={[
                styles.btnContainer,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <Text style={{ color: white, fontFamily: "LatoXb" }}>
                {props.name}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonFill;

const styles = StyleSheet.create({
    btnContainer: {
        marginBottom: 20,
        marginHorizontal: "5%",
        borderRadius: 5,
        height: 57,
        justifyContent: "center",
        alignItems: "center",
    },
});
