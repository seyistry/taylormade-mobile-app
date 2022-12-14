import { StyleSheet, Text, View } from "react-native";
import ButtonFill from "../../components/button/ButtonFill";
import GoalsCard from "../../components/card/GoalsCard";
import { blackBg, white } from "../../utils/color";
import { useState } from "react";

export default function StepTwo({ navigation }) {
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        navigation.navigate("STEP 3 OF 20");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={styles.text}>SET YOUR GOALS</Text>
            </View>
            <View style={{ flex: 1, height: "60%" }}>
                <GoalsCard
                    name="MUSCLE GAIN"
                    imageLink={require("../../assets/img/musclegain.png")}
                    onPress={() => setToggle("MUSCLE GAIN")}
                    fill={toggle === "MUSCLE GAIN" ? true : false}
                />
                <GoalsCard
                    name="WEIGHT LOSS"
                    imageLink={require("../../assets/img/weightloss.png")}
                    onPress={() => setToggle("WEIGHT LOSS")}
                    fill={toggle === "WEIGHT LOSS" ? true : false}
                />
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill
                    name="CONTINUE"
                    fill={toggle}
                    disabled={!toggle}
                    onPress={handleSubmit}
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
    text: {
        color: white,
        fontFamily: "LatoXb",
        fontSize: 20,
    },
});
