import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { blackBg, blueBg, greyBg, greyText, white } from "../../utils/color";
import { Entypo } from "@expo/vector-icons";
import { storeRegData } from "../../utils/api";
import { Picker } from "react-native-wheel-pick";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const feetRange = range(1, 8);
const inchRange = range(0, 11);
const cmRange = range(40, 271);

export default function StepEleven({ navigation }) {
    const [selectedFeet, setSelectedFeet] = useState("4");
    const [selectedInch, setSelectedInch] = useState("8");
    const [selectedCm, setSelectedCm] = useState("135");
    const [unit, setUnit] = useState("cm");
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
        storeRegData({ height: selectedCm });
        navigation.navigate("STEP 12 OF 20");
    };

    function handleCMchange(index) {
        setSelectedCm(index);
        let valueFeet = Math.trunc(index / 2.54 / 12);
        let valueInch = Math.trunc(index / 2.54 - 12 * valueFeet);
        setSelectedFeet(() => valueFeet.toString());
        setSelectedInch(() => valueInch.toString());
        setChange(true);
    }

    function handleFeetChange(index) {
        let value = Math.trunc(
            (parseInt(index) * 12 + parseInt(selectedInch)) * 2.54
        );
        setSelectedCm(() => value.toString());
        setSelectedFeet(index);
        setChange(true);
    }

    function handleInchChange(index) {
        let value = Math.trunc(
            (parseInt(selectedFeet) * 12 + parseInt(index)) * 2.54
        );
        // console.log(value)
        setSelectedCm(() => value.toString());
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
                        {selectedCm}
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
                        {selectedFeet + "'" + " " + selectedInch + '"'}
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
                    height: "100%",
                    flex: 1,
                }}
            >
                {unit === "cm" ? (
                    <Picker
                        style={{
                            backgroundColor: blackBg,
                            height: 300,
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
                        selectedValue={selectedCm}
                        pickerData={cmRange}
                        onValueChange={(index) => handleCMchange(index)}
                    />
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
                            selectedValue={selectedFeet}
                            pickerData={feetRange}
                            onValueChange={(index) => {
                                handleFeetChange(index);
                            }}
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
                            selectedValue={selectedInch}
                            pickerData={inchRange}
                            onValueChange={(index) => {
                                handleInchChange(index);
                            }}
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
