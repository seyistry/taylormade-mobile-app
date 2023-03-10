import React, { useEffect, useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
    blackBg,
    blueBg,
    greyHeader,
    greyText,
    white,
} from "../../utils/color";
import { Bar } from "react-native-progress";
import { Ionicons } from "@expo/vector-icons";
import CountDown from "../../utils/CountDown";

export default function ActiveExercise({ navigation }) {
    const [progress, setProgress] = useState(1);
    const handlePressForward = async () => {
        if (progress < 20) {
            await setTimeout(() => {
                setProgress(progress + 1);
            }, 1000);
        }
    };
    const handlePressBackward = async () => {
        if (progress > 1) {
            await setTimeout(() => {
                setProgress(progress - 1);
            }, 1000);
        }
    };

    const handlePressCancel = () => {
        navigation.navigate("Exercise Details");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: greyHeader,
                    paddingTop: 20,
                    paddingBottom: 10,
                    paddingHorizontal: "5%",
                }}
            >
                <Bar
                    progress={progress / 20}
                    width={null}
                    color={white}
                    unfilledColor="#545454"
                    borderWidth={0}
                />
                <View
                    style={{
                        paddingTop: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={styles.t1}>{progress} of 20</Text>
                    <TouchableOpacity onPress={handlePressCancel}>
                        <Ionicons
                            name="ios-close-sharp"
                            size={24}
                            color={white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: "65%" }}></View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: greyHeader,
                    justifyContent: "space-between",
                    // height: "25%",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CountDown
                        id={`${progress}`}
                        until={30}
                        size={40}
                        onFinish={handlePressForward}
                        digitStyle={{ backgroundColor: "transparent" }}
                        digitTxtStyle={{
                            color: white,
                            fontSize: 70,
                            fontWeight: "300",
                        }}
                        timeToShow={["M", "S"]}
                        separatorStyle={{ color: white }}
                        timeLabels={{ m: null, s: null }}
                        showSeparator
                    />
                    <View
                        style={{
                            backgroundColor: "#545454",
                            width: 36,
                            height: 36,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5,
                            position: "absolute",
                            left: "85%",
                            top: 38,
                        }}
                    >
                        <Ionicons
                            name="volume-medium"
                            size={24}
                            color={white}
                        />
                    </View>
                </View>
                <View
                    style={[
                        styles.btnContainer,
                        {
                            backgroundColor: blueBg,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 5,
                        },
                    ]}
                    // onPress={props.onPress}
                    // disabled={props.disabled}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                height: 45,
                                width: 57,
                                backgroundColor:
                                    progress !== 1 ? white : greyHeader,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 5,
                            }}
                            onPress={handlePressBackward}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color={progress !== 1 ? blueBg : white}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                paddingLeft: 20,
                                maxWidth: "80%",
                                overflow: "hidden",
                            }}
                        >
                            <Text
                                style={{
                                    color: white,
                                    fontFamily: "LatoR",
                                    fontSize: 12,
                                    marginBottom: 5,
                                }}
                            >
                                Next:
                            </Text>
                            <Text
                                style={{
                                    color: white,
                                    fontFamily: "LatoB",
                                    fontSize: 12,
                                }}
                            >
                                Dynamic Chest Stretch
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            height: 45,
                            width: 57,
                            backgroundColor: white,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5,
                        }}
                        onPress={handlePressForward}
                    >
                        <Ionicons
                            name="arrow-forward"
                            size={24}
                            color={blueBg}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    btnContainer: {
        marginBottom: 20,
        marginHorizontal: "5%",
        borderRadius: 10,
        height: 57,
        justifyContent: "center",
        alignItems: "center",
    },
    t1: {
        fontFamily: "LatoB",
        fontSize: 14,
        color: white,
    },
});
