import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { blackBg, blueBg, greyBg, greyText, white } from "../../utils/color";
import { Entypo } from "@expo/vector-icons";
import { storeRegData } from "../../utils/api";
import { Picker } from "react-native-wheel-pick";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const KgRange = range(30, 150);
const IbRange = range(66, 332);
const dotRange = range(0, 9);

export default function StepTwelve({ navigation }) {
    const [selectedIb, setSelectedIb] = useState("0");
    const [selectedIbDot, setSelectedIbDot] = useState("0");
    const [selectedKg, setSelectedKg] = useState("0");
    const [selectedKgDot, setSelectedKgDot] = useState("0");
    const [unit, setUnit] = useState("kg");
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
        storeRegData({
            current_weight: parseInt(selectedKg) + parseInt(selectedKgDot) / 10,
        });
        navigation.navigate("STEP 13 OF 20");
    };

    function handleIbChange(index) {
        const value = Math.trunc(
            (parseInt(index) + parseInt(selectedIbDot) / 10) * 0.45359237
        );
        setSelectedKg(() => value.toString());
        setSelectedKgDot(0);
        setChange(true);
        setSelectedIb(index);
    }

    function handleIbDotChange(index) {
        const value = Math.trunc(
            (parseInt(selectedIb) + parseInt(index) / 10) * 0.45359237
        );
        setSelectedKg(() => value.toString());
        setSelectedKgDot(0);
        setChange(true);
        setSelectedIbDot(index);
    }

    function handleKgChange(index) {
        const value = Math.trunc(
            (parseInt(index) + parseInt(selectedKgDot) / 10) / 0.45359237
        );
        setSelectedIb(() => value.toString());
        setSelectedIbDot(0);
        setChange(true);
        setSelectedKg(index);
    }

    function handleKgDotChange(index) {
        const value = Math.trunc(
            (parseInt(selectedKg) + parseInt(index) / 10) / 0.45359237
        );
        setSelectedIb(() => value.toString());
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
                        {selectedKg + "." + selectedKgDot}
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
                        {selectedIb + "." + selectedIbDot}
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
                        <Picker
                            style={{
                                backgroundColor: blackBg,
                                height: 300,
                                width: "50%",
                            }}
                            //Android
                            selectionColor={white}
                            // itemSpace={40}
                            selectTextColor={"#FFFFFE"}
                            textColor={greyText}
                            textSize={50}
                            isShowSelectBackground={false}
                            selectLineColor={greyBg}
                            selectLineSize={2}
                            //IOS
                            itemStyle={{ color: "red" }}
                            selectedValue={selectedKg}
                            pickerData={KgRange}
                            onValueChange={(index) => handleKgChange(index)}
                        />
                        <View
                            style={{
                                zIndex: 1,
                                width: "100%",
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: greyBg,
                            }}
                        >
                            <Entypo name="dot-single" size={18} color={white} />
                        </View>
                        <Picker
                            style={{
                                backgroundColor: blackBg,
                                height: 300,
                                width: "50%",
                            }}
                            //Android
                            selectionColor={white}
                            // itemSpace={40}
                            selectTextColor={"#FFFFFE"}
                            textColor={greyText}
                            textSize={50}
                            isShowSelectBackground={false}
                            selectLineColor={greyBg}
                            selectLineSize={2}
                            //IOS
                            itemStyle={{ color: "red" }}
                            selectedValue={selectedKgDot}
                            pickerData={dotRange}
                            onValueChange={(index) => handleKgDotChange(index)}
                        />
                    </View>
                ) : (
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Picker
                            style={{
                                backgroundColor: blackBg,
                                height: 300,
                                width: "50%",
                            }}
                            //Android
                            selectionColor={white}
                            // itemSpace={40}
                            selectTextColor={"#FFFFFE"}
                            textColor={greyText}
                            textSize={50}
                            isShowSelectBackground={false}
                            selectLineColor={greyBg}
                            selectLineSize={2}
                            //IOS
                            itemStyle={{ color: "red" }}
                            selectedValue={selectedIb}
                            pickerData={IbRange}
                            onValueChange={(index) => handleIbChange(index)}
                        />
                        <View
                            style={{
                                zIndex: 1,
                                width: "100%",
                                position: "absolute",
                                alignItems: "center",
                                justifyContent: "center",
                                borderColor: greyBg,
                            }}
                        >
                            <Entypo name="dot-single" size={18} color={white} />
                        </View>
                        <Picker
                            style={{
                                backgroundColor: blackBg,
                                height: 300,
                                width: "50%",
                            }}
                            //Android
                            selectionColor={white}
                            // itemSpace={40}
                            selectTextColor={"#FFFFFE"}
                            textColor={greyText}
                            textSize={50}
                            isShowSelectBackground={false}
                            selectLineColor={greyBg}
                            selectLineSize={2}
                            //IOS
                            itemStyle={{ color: "red" }}
                            selectedValue={selectedIbDot}
                            pickerData={dotRange}
                            onValueChange={(index) => handleIbDotChange(index)}
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
