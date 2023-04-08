import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import WheelPicker from "react-native-wheely";
import { blackBg, blueBg, greyBg, white } from "../../utils/color";
import { Entypo } from "@expo/vector-icons";
import { storeRegData } from "../../utils/api";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const KgRange = range(30, 150);
const IbRange = range(66, 330);
const dotRange = range(0, 9);

export default function StepTwelve({ navigation }) {
    const [selectedIb, setSelectedIb] = useState(0);
    const [selectedIbDot, setSelectedIbDot] = useState(0);
    const [selectedKg, setSelectedKg] = useState(0);
    const [selectedKgDot, setSelectedKgDot] = useState(0);
    const [unit, setUnit] = useState("kg");
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
        storeRegData({
            current_weight: KgRange[selectedKg] + dotRange[selectedKgDot] / 10,
        });
        navigation.navigate("STEP 13 OF 20");
    };

    function handleIbChange(index) {
        const value = Math.trunc(
            (IbRange[index] + dotRange[selectedIbDot] / 10) * 0.45359237
        );
        setSelectedKg(() => KgRange.indexOf(value));
        setSelectedKgDot(0);
        setChange(true);
        setSelectedIb(index);
    }

    function handleIbDotChange(index) {
        const value = Math.trunc(
            (IbRange[selectedIb] + dotRange[index] / 10) * 0.45359237
        );
        setSelectedKg(() => KgRange.indexOf(value));
        setSelectedKgDot(0);
        setChange(true);
        setSelectedIbDot(index);
    }

    function handleKgChange(index) {
        const value = Math.trunc(
            (KgRange[index] + dotRange[selectedKgDot] / 10) / 0.45359237
        );
        setSelectedIb(() => IbRange.indexOf(value));
        setSelectedIbDot(0);
        setChange(true);
        setSelectedKg(index);
    }

    function handleKgDotChange(index) {
        const value = Math.trunc(
            (KgRange[selectedKg] + dotRange[index] / 10) / 0.45359237
        );
        setSelectedIb(() => IbRange.indexOf(value));
        setSelectedIbDot(0);
        setChange(true);
        setSelectedKgDot(index);
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "15%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: "10%",
                }}
            >
                <Text
                    style={[
                        styles.text,
                        {
                            fontFamily: "LatoXb",
                            fontSize: 20,
                            textAlign: "center",
                        },
                    ]}
                >
                    WHAT IS YOUR CURRENT WEIGHT?
                </Text>
            </View>
            <View
                style={{
                    height: "25%",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {!change ? null : unit === "kg" ? (
                    <Text
                        style={[
                            styles.text,
                            { fontFamily: "LatoL", fontSize: 64 },
                        ]}
                    >
                        {KgRange[selectedKg] + "." + dotRange[selectedKgDot]}
                        <Text
                            style={{
                                fontFamily: "LatoR",
                                fontSize: 32,
                                color: white,
                            }}
                        >
                            {" "}
                            kg
                        </Text>
                    </Text>
                ) : (
                    <Text
                        style={[
                            styles.text,
                            { fontFamily: "LatoL", fontSize: 64 },
                        ]}
                    >
                        {IbRange[selectedIb] + "." + dotRange[selectedIbDot]}
                        <Text
                            style={{
                                fontFamily: "LatoR",
                                fontSize: 32,
                                color: white,
                            }}
                        >
                            {" "}
                            Ib
                        </Text>
                    </Text>
                )}
            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    marginVertical: 30,
                }}
            >
                <TouchableOpacity
                    style={[
                        styles.smallCard,
                        {
                            borderTopStartRadius: 5,
                            borderBottomStartRadius: 5,
                            borderLeftWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: unit === "Ib" ? blueBg : greyBg,
                            backgroundColor: unit === "Ib" ? blueBg : null,
                        },
                    ]}
                    onPress={() => setUnit("Ib")}
                >
                    <Text style={[styles.text, styles.t1]}>Ib</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.smallCard,
                        {
                            borderTopEndRadius: 5,
                            borderBottomEndRadius: 5,
                            backgroundColor: blueBg,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: unit === "kg" ? blueBg : greyBg,
                            backgroundColor: unit === "kg" ? blueBg : null,
                        },
                    ]}
                    onPress={() => setUnit("kg")}
                >
                    <Text style={[styles.text, styles.t1]}>kg</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 60,
                    backgroundColor: change ? blueBg : greyBg,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginBottom: 20,
                }}
                disabled={!change}
                onPress={handleSubmit}
            >
                <Text
                    style={[
                        styles.text,
                        { color: white, fontFamily: "LatoXb" },
                    ]}
                >
                    CONTINUE
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height: "30%",
                }}
            >
                {unit === "kg" ? (
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <View></View>
                        <WheelPicker
                            selectedIndex={selectedKg}
                            options={KgRange}
                            onChange={(index) => {
                                handleKgChange(index);
                            }}
                            itemHeight={60}
                            itemStyle={{ alignItems: "flex-end" }}
                            selectedIndicatorStyle={styles.wheelIndicator}
                            itemTextStyle={styles.wheelText}
                            containerStyle={styles.wheelContainer}
                            // scaleFunction={(x) => 0.7}
                            decelerationRate="fast"
                        />
                        <View
                            style={{
                                zIndex: 1,
                                width: "100%",
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 60,
                                borderTopWidth: 0.5,
                                borderBottomWidth: 0.5,
                                borderColor: greyBg,
                            }}
                        >
                            <Entypo name="dot-single" size={18} color={white} />
                        </View>
                        <WheelPicker
                            selectedIndex={selectedKgDot}
                            options={dotRange}
                            onChange={(index) => {
                                handleKgDotChange(index);
                            }}
                            itemHeight={60}
                            itemStyle={{ alignItems: "flex-start" }}
                            selectedIndicatorStyle={styles.wheelIndicator}
                            itemTextStyle={styles.wheelText}
                            containerStyle={styles.wheelContainer}
                            // scaleFunction={(x) => 0.7}
                            decelerationRate="fast"
                        />
                    </View>
                ) : (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <WheelPicker
                            selectedIndex={selectedIb}
                            options={IbRange}
                            onChange={(index) => {
                                handleIbChange(index);
                            }}
                            itemHeight={60}
                            itemStyle={{ alignItems: "flex-end" }}
                            selectedIndicatorStyle={styles.wheelIndicator}
                            itemTextStyle={styles.wheelText}
                            containerStyle={styles.wheelContainer}
                            // scaleFunction={(x) => 0.7}
                            decelerationRate="fast"
                        />
                        <View
                            style={{
                                zIndex: 1,
                                width: "100%",
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 60,
                                borderTopWidth: 0.5,
                                borderBottomWidth: 0.5,
                                borderColor: greyBg,
                            }}
                        >
                            <Entypo name="dot-single" size={18} color={white} />
                        </View>
                        <WheelPicker
                            selectedIndex={selectedIbDot}
                            options={dotRange}
                            onChange={(index) => {
                                handleIbDotChange(index);
                            }}
                            itemHeight={60}
                            itemStyle={{ alignItems: "flex-start" }}
                            selectedIndicatorStyle={styles.wheelIndicator}
                            itemTextStyle={styles.wheelText}
                            containerStyle={styles.wheelContainer}
                            // scaleFunction={(x) => 0.7}
                            decelerationRate="fast"
                        />
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    smallCard: {
        justifyContent: "center",
        alignItems: "center",
        width: 80,
        height: 32,
    },
    text: {
        color: white,
    },
    t1: {
        fontFamily: "LatoB",
        fontSize: 14,
    },
    wheelContainer: {
        width: "50%",
        margin: 0,
    },
    wheelText: {
        fontFamily: "LatoR",
        fontSize: 30,
        color: white,
    },
    wheelIndicator: {
        backgroundColor: blackBg,
    },
});
