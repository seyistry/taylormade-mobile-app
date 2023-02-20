import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import BodyTypeCard from "../../components/card/BodyTypeCard";

export default function StepFifteen({ navigation }) {
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        navigation.navigate("STEP 16 OF 20");
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
                <Text style={styles.text}>CHOOSE YOUR WORKOUT LOCATION</Text>
            </View>
            <View style={{ height: "60%" }}>
                <BodyTypeCard
                    name="Home"
                    imageLink={require("../../assets/img/homeWorkout.png")}
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 1;
                        })
                    }
                    fill={id === 1 ? true : false}
                />
                <BodyTypeCard
                    name="Gym"
                    imageLink={require("../../assets/img/gymWorkout.png")}
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return 2;
                        })
                    }
                    fill={id === 2 ? true : false}
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
        textAlign: "center",
        fontFamily: "LatoXb",
        fontSize: 20,
        paddingHorizontal: "20%",
    },
});
