import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { greyHeader, white } from "../../utils/color";

export default function SingleDateCard(props) {
    const currDate = new Date();
    if (
        props.selectedDate.getDay() === props.index.getDay() &&
        props.selectedDate.getDate() === props.index.getDate() &&
        props.selectedDate.getMonth() === props.index.getMonth()
    ) {
        return (
            <TouchableOpacity
                style={[
                    styles.container,
                    {
                        backgroundColor: greyHeader,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                    },
                ]}
                onPress={props.onPress}
            >
                <Text
                    style={[
                        styles.t1,
                        {
                            fontSize: 10,
                            marginTop: 5,
                        },
                    ]}
                >
                    {props.dayOfWeek}
                </Text>
                <Text style={styles.t2}>{props.dayOfMonth}</Text>
            </TouchableOpacity>
        );
    } else if (
        currDate.getDay() === props.index.getDay() &&
        currDate.getDate() === props.index.getDate() &&
        currDate.getMonth() === props.index.getMonth()
    ) {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={styles.t1}>{props.dayOfWeek}</Text>
                <Text style={styles.t2}>{props.dayOfMonth}</Text>
            </TouchableOpacity>
        );
    } else if (currDate > props.index) {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={[styles.t1, { color: "#444444" }]}>
                    {props.dayOfWeek}
                </Text>
                <Text style={[styles.t2, { color: "#444444" }]}>
                    {props.dayOfMonth}
                </Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <Text style={styles.t1}>{props.dayOfWeek}</Text>
                <Text style={styles.t2}>{props.dayOfMonth}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // marginBottom: 40,
        // flex: 1,
        width: 40,
        height: 60,
        alignItems: "center",
        // marginRight: 10,
    },
    t1: {
        fontFamily: "LatoR",
        fontSize: 12,
        color: white,
        marginBottom: 10,
    },
    t2: {
        fontFamily: "LatoB",
        fontSize: 18,
        color: white,
    },
});
