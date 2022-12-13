import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackBg, white } from "../../utils/color";

const StepThree = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.text}>WHAT MOTIVATES YOU TO EXERCISE?</Text>
            </View>
        </View>
    );
};

export default StepThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
        textAlign: "center",
        fontFamily: "LatoXb",
        fontSize: 20,
    },
});
