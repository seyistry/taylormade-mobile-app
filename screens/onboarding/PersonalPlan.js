import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { blackBg, greyHeader, white } from "../../utils/color";
import PlanCard from "../../components/card/PlanCard";
import Graph from "../../assets/img/graph";
import ButtonFill from "../../components/button/ButtonFill";
import { useState, useContext, useEffect } from "react";
import { RegContext } from "../../utils/RegContext";
import { getRegData, removeRegData } from "../../utils/api";
import Loading from "../../components/card/Loading";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PersonalPlan({ navigation }) {
    const regLoaded = useContext(RegContext);
    const [req, setReq] = useState(null);
    // console.log(regLoaded[0].data);
    const handleSubmit = () => {
        // console.log(data);
        navigation.navigate("STEP 18 OF 20");
    };

    const getBio = async () => {
        if (req === null) {
            const load = await getRegData();
            setReq(load);
        }
    };
    useEffect(() => {
        getBio();
    }, [req]);

    return (
        <View style={styles.container}>
            {req !== null ? (
                <>
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
                                {regLoaded[0].data.map((item) => {
                                    if (item.id == req.goal_id) {
                                        return (
                                            <PlanCard
                                                key={item.id}
                                                title="Goal"
                                                name={item.description}
                                                type="goal"
                                            />
                                        );
                                    }
                                })}

                                {regLoaded[2].data.map((item) => {
                                    if (item.id == req.current_body_type_id) {
                                        return (
                                            <PlanCard
                                                key={item.id}
                                                title="Level"
                                                name={item.name}
                                                type="level"
                                            />
                                        );
                                    }
                                })}

                                {regLoaded[2].data.map((item) => {
                                    if (item.id == req.target_body_type_id) {
                                        return (
                                            <PlanCard
                                                key={item.id}
                                                title="Target body"
                                                name={item.name}
                                                type="target"
                                            />
                                        );
                                    }
                                })}
                            </View>
                            <Image
                                style={{
                                    flex: 1,
                                    height: "90%",
                                    alignSelf: "center",
                                }}
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
                        <Graph
                            sizeW={windowWidth * 0.8}
                            sizeH={windowHeight * 0.18}
                        />
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
                </>
            ) : (
                <View>
                    <Loading />
                </View>
            )}
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
