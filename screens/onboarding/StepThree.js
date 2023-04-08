import { StyleSheet, Text, View } from "react-native";
import { useState, useContext } from "react";
import { blackBg, white } from "../../utils/color";
import MotivateCard from "../../components/card/MotivateCard";
import ButtonFill from "../../components/button/ButtonFill";
import { RegContext } from "../../utils/RegContext";
import { storeRegData } from "../../utils/api";

const StepThree = ({ navigation }) => {
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
        storeRegData({ motivation_id: 1 });
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
                {regLoaded[1].data.map((item) => (
                    <MotivateCard
                        key={item.id}
                        onPress={() => dictSec[item.id]()}
                        fill={dictPry[item.id]}
                        {...item}
                    />
                ))}
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
