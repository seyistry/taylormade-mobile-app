import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { white } from "../../utils/color";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

const size = 22;
const icons = {
    person: <Ionicons name="person" size={size} color={white} />,
    meals: (
        <MaterialCommunityIcons name="food-variant" size={size} color={white} />
    ),
    training: (
        <MaterialCommunityIcons
            name="weight-lifter"
            size={size}
            color={white}
        />
    ),
    contact: (
        <MaterialCommunityIcons
            name="phone-message"
            size={size}
            color={white}
        />
    ),
    rate: <Ionicons name="star-sharp" size={size} color={white} />,
    help: <Ionicons name="help" size={size} color={white} />,
};

export default function SettingsCard(props) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                justifyContent: "space-between",
            }}
            onPress={props.onPress}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {icons[props.type]}
                <Text style={styles.text}>{props.name}</Text>
            </View>

            <Ionicons
                name="ios-chevron-forward-sharp"
                size={24}
                color={white}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 16,
        paddingLeft: 20,
    },
});
