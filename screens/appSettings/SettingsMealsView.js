import { StyleSheet, Text, TouchableOpacity, View, Switch } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
    breakfastToggle,
    breakfastState,
} from "../../features/meals/breakfast";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { blueBg, greyHeader, white } from "../../utils/color";
import Hr from "../../components/card/Hr";
import {
    firstSnackState,
    firstSnackToggle,
} from "../../features/meals/firstSnacks";
import { launchState, launchToggle } from "../../features/meals/launch";
import {
    secondSnackState,
    secondSnackToggle,
} from "../../features/meals/secondSnacks";
import { dinnerState, dinnerToggle } from "../../features/meals/dinner";

export default function SettingsMealsView({ navigation }) {
    const dispatch = useDispatch();
    const breakfastValue = useSelector(breakfastState);
    const firstSnackValue = useSelector(firstSnackState);
    const launchValue = useSelector(launchState);
    const secondSnackValue = useSelector(secondSnackState);
    const dinnerValue = useSelector(dinnerState);

    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: greyHeader,
                    padding: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons
                            name="arrow-back-sharp"
                            size={24}
                            color={white}
                        />
                    </TouchableOpacity>

                    <Text
                        style={[
                            styles.whiteText,
                            {
                                fontFamily: "LatoB",
                                fontSize: 18,
                                marginLeft: 40,
                            },
                        ]}
                    >
                        MEAL
                    </Text>
                </View>
                <TouchableOpacity>
                    <Ionicons name="checkmark-done" size={24} color={white} />
                </TouchableOpacity>
            </View>
            <View style={styles.box}>
                <View>
                    <Text style={styles.t1}>Breakfast</Text>
                    <Text style={styles.t2}>463 Kcal</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: blueBg }}
                    thumbColor={breakfastValue ? white : "#f4f3f4"}
                    onValueChange={() => dispatch(breakfastToggle())}
                    value={breakfastValue}
                />
            </View>
            <Hr />
            <View style={styles.box}>
                <View>
                    <Text style={styles.t1}>1st Snack</Text>
                    <Text style={styles.t2}>463 Kcal</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: blueBg }}
                    thumbColor={firstSnackValue ? white : "#f4f3f4"}
                    onValueChange={() => dispatch(firstSnackToggle())}
                    value={firstSnackValue}
                />
            </View>
            <Hr />
            <View style={styles.box}>
                <View>
                    <Text style={styles.t1}>Launch</Text>
                    <Text style={styles.t2}>463 Kcal</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: blueBg }}
                    thumbColor={launchValue ? white : "#f4f3f4"}
                    onValueChange={() => dispatch(launchToggle())}
                    value={launchValue}
                />
            </View>
            <Hr />
            <View style={styles.box}>
                <View>
                    <Text style={styles.t1}>2nd snack</Text>
                    <Text style={styles.t2}>463 Kcal</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: blueBg }}
                    thumbColor={secondSnackValue ? white : "#f4f3f4"}
                    onValueChange={() => dispatch(secondSnackToggle())}
                    value={secondSnackValue}
                />
            </View>
            <Hr />
            <View style={styles.box}>
                <View>
                    <Text style={styles.t1}>Dinner</Text>
                    <Text style={styles.t2}>463 Kcal</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: blueBg }}
                    thumbColor={dinnerValue ? white : "#f4f3f4"}
                    onValueChange={() => dispatch(dinnerToggle())}
                    value={dinnerValue}
                />
            </View>
            <Hr />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1F1F1F",
    },
    whiteText: {
        color: white,
    },
    t1: {
        fontFamily: "LatoR",
        fontSize: 16,
        color: white,
    },
    t2: {
        fontFamily: "LatoR",
        fontSize: 10,
        color: "#BEBEBE",
    },
    box: {
        flexDirection: "row",
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
});
