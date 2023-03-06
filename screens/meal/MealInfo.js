import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
const windowHeight = Dimensions.get("window").height;
import { Ionicons, Entypo } from "@expo/vector-icons";
import { blackBg, greyBg, greyText, white } from "../../utils/color";
import ButtonFillNone from "../../components/button/ButtonFillNone";

export default function MealInfo({ route, navigation }) {
    const { strMeal, strMealThumb, strInstructions } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: strMealThumb }}>
                <View
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        height: windowHeight * 0.3,
                        flexDirection: "row",
                        padding: 20,
                    }}
                >
                    <TouchableOpacity
                        style={{ height: 50, width: 50 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-arrow-back-outline"
                            size={22}
                            color={white}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={{ height: 20 }} />
            <ScrollView>
                <Text
                    style={{
                        width: "80%",
                        fontFamily: "LatoB",
                        fontSize: 20,
                        color: white,
                        paddingHorizontal: "8%",
                        // marginBottom: 10,
                    }}
                >
                    {strMeal}
                </Text>
                {/* <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: "8%",
                    }}
                >
                    <Text style={styles.time}>25min</Text>
                    <Entypo name="dot-single" size={22} color={white} />
                    <Text style={styles.time}>Easy</Text>
                </View> */}
                {/* <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: 60,
                        marginHorizontal: "5%",
                        borderRadius: 10,
                        backgroundColor: "#1F1F1F",
                        paddingHorizontal: 20,
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}
                >
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.t1}>818</Text>
                        <Text style={styles.t2}>Kcal</Text>
                    </View>
                    <Text style={styles.slashIcon}>|</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.t1}>18g</Text>
                        <Text style={styles.t2}>protein</Text>
                    </View>
                    <Text style={styles.slashIcon}>|</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.t1}>95g</Text>
                        <Text style={styles.t2}>carbs</Text>
                    </View>
                    <Text style={styles.slashIcon}>|</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.t1}>41g</Text>
                        <Text style={styles.t2}>fat</Text>
                    </View>
                </View> */}
                {/* <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 20,
                        marginHorizontal: "8%",
                    }}
                >
                    <Text style={styles.quantText}>QUANTITY</Text>
                    <Text style={styles.quantText}>For 2 plate</Text>
                </View> */}
                <View
                    style={{
                        backgroundColor: "#363636",
                        marginHorizontal: "8%",
                        marginTop: 20,
                        borderRadius: 10,
                        padding: 20,
                        marginBottom: 20,
                    }}
                >
                    <Text style={[styles.quantText, { paddingBottom: 10 }]}>
                        INGREDIENTS
                    </Text>
                    <View>
                        {Array.from({ length: 20 }, (x, i) => i + 1).map(
                            (i) => {
                                if (
                                    route.params[`strIngredient${i}`].length > 0
                                ) {
                                    return (
                                        <View key={i}>
                                            <View
                                                key={i}
                                                style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        flexDirection: "row",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Entypo
                                                        name="dot-single"
                                                        size={22}
                                                        color={white}
                                                    />
                                                    <Text style={styles.t3}>
                                                        {
                                                            route.params[
                                                                `strIngredient${i}`
                                                            ]
                                                        }
                                                    </Text>
                                                </View>
                                                <Text style={styles.t3}>
                                                    {
                                                        route.params[
                                                            `strMeasure${i}`
                                                        ]
                                                    }
                                                </Text>
                                            </View>
                                        </View>
                                    );
                                }
                            }
                        )}
                    </View>
                </View>
                <Text
                    style={[
                        styles.quantText,
                        { paddingHorizontal: "8%", marginBottom: 10 },
                    ]}
                >
                    HOW TO COOK
                </Text>
                <View style={{ marginHorizontal: "8%" }}>
                    {/* <Text style={[styles.quantText, styles.t4]}>STEP 1</Text> */}
                    <Text style={styles.t5}>{strInstructions}</Text>
                </View>
                {/* <View style={{ marginHorizontal: "8%" }}>
                    <Text style={[styles.quantText, styles.t4]}>STEP 2</Text>
                    <Text style={styles.t5}>
                        Cook the spaghetti according to the instructions on the
                        pack. Once cooked, add little lettuce and vegetables to
                        a large bowl with 5 slice tomatoes.
                    </Text>
                </View>
                <View style={{ marginHorizontal: "8%" }}>
                    <Text style={[styles.quantText, styles.t4]}>STEP 3</Text>
                    <Text style={styles.t5}>
                        Cook the spaghetti according to the instructions on the
                        pack. Once cooked, add little lettuce and vegetables to
                        a large bowl with 5 slice tomatoes.
                    </Text>
                </View> */}
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <View
                        style={{
                            width: "20%",
                            borderWidth: 1,
                            borderColor: "#606060",
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontFamily: "LatoR",
                        fontSize: 14,
                        color: white,
                        textAlign: "center",
                        marginBottom: 10,
                    }}
                >
                    Would you like to rate this recipe?
                </Text>
                <Rating
                    type="custom"
                    ratingCount={5}
                    defaultRating={3}
                    imageSize={30}
                    showRating
                    // ratingBackgroundColor="green"
                    // ratingColor={"blue"}
                    style={{ paddingBottom: 20 }}
                    tintColor={blackBg}
                />
                <ButtonFillNone name="SUBMIT" />
                <View style={{ height: 20 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    time: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 10,
    },
    t1: {
        color: white,
        fontFamily: "LatoB",
        fontSize: 14,
    },
    t2: {
        color: greyText,
        fontFamily: "LatoR",
        fontSize: 10,
    },
    t3: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 12,
        paddingRight: 10,
    },
    slashIcon: {
        color: greyText,
        fontSize: 20,
    },
    quantText: {
        color: white,
        fontFamily: "LatoB",
        fontSize: 16,
    },
    t4: {
        fontSize: 14,
        color: "#838383",
        marginBottom: 10,
    },
    t5: {
        fontFamily: "LatoR",
        fontSize: 12,
        color: white,
        marginBottom: 20,
        textAlign: "justify",
        lineHeight: 20,
    },
});
