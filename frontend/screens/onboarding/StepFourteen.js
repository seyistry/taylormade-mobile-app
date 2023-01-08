import { useState } from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import WheelPicker from "react-native-wheely";
import { blackBg, blueBg, greyBg, white } from "../../utils/color";

const range = (start, end, length = end - start + 1) =>
    Array.from({ length }, (_, i) => start + i);

const ageRange = range(18, 100);

export default function StepFourteen({ navigation }) {
    const [selectedAge, setSelectedAge] = useState(0);
    const [change, setChange] = useState(false);

    const handleSubmit = () => {
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
                    height: "30%",
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
                        {ageRange[selectedAge]}
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
                }}
            >
                <WheelPicker
                    selectedIndex={selectedAge}
                    options={ageRange}
                    onChange={(index) => handleAgeChange(index)}
                    itemHeight={60}
                    // itemStyle={{ alignItems: "flex-end" }}
                    selectedIndicatorStyle={styles.wheelIndicator}
                    itemTextStyle={styles.wheelText}
                    containerStyle={styles.wheelContainer}
                    // scaleFunction={(x) => 0.7}
                    decelerationRate="fast"
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
