import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import MotivateCard from "../../components/card/MotivateCard";
import ButtonFill from "../../components/button/ButtonFill";

const StepThree = ({ navigation }) => {
    const [idOne, setIdOne] = useState(false);
    const [idFive, setIdFive] = useState(false);
    const [idTwo, setIdTwo] = useState(false);
    const [idThree, setIdThree] = useState(false);
    const [idFour, setIdFour] = useState(false);

    const handleSubmit = () => {
        navigation.navigate("STEP 4 OF 20");
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
                <MotivateCard onPress={() => setIdOne(!idOne)} fill={idOne} />
                <MotivateCard onPress={() => setIdTwo(!idTwo)} fill={idTwo} />
                <MotivateCard
                    onPress={() => setIdThree(!idThree)}
                    fill={idThree}
                />
                <MotivateCard
                    onPress={() => setIdFour(!idFour)}
                    fill={idFour}
                />
                <MotivateCard
                    onPress={() => setIdFive(!idFive)}
                    fill={idFive}
                />
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "flex-end",
                    paddingBottom: 10,
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

export default StepThree;

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
