import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import MotivateCard from "../../components/card/MotivateCard";
import ButtonFill from "../../components/button/ButtonFill";
import DailyCard from "../../components/card/dailyCard";

const StepNine = ({ navigation }) => {
    const [idOne, setIdOne] = useState(false);
    const [idFive, setIdFive] = useState(false);
    const [idTwo, setIdTwo] = useState(false);
    const [idThree, setIdThree] = useState(false);
    const [idFour, setIdFour] = useState(false);

    const handleSubmit = () => {
        navigation.navigate("STEP 10 OF 20");
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
                <Text style={styles.text}>WHAT MOTIVATES YOU TO EXERCISE?</Text>
            </View>
            <View style={{ height: "60%" }}>
                <MotivateCard
                    onPress={() => {
                        setIdOne(!idOne);
                        setIdFive(false);
                    }}
                    fill={idOne}
                    name="BUSY WORK OR FAMILY LIFE"
                />
                <MotivateCard
                    onPress={() => {
                        setIdTwo(!idTwo);
                        setIdFive(false);
                    }}
                    fill={idTwo}
                    name="STRESS OR MENTAL HEALTH"
                />
                <MotivateCard
                    onPress={() => {
                        setIdThree(!idThree);
                        setIdFive(false);
                    }}
                    fill={idThree}
                    name="HEALTH OR HORMONAL ISSUES"
                />
                <MotivateCard
                    onPress={() => {
                        setIdFour(!idFour);
                        setIdFive(false);
                    }}
                    fill={idFour}
                    name="LACK OF MOTIVATION"
                />
                <DailyCard
                    onPress={() => {
                        setIdOne(false);
                        setIdTwo(false);
                        setIdThree(false);
                        setIdFour(false);
                        setIdFive(!idFive);
                    }}
                    fill={idFive}
                    name="NONE OF THE ABOVE"
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
                    fill={idOne || idTwo || idThree || idFour || idFive}
                    disabled={!(idOne || idTwo || idThree || idFour || idFive)}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default StepNine;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
        textAlign: "center",
        fontFamily: "LatoXb",
        fontSize: 20,
    },
});
