import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import FitnessLevelCard from "../../components/card/FitnessLevelCard";
import { useContext } from "react";
import { RegContext } from "../../utils/RegContext";
import { storeRegData } from "../../utils/api";

const StepSeven = ({ navigation }) => {
    const regLoaded = useContext(RegContext);
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        storeRegData({ level_id: id });
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
                {regLoaded[4].data
                    .sort((a, b) => {
                        if (a.id < b.id) {
                            return -1;
                        }
                    })
                    .map((item) => {
                        return (
                            <FitnessLevelCard
                                key={item.id}
                                name={item.name}
                                nameSub={item.description}
                                imageLink={item.image}
                                onPress={() =>
                                    setId(() => {
                                        setToggle(true);
                                        return item.id;
                                    })
                                }
                                fill={id === item.id ? true : false}
                            />
                        );
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
