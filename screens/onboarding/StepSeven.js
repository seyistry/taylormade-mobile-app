import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import FitnessLevelCard from "../../components/card/FitnessLevelCard";

const StepSeven = ({ navigation }) => {
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        navigation.navigate("STEP 8 OF 20");
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
                <Text style={styles.text}>WHAT IS YOUR FITNESS LEVEL?</Text>
            </View>
            <View style={{ height: "60%" }}>
                <FitnessLevelCard
                    name="BEGINNER"
                    nameSub="I’m new to fitness"
                    imageLink="beginner"
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 1;
                        })
                    }
                    fill={id === 1 ? true : false}
                />
                <FitnessLevelCard
                    name="INTERMEDIATE"
                    nameSub="I work out 2-3 times a week"
                    imageLink="intermediate"
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 2;
                        })
                    }
                    fill={id === 2 ? true : false}
                />
                <FitnessLevelCard
                    name="ADVANCED"
                    nameSub="I have regular workouts"
                    imageLink="advance"
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
