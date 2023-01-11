import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import WheelPicker from "react-native-wheely";
import { blackBg, blueBg, greyBg, white } from "../../utils/color";
import { Entypo } from "@expo/vector-icons";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const feetRange = range(1, 8);
const inchRange = range(0, 11);
const cmRange = range(40, 250);

export default function StepEleven({ navigation }) {
    const [selectedFeet, setSelectedFeet] = useState(4);
    const [selectedInch, setSelectedInch] = useState(8);
    const [selectedCm, setSelectedCm] = useState(135);
    const [unit, setUnit] = useState("cm");
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
        navigation.navigate("STEP 12 OF 20");
    };

    function handleCMchange(index) {
        setSelectedCm(index);
        let valueFeet = Math.trunc(cmRange[index] / 2.54 / 12);
        let valueInch = Math.trunc(cmRange[index] / 2.54 - 12 * valueFeet);
        setSelectedFeet(() => feetRange.indexOf(valueFeet));
        setSelectedInch(() => inchRange.indexOf(valueInch));
        setChange(true);
    }

    function handleFeetChange(index) {
        let value = Math.trunc(
            (feetRange[index] * 12 + inchRange[selectedInch]) * 2.54
        );
        setSelectedCm(() => cmRange.indexOf(value));
        setSelectedFeet(index);
        setChange(true);
    }

    function handleInchChange(index) {
        let value = Math.trunc(
            (feetRange[selectedFeet] * 12 + inchRange[index]) * 2.54
        );
        setSelectedCm(() => cmRange.indexOf(value));
        setSelectedInch(index);
        // console.log(index);
        setChange(true);
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
                    HOW TALL ARE YOU?
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
                {!change ? null : unit === "cm" ? (
                    <Text
                        style={[
                            styles.text,
                            { fontFamily: "LatoL", fontSize: 64 },
                        ]}
                    >
                        {cmRange[selectedCm]}
                        <Text
                            style={{
                                fontFamily: "LatoR",
                                fontSize: 32,
                                color: white,
                            }}
                        >
                            {" "}
                            cm
                        </Text>
                    </Text>
                ) : (
                    <Text
                        style={[
                            styles.text,
                            { fontFamily: "LatoL", fontSize: 64 },
                        ]}
                    >
                        {feetRange[selectedFeet] +
                            "'" +
                            " " +
                            inchRange[selectedInch] +
                            '"'}
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
                            borderColor: unit === "in" ? blueBg : greyBg,
                            backgroundColor: unit === "in" ? blueBg : null,
                        },
                    ]}
                    onPress={() => setUnit("in")}
                >
                    <Text style={[styles.text, styles.t1]}>in</Text>
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
                            borderColor: unit === "cm" ? blueBg : greyBg,
                            backgroundColor: unit === "cm" ? blueBg : null,
                        },
                    ]}
                    onPress={() => setUnit("cm")}
                >
                    <Text style={[styles.text, styles.t1]}>cm</Text>
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
                {unit === "cm" ? (
                    <WheelPicker
                        selectedIndex={selectedCm}
                        options={cmRange}
                        onChange={(index) => handleCMchange(index)}
                        itemHeight={60}
                        selectedIndicatorStyle={[
                            styles.wheelIndicator,
                            {
                                borderTopWidth: 0.5,
                                borderBottomWidth: 0.5,
                                borderColor: greyBg,
                            },
                        ]}
                        itemTextStyle={styles.wheelText}
                        containerStyle={{ width: "100%" }}
                        // scaleFunction={(x) => 0.7}
                        decelerationRate="fast"
                    />
                ) : (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <WheelPicker
                            selectedIndex={selectedFeet}
                            options={feetRange}
                            onChange={(index) => {
                                handleFeetChange(index);
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
                            selectedIndex={selectedInch}
                            options={inchRange}
                            onChange={(index) => {
                                handleInchChange(index);
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
