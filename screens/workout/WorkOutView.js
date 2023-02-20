import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackBg } from "../../utils/color";

export default function WorkOutView() {
    return (
        <View style={styles.container}>
            <Text>WorkOutView</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
