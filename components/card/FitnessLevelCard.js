import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { blueBg, greyBg, white } from "../../utils/color";




export default function FitnessLevelCard(props) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { backgroundColor: props.fill ? blueBg : greyBg },
            ]}
            onPress={props.onPress}
        >
            <View style={{ justifyContent: "center" }}>
                <Text style={styles.t1}>{props.name}</Text>
                <Text style={styles.t2}>{props.nameSub}</Text>
            </View>
            <View style={{ justifyContent: "center", marginRight: 20 }}>
                <Image
                    style={{ height: 60, width: 60 }}
                    source={{ uri: props.imageLink }}
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
        justifyContent: "space-between",
    },
    t1: {
        color: white,
        fontFamily: "LatoB",
        fontSize: 20,
        marginLeft: 20,
    },
    t2: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 12,
        marginLeft: 20,
    },
});
