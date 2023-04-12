import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { blackBg, blueBg, greyBg, greyText, white } from "../../utils/color";
import { storeRegData } from "../../utils/api";
import { Picker } from "react-native-wheel-pick";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const ageRange = range(18, 100);

export default function StepFourteen({ navigation }) {
    const [selectedAge, setSelectedAge] = useState("25");
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
        storeRegData({ age: selectedAge });
        navigation.navigate("STEP 15 OF 20");
    };

    function handleAgeChange(index) {
        setSelectedAge(index);
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
                    HOW OLD ARE YOU?
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
                {!change ? null : (
                    <Text
                        style={[
                            styles.text,
                            { fontFamily: "LatoL", fontSize: 64 },
                        ]}
                    >
                        {selectedAge}
                        <Text
                            style={{
                                fontFamily: "LatoR",
                                fontSize: 32,
                                color: white,
                            }}
                        >
                            {" "}
                            yrs
                        </Text>
                    </Text>
                )}
            </View>
            <View style={{ height: 60 }}></View>
            <TouchableOpacity
                style={{
                    width: "100%",
                    height: 60,
                    backgroundColor: change ? blueBg : greyBg,
                    justifyContent: "center",
                    alignItems: "center",
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
                    flex: 1,
                }}
            >
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
                    selectedValue={selectedAge}
                    pickerData={ageRange}
                    onValueChange={(index) => {
                        console.log(index);
                        handleAgeChange(index);
                    }}
                />
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
        width: "100%",
        margin: 0,
    },
    wheelText: {
        fontFamily: "LatoR",
        fontSize: 30,
        color: white,
    },
    wheelIndicator: {
        backgroundColor: blackBg,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: greyBg,
    },
});
