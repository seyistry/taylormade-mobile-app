import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blackBg, blueBg, greyBg, white } from "../../utils/color";
import { Octicons } from "@expo/vector-icons";

export default function MotivateCard(props) {
    const { description, image } = props;
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
        >
            <View style={{ width: "20%", paddingLeft: 20 }}>
                {!props.fill ? (
                    <Octicons name="dot-fill" size={45} color={blackBg} />
                ) : (
                    <Octicons
                        name="check-circle-fill"
                        size={24}
                        color={white}
                    />
                )}
            </View>

            <View style={{ width: "60%" }}>
                <Text style={styles.text}>{description}</Text>
            </View>
            <View style={{ width: "20%", alignItems: "center" }}>
                <Image
                    style={{ height: "30%", width: "30%" }}
                    source={{ uri: image }}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: "5%",
        borderRadius: 5,
        height: "15%",
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "LatoB",
        fontSize: 16,
        color: white,
    },
});
