import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { blueBg } from "../../utils/color";

export default function Loading() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <ActivityIndicator size="large" color={blueBg} />
        </View>
    );
}
