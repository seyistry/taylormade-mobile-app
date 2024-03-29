import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { blackBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import DailyCard from "../../components/card/DailyCard";
import { storeRegData } from "../../utils/api";

const StepEight = ({ navigation }) => {
    const [id, setId] = useState(false);
    const [toggle, setToggle] = useState(null);

    const handleSubmit = () => {
        storeRegData({ daily_work: id });
        navigation.navigate("STEP 9 OF 20");
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
                <Text style={styles.text}>HOW MUCH DO YOU WORK DAILY?</Text>
            </View>
            <View style={{ height: "60%" }}>
                <DailyCard
                    name="LESS THAN 1 HOUR"
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return "LESS THAN 1 HOUR";
                        })
                    }
                    fill={id === "LESS THAN 1 HOUR" ? true : false}
                />
                <DailyCard
                    name="1-2 HOURS"
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return "1-2 HOURS";
                        })
                    }
                    fill={id === "1-2 HOURS" ? true : false}
                />
                <DailyCard
                    name="MORE THAN 2 HOURS"
                    onPress={() =>
                        setId(() => {
                            setToggle(true);
                            return "MORE THAN 2 HOURS";
                        })
                    }
                    fill={id === "MORE THAN 2 HOURS" ? true : false}
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

export default StepEight;

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
