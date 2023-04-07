import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { greyBg, greyHeader, greyText, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";

export default function SubscriptionPlan({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ height: "40%", justifyContent: "center" }}>
                <Image
                    style={styles.img}
                    source={require("../../assets/img/choosePlan.png")}
                    resizeMode="contain"
                />
            </View>
            <View style={{ height: "10%" }}>
                <Text
                    style={[
                        styles.text,
                        {
                            fontFamily: "LatoXb",
                            fontSize: 20,
                            textAlign: "center",
                            paddingHorizontal: "5%",
                        },
                    ]}
                >
                    GET UNLIMITED ACCESS TO YOUR PERSONAL PLAN
                </Text>
            </View>
            <View style={{ height: "30%" }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginHorizontal: "5%",
                        alignItems: "flex-end",
                    }}
                >
                    <TouchableOpacity style={[styles.planBox, styles.planBox1]}>
                        <View
                            style={[
                                styles.boxContent,
                                { height: "20%", backgroundColor: "#03B4BF" },
                            ]}
                        >
                            <Text style={[styles.text, styles.boxTitleText]}>
                                ECONOMY
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.boxContent,
                                {
                                    height: "40%",
                                    borderTopWidth: 0.5,
                                    borderBottomWidth: 0.5,
                                    borderColor: "#363636",
                                },
                            ]}
                        >
                            <Text style={[styles.text, styles.priceText]}>
                                1
                            </Text>
                            <Text style={[styles.text, styles.durationText]}>
                                MONTH
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Billed $2.99 monthly
                            </Text>
                        </View>
                        <View style={[styles.boxContent, { height: "40%" }]}>
                            <Text style={[styles.text, styles.amountText]}>
                                $2.99
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Per month
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.planBox, styles.planBox2]}>
                        <View
                            style={[
                                styles.boxContent,
                                { height: "20%", backgroundColor: "#0ACD06" },
                            ]}
                        >
                            <Text style={[styles.text, styles.boxTitleText]}>
                                BEST VALUE
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.boxContent,
                                {
                                    height: "40%",
                                    borderTopWidth: 0.5,
                                    borderBottomWidth: 0.5,
                                    borderColor: "#363636",
                                },
                            ]}
                        >
                            <Text style={[styles.text, styles.priceText]}>
                                12
                            </Text>
                            <Text style={[styles.text, styles.durationText]}>
                                MONTHS
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Billed $23.88 yearly
                            </Text>
                        </View>
                        <View style={[styles.boxContent, { height: "40%" }]}>
                            <Text
                                style={[
                                    styles.priceMonthText,
                                    {
                                        fontSize: 12,
                                        textDecorationLine: "line-through",
                                    },
                                ]}
                            >
                                $2.99
                            </Text>
                            <Text style={[styles.text, styles.amountText]}>
                                $1.99
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Per month
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.planBox, styles.planBox1]}>
                        <View
                            style={[
                                styles.boxContent,
                                { height: "20%", backgroundColor: "#DF8908" },
                            ]}
                        >
                            <Text style={[styles.text, styles.boxTitleText]}>
                                POPULAR
                            </Text>
                        </View>
                        <View
                            style={[
                                styles.boxContent,
                                {
                                    height: "40%",
                                    borderTopWidth: 0.5,
                                    borderBottomWidth: 0.5,
                                    borderColor: "#363636",
                                },
                            ]}
                        >
                            <Text style={[styles.text, styles.priceText]}>
                                3
                            </Text>
                            <Text style={[styles.text, styles.durationText]}>
                                MONTHS
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Billed $7.47 quarterly
                            </Text>
                        </View>
                        <View style={[styles.boxContent, { height: "40%" }]}>
                            <Text
                                style={[
                                    styles.priceMonthText,
                                    {
                                        fontSize: 12,
                                        textDecorationLine: "line-through",
                                    },
                                ]}
                            >
                                $2.49
                            </Text>
                            <Text style={[styles.text, styles.amountText]}>
                                $1.99
                            </Text>
                            <Text style={[styles.priceMonthText]}>
                                Per month
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill name="GET MY PLAN" fill={true} disabled={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyHeader,
    },
    img: {
        alignSelf: "center",
        height: "90%",
    },
    text: {
        color: white,
        textAlign: "center",
    },
    planBox: {
        borderRadius: 10,
        backgroundColor: greyBg,
        overflow: "hidden",
    },
    planBox1: {
        height: 200,
        width: "28%",
        maxWidth: 120,
    },
    planBox2: {
        height: 225,
        width: "30%",
        maxWidth: 135,
    },
    boxContent: {
        justifyContent: "center",
    },
    boxTitleText: {
        fontFamily: "LatoB",
        fontSize: 10,
    },
    amountText: {
        fontFamily: "LatoB",
        fontSize: 24,
    },
    durationText: {
        fontFamily: "LatoR",
        fontSize: 16,
    },
    priceText: {
        fontFamily: "LatoR",
        fontSize: 20,
    },
    priceMonthText: {
        fontFamily: "LatoR",
        fontSize: 8,
        color: greyText,
        textAlign: "center",
    },
});
