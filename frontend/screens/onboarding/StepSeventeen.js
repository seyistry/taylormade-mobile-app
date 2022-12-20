import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { blackBg, greyHeader, white } from "../../utils/color";
import PlanCard from "../../components/card/PlanCard";
import Graph from "../../assets/img/graph";
import ButtonFill from "../../components/button/ButtonFill";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function StepSeventeen({ navigation }) {
    const handleSubmit = () => {
        navigation.navigate("STEP 18 OF 20");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: "10%",
                }}
            >
                <Text
                    style={[
                        styles.text,
                        {
                            fontFamily: "LatoXb",
                            fontSize: 20,
                            textAlign: "center",
                        },
                    ]}
                >
                    YOUR 4-WEEK EXTRA BULK BODY PLAN
                </Text>
            </View>
            <View
                style={{
                    height: "30%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: blackBg,
                    borderRadius: 5,
                    marginHorizontal: "5%",
                    marginBottom: 20,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "space-evenly",
                            // alignItems: "center",
                            paddingLeft: 20,
                        }}
                    >
                        <PlanCard
                            title="Duration"
                            name="4 weeks"
                            type="duration"
                        />
                        <PlanCard title="Goal" name="Muscle gain" type="goal" />
                        <PlanCard title="Level" name="Beginner" type="level" />
                        <PlanCard
                            title="Target body"
                            name="Extra bulk"
                            type="target"
                        />
                    </View>
                    <Image
                        style={{ flex: 1, height: "90%", alignSelf: "center" }}
                        source={require("../../assets/img/targetImg.png")}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View
                style={{
                    height: "20%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: blackBg,
                    borderRadius: 5,
                    marginHorizontal: "5%",
                    marginBottom: 10,
                }}
            >
                <Graph sizeW={windowWidth * 0.8} sizeH={windowHeight * 0.18} />
            </View>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingHorizontal: "5%",
                    justifyContent: "space-around",
                }}
            >
                <Text style={[styles.text, styles.t1]}>Week 1</Text>
                <Text style={[styles.text, styles.t1]}>Week 2</Text>
                <Text style={[styles.text, styles.t1]}>Week 3</Text>
                <Text style={[styles.text, styles.t1]}>Week 4</Text>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    paddingBottom: 20,
                }}
            >
                <ButtonFill
                    name="GET MY PLAN"
                    fill={true}
                    onPress={handleSubmit}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyHeader,
    },
    text: {
        color: white,
    },
    t1: {
        fontFamily: "LatoB",
        fontSize: 10,
    },
});
