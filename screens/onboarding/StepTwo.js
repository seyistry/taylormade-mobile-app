import { StyleSheet, Text, View } from "react-native";
import ButtonFill from "../../components/button/ButtonFill";
import GoalsCard from "../../components/card/GoalsCard";
import { blackBg, white } from "../../utils/color";
import { useState, useContext } from "react";
import { RegContext } from "../../utils/RegContext";
import {
    getLogData,
    removeLogData,
    removeRegData,
    storeRegData,
} from "../../utils/api";

export default function StepTwo({ navigation }) {
    const [toggle, setToggle] = useState(null);
    const regLoaded = useContext(RegContext);
    const handleSubmit = () => {
        removeRegData();
        storeRegData({ goal_id: toggle });
        getLogData();
        navigation.navigate("STEP 3 OF 20");
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
                <Text style={styles.text}>SET YOUR GOALS</Text>
            </View>
            <View style={{ flex: 1, height: "60%" }}>
                {regLoaded[0].data.map((item) => {
                    return (
                        <GoalsCard
                            key={item.id}
                            name={item.description}
                            imageLink={item.image}
                            onPress={() => setToggle(item.id)}
                            fill={toggle === item.id ? true : false}
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
        fontFamily: "LatoXb",
        fontSize: 20,
    },
});
