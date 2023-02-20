import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import AreaCard from "../../components/card/AreaCard";

const image = require("../../assets/img/targetAreaBg.png");

const StepSeven = ({ navigation }) => {
    const [idArms, setIdArms] = useState(false);
    const [idPecs, setIdPecs] = useState(false);
    const [idBelly, setIdBelly] = useState(false);
    const [idThighs, setIdThighs] = useState(false);

    const handleSubmit = () => {
        navigation.navigate("STEP 7 OF 20");
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
                <Text style={styles.text}>CHOOSE YOUR TARGET AREAS</Text>
            </View>
            <ImageBackground
                source={image}
                resizeMode="contain"
                style={{ height: "70%" }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: "10%",
                    }}
                >
                    <AreaCard
                        name="ARMS"
                        onPress={() => setIdArms(!idArms)}
                        fill={idArms}
                    />
                    <AreaCard
                        name="PECS"
                        onPress={() => setIdPecs(!idPecs)}
                        fill={idPecs}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <AreaCard
                        name="BELLY"
                        onPress={() => setIdBelly(!idBelly)}
                        fill={idBelly}
                    />
                    <AreaCard
                        name="THIGHS"
                        onPress={() => setIdThighs(!idThighs)}
                        fill={idThighs}
                    />
                </View>
            </ImageBackground>
            <View
                style={{
                    height: "10%",
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill
                    name="CONTINUE"
                    fill={idThighs || idBelly || idPecs || idArms}
                    disabled={!(idThighs || idBelly || idPecs || idArms)}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
};

export default StepSeven;

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
        paddingHorizontal: "20%",
    },
});
