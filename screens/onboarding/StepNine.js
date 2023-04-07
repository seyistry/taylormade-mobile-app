import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import MotivateCard from "../../components/card/MotivateCard";
import ButtonFill from "../../components/button/ButtonFill";
import DailyCard from "../../components/card/DailyCard";
import { useContext } from "react";
import { RegContext } from "../../utils/RegContext";

const StepNine = ({ navigation }) => {
    const regLoaded = useContext(RegContext);
    const [idOne, setIdOne] = useState(false);
    const [idFive, setIdFive] = useState(false);
    const [idTwo, setIdTwo] = useState(false);
    const [idThree, setIdThree] = useState(false);
    const [idFour, setIdFour] = useState(false);

    const dictSec = {
        1: () => setIdOne(!idOne),
        2: () => setIdTwo(!idTwo),
        3: () => setIdThree(!idThree),
        4: () => setIdFour(!idFour),
        5: () => setIdFive(!idFive),
    };
    const dictPry = {
        1: idOne,
        2: idTwo,
        3: idThree,
        4: idFour,
        5: idFive,
    };

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
                <Text style={styles.text}>
                    CHOOSE WHAT MIGHT BE YOUR HINDERANCE?
                </Text>
            </View>
            <View style={{ height: "60%" }}>
                {regLoaded[5].data.map((item) => {
                    if (item.description === "NONE OF THE ABOVE") {
                        return (
                            <DailyCard
                                key={item.id}
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
                        );
                    } else {
                        return (
                            <MotivateCard
                                key={item.id}
                                onPress={() => dictSec[item.id]()}
                                fill={dictPry[item.id]}
                                {...item}
                            />
                        );
                    }
                })}
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
