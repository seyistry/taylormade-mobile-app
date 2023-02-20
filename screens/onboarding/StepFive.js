import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import BodyTypeCard from "../../components/card/BodyTypeCard";

const StepFive = ({ navigation }) => {
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        navigation.navigate("STEP 6 OF 20");
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
                <Text style={styles.text}>CHOOSE A TARGET BODY TYPE</Text>
            </View>
            <View style={{ height: "60%" }}>
                <BodyTypeCard
                    name="CUT"
                    imageLink={require("../../assets/img/cutTargetType.png")}
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 1;
                        })
                    }
                    fill={id === 1 ? true : false}
                />
                <BodyTypeCard
                    name="Bulk"
                    imageLink={require("../../assets/img/bulkTargetType.png")}
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 2;
                        })
                    }
                    fill={id === 2 ? true : false}
                />
                <BodyTypeCard
                    name="EXTRA BULK"
                    imageLink={require("../../assets/img/XbulkTargetType.png")}
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 3;
                        })
                    }
                    fill={id === 3 ? true : false}
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
};

export default StepFive;

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
