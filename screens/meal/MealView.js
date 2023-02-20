import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { blackBg, greyBg, greyHeader, white } from "../../utils/color";
import { Octicons, Ionicons } from "@expo/vector-icons";
import MealCard from "../../components/card/MealCard";

export default function MealView() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEAL PLAN</Text>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        // alignItems: "center",
                        marginVertical: 30,
                        marginHorizontal: "5%",
                    }}
                >
                    <View style={styles.circle}>
                        <Octicons name="chevron-left" size={24} color={white} />
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons
                            name="calendar-outline"
                            size={24}
                            color={white}
                        />
                        <Text style={[styles.text, { paddingLeft: 10 }]}>
                            Today
                        </Text>
                    </View>
                    <View style={styles.circle}>
                        <Octicons
                            name="chevron-right"
                            size={24}
                            color={white}
                        />
                    </View>
                </View>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: "5%",
                        }}
                    >
                        <Text style={styles.text}>Breakfast</Text>
                        <Ionicons name="ios-shuffle" size={24} color={greyBg} />
                    </View>
                    <MealCard />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: "5%",
                        }}
                    >
                        <Text style={styles.text}>1st Snack</Text>
                        <Ionicons name="ios-shuffle" size={24} color={greyBg} />
                    </View>
                    <MealCard />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: "5%",
                        }}
                    >
                        <Text style={styles.text}>Lunch</Text>
                        <Ionicons name="ios-shuffle" size={24} color={greyBg} />
                    </View>
                    <MealCard />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: "5%",
                        }}
                    >
                        <Text style={styles.text}>2nd Snack</Text>
                        <Ionicons name="ios-shuffle" size={24} color={greyBg} />
                    </View>
                    <MealCard />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginHorizontal: "5%",
                        }}
                    >
                        <Text style={styles.text}>Dinner</Text>
                        <Ionicons name="ios-shuffle" size={24} color={greyBg} />
                    </View>
                    <MealCard />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    title: {
        fontFamily: "LatoB",
        fontSize: 18,
        padding: 20,
        color: white,
        backgroundColor: greyHeader,
    },
    circle: {
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: greyBg,
        borderRadius: 30,
    },
    text: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 16,
    },
});
