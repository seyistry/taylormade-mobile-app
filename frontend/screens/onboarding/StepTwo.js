import { StyleSheet, Text, View } from "react-native";
import ButtonFill from "../../components/button/ButtonFill";
import GoalsCard from "../../components/card/GoalsCard";
import { blackBg, white } from "../../utils/color";
import { useState } from "react";

export default function StepTwo({ navigation }) {
    const [toggle, setToggle] = useState(false);
    const [weightLoss, setWeightLoss] = useState(false);
    const [muscleGain, setMuscleGain] = useState(false);
    const handleMuscleGainPress = () => {
        setToggle(true);
        setMuscleGain(() => {
            setWeightLoss(false);
            return true;
        });
    };
    const handleWeightLossPress = () => {
        setToggle(true);
        setWeightLoss(() => {
            setMuscleGain(false);
            return true;
        });
    };

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
                    onPress={handleMuscleGainPress}
                    fill={muscleGain}
                />
                <GoalsCard
                    name="WEIGHT LOSS"
                    imageLink={require("../../assets/img/weightloss.png")}
                    onPress={handleWeightLossPress}
                    fill={weightLoss}
                />
            </View>
            <View>
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
