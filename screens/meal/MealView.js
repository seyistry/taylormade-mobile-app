import { useState, useEffect } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Alert,
} from "react-native";
import { blackBg, greyBg, greyHeader, white, blueBg } from "../../utils/color";
import { Octicons, Ionicons } from "@expo/vector-icons";
import MealCard from "../../components/card/MealCard";
import { foodUrl } from "../../utils/apiLinks";

export default function MealView({ navigation }) {
    const [foodData, setFoodData] = useState(false);

    const handleBreakfast = () => {
        navigation.navigate("Meal Information", { ...foodData[0].meals[0] });
    };
    const handleFirstSnack = () => {
        navigation.navigate("Meal Information", { ...foodData[1].meals[0] });
    };
    const handleLaunch = () => {
        navigation.navigate("Meal Information", { ...foodData[2].meals[0] });
    };
    const handleSecondSnack = () => {
        navigation.navigate("Meal Information", { ...foodData[3].meals[0] });
    };
    const handleDinner = () => {
        navigation.navigate("Meal Information", { ...foodData[4].meals[0] });
    };
    function fetchData() {
        Promise.all([
            fetch(foodUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(foodUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(foodUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(foodUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
            fetch(foodUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }),
        ])
            .then((responses) => {
                // Get a JSON object from each of the responses
                return Promise.all(
                    responses.map((response) => {
                        // console.log(response.json());
                        if (response.status == 200) {
                            return response.json();
                        } else {
                            throw new Error("Server Error!");
                        }
                    })
                );
            })
            .then((data) => {
                // Log the data to the console
                // You would do something with both sets of data here
                // console.log(data);
                setFoodData(data);
            })
            .catch((error) => {
                // if there's an error, log it
                Alert.alert("Network error ", "Unable to connect to network", [
                    { text: "Try Again", onPress: () => fetchData() },
                ]);
            });
    }
    useEffect(() => {
        fetchData();
    }, []);

    if (foodData) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>MEAL PLAN</Text>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // alignItems: "center",
                            marginVertical: 30,
                            marginHorizontal: "5%",
                        }}
                    >
                        <View style={styles.circle}>
                            <Octicons
                                name="chevron-left"
                                size={24}
                                color={white}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Ionicons
                                name="calendar-outline"
                                size={24}
                                color={white}
                            />
                            <Text style={[styles.text, { paddingLeft: 10 }]}>
                                Today
                            </Text>
                        </View>
                        <View style={styles.circle}>
                            <Octicons
                                name="chevron-right"
                                size={24}
                                color={white}
                            />
                        </View>
                    </View>
                    <ScrollView>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginHorizontal: "5%",
                            }}
                        >
                            <Text style={styles.text}>Breakfast</Text>
                            <Ionicons
                                name="ios-shuffle"
                                size={24}
                                color={greyBg}
                            />
                        </View>
                        <MealCard
                            onPress={handleBreakfast}
                            foodData={foodData[0]}
                            time="7:11 AM"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginHorizontal: "5%",
                            }}
                        >
                            <Text style={styles.text}>1st Snack</Text>
                            <Ionicons
                                name="ios-shuffle"
                                size={24}
                                color={greyBg}
                            />
                        </View>
                        <MealCard
                            onPress={handleFirstSnack}
                            foodData={foodData[1]}
                            time="10:30 AM"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginHorizontal: "5%",
                            }}
                        >
                            <Text style={styles.text}>Lunch</Text>
                            <Ionicons
                                name="ios-shuffle"
                                size={24}
                                color={greyBg}
                            />
                        </View>
                        <MealCard
                            onPress={handleLaunch}
                            foodData={foodData[2]}
                            time="12:38 PM"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginHorizontal: "5%",
                            }}
                        >
                            <Text style={styles.text}>2nd Snack</Text>
                            <Ionicons
                                name="ios-shuffle"
                                size={24}
                                color={greyBg}
                            />
                        </View>
                        <MealCard
                            onPress={handleSecondSnack}
                            foodData={foodData[3]}
                            time="3:30 PM"
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginHorizontal: "5%",
                            }}
                        >
                            <Text style={styles.text}>Dinner</Text>
                            <Ionicons
                                name="ios-shuffle"
                                size={24}
                                color={greyBg}
                            />
                        </View>
                        <MealCard
                            onPress={handleDinner}
                            foodData={foodData[4]}
                            time="6:14 PM"
                        />
                    </ScrollView>
                </View>
            </View>
        );
    } else {
        return (
            <View style={[styles.container, { justifyContent: "center" }]}>
                <ActivityIndicator size="large" color={blueBg} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    title: {
        fontFamily: "LatoB",
        fontSize: 18,
        padding: 20,
        color: white,
        backgroundColor: greyHeader,
    },
    circle: {
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: greyBg,
        borderRadius: 30,
    },
    text: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 16,
    },
});
