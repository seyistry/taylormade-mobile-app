import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blackBg, blueBg, greyBg, white } from "../../utils/color";
import {
    Octicons,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Entypo,
} from "@expo/vector-icons";

const iconsDict = {
    "BUILDING STRENGTH AND ENDURANCE": (
        <MaterialCommunityIcons name="run-fast" size={24} color={white} />
    ),
    "IMPROVING HEALTH": (
        <MaterialCommunityIcons
            name="heart-plus-outline"
            size={24}
            color={white}
        />
    ),
    "LOOKING GREAT": <Entypo name="man" size={24} color={white} />,
    "IMMUNE SYSTEM SUPPORT": (
        <MaterialCommunityIcons
            name="head-plus-outline"
            size={24}
            color={white}
        />
    ),
    "IMPROVE LIBIDO": <Ionicons name="male" size={30} color={white} />,
};

export default function MotivateCard(props) {
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
                <Text style={styles.text}>{props.name}</Text>
            </View>
            <View style={{ width: "20%", alignItems: "center" }}>
                {iconsDict[props.name]}
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
