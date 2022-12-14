import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { blueBg, greyBg, white } from "../../utils/color";

export default function BodyTypeCard(props) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
        >
            <View style={styles.box}>
                <Text style={styles.text}>{props.name}</Text>
            </View>
            <View style={styles.box}>
                <Image
                    style={styles.image}
                    source={props.imageLink}
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
        height: "25%",
        flexDirection: "row",
        marginBottom: 20,
    },
    box: {
        width: "50%",
    },
    image: {
        height: "100%",
        alignSelf: "center",
    },
    text: {
        color: white,
        fontFamily: "LatoB",
        fontSize: 20,
        margin: 20,
    },
});
