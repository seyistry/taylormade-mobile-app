import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import { usePlatformPay } from "@stripe/stripe-react-native";
import { greyBg, greyHeader, greyText, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";
import { useEffect, useState } from "react";
import { paymentUrl, planUrl } from "../../utils/apiLinks";
import Loading from "../../components/card/Loading";
import { getLog } from "../../utils/api";

export default function SubscriptionPlan({ navigation }) {
    const [ready, setReady] = useState(false);
    const [plan, setPlan] = useState(null);
    const [paid, setPaid] = useState(false);
    const { isPlatformPaySupported, createPlatformPayToken } = usePlatformPay();

    const loadPlan = async () => {
        try {
            await fetch(planUrl, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }).then((response) => {
                response.json().then((response) => {
                    if (response.status) {
                        // console.log(response);
                        setPlan(response.data);
                        setReady(true);
                    }
                });
            });
        } catch (error) {}
    };

    const handleSubmit = () => {
        navigation.navigate("Home");
    };

    useEffect(() => {
        if (!ready) {
            loadPlan();
            setTimeout(() => {
                if (!isPlatformPaySupported()) {
                    Alert.alert(
                        "Error",
                        `${
                            Platform.OS === "android" ? "Google" : "Apple"
                        } Pay is not supported.`
                    );
                    return;
                }
            }, 1000);
        }
    }, [ready]);

    const pay = async (amount, plan) => {
        const token = await createPaymentMethod(amount);
        const email = await getLog("email");
        console.log(plan);
        console.log(email);
        console.log(token.id);
        try {
            const response = await fetch(paymentUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    plan: plan,
                    stripeToken: token.id,
                }),
            });

            const { message } = await response.json();

            if (message === "successful") {
                Alert.alert(
                    "Success",
                    "The payment was confirmed successfully.",
                    [{ text: "OK", onPress: () => setPaid(true) }]
                );
            } else {
                Alert.alert("Error", "unsuccessful transaction.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createPaymentMethod = async (amount) => {
        const { error, token } = await createPlatformPayToken({
            googlePay: {
                amount: amount,
                currencyCode: "USD",
                testEnv: true,
                merchantName: "Test",
                merchantCountryCode: "US",
                existingPaymentMethodRequired: true,
            },
        });

        if (error) {
            Alert.alert(error.code, error.message);
            return;
        } else if (token) {
            return token;
        }
    };

    return (
        <View style={styles.container}>
            {ready !== false ? (
                <>
                    <View style={{ height: "40%", justifyContent: "center" }}>
                        <Image
                            style={styles.img}
                            source={require("../../assets/img/choosePlan.png")}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ height: "10%" }}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    fontFamily: "LatoXb",
                                    fontSize: 20,
                                    textAlign: "center",
                                    paddingHorizontal: "5%",
                                },
                            ]}
                        >
                            GET UNLIMITED ACCESS TO YOUR PERSONAL PLAN
                        </Text>
                    </View>
                    <View style={{ height: "30%" }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginHorizontal: "5%",
                                alignItems: "flex-end",
                            }}
                        >
                            <TouchableOpacity
                                style={[styles.planBox, styles.planBox1]}
                                onPress={() => pay(plan[0].price, plan[0].id)}
                            >
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "20%",
                                            backgroundColor: "#03B4BF",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.boxTitleText,
                                        ]}
                                    >
                                        ECONOMY
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "40%",
                                            borderTopWidth: 0.5,
                                            borderBottomWidth: 0.5,
                                            borderColor: "#363636",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.text, styles.priceText]}
                                    >
                                        {plan[0].duration}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.durationText,
                                        ]}
                                    >
                                        MONTH
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Billed ${plan[0].price.toFixed(2)}{" "}
                                        monthly
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        { height: "40%" },
                                    ]}
                                >
                                    <Text
                                        style={[styles.text, styles.amountText]}
                                    >
                                        ${plan[0].price.toFixed(2)}
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Per month
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.planBox, styles.planBox2]}
                                onPress={() => pay(plan[2].price, plan[2].id)}
                            >
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "20%",
                                            backgroundColor: "#0ACD06",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.boxTitleText,
                                        ]}
                                    >
                                        BEST VALUE
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "40%",
                                            borderTopWidth: 0.5,
                                            borderBottomWidth: 0.5,
                                            borderColor: "#363636",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.text, styles.priceText]}
                                    >
                                        {plan[2].duration}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.durationText,
                                        ]}
                                    >
                                        MONTHS
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Billed $
                                        {(plan[2].price * 12).toFixed(2)} yearly
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        { height: "40%" },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.priceMonthText,
                                            {
                                                fontSize: 12,
                                                textDecorationLine:
                                                    "line-through",
                                            },
                                        ]}
                                    >
                                        ${plan[0].price.toFixed(2)}
                                    </Text>
                                    <Text
                                        style={[styles.text, styles.amountText]}
                                    >
                                        ${plan[2].price.toFixed(2)}
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Per month
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.planBox, styles.planBox1]}
                                onPress={() => pay(plan[1].price, plan[1].id)}
                            >
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "20%",
                                            backgroundColor: "#DF8908",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.boxTitleText,
                                        ]}
                                    >
                                        POPULAR
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        {
                                            height: "40%",
                                            borderTopWidth: 0.5,
                                            borderBottomWidth: 0.5,
                                            borderColor: "#363636",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.text, styles.priceText]}
                                    >
                                        {plan[1].duration}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.text,
                                            styles.durationText,
                                        ]}
                                    >
                                        MONTHS
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Billed ${(plan[1].price * 3).toFixed(2)}{" "}
                                        quarterly
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.boxContent,
                                        { height: "40%" },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.priceMonthText,
                                            {
                                                fontSize: 12,
                                                textDecorationLine:
                                                    "line-through",
                                            },
                                        ]}
                                    >
                                        ${plan[0].price.toFixed(2)}
                                    </Text>
                                    <Text
                                        style={[styles.text, styles.amountText]}
                                    >
                                        ${plan[1].price.toFixed(2)}
                                    </Text>
                                    <Text style={[styles.priceMonthText]}>
                                        Per month
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            height: "20%",
                            justifyContent: "flex-end",
                            paddingBottom: 20,
                        }}
                    >
                        <ButtonFill
                            name="GET MY PLAN"
                            fill={paid}
                            disabled={!paid}
                            onPress={handleSubmit}
                        />
                    </View>
                </>
            ) : (
                <Loading />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyHeader,
    },
    img: {
        alignSelf: "center",
        height: "90%",
    },
    text: {
        color: white,
        textAlign: "center",
    },
    planBox: {
        borderRadius: 10,
        backgroundColor: greyBg,
        overflow: "hidden",
    },
    planBox1: {
        height: 200,
        width: "28%",
        maxWidth: 120,
    },
    planBox2: {
        height: 225,
        width: "30%",
        maxWidth: 135,
    },
    boxContent: {
        justifyContent: "center",
    },
    boxTitleText: {
        fontFamily: "LatoB",
        fontSize: 10,
    },
    amountText: {
        fontFamily: "LatoB",
        fontSize: 24,
    },
    durationText: {
        fontFamily: "LatoR",
        fontSize: 16,
    },
    priceText: {
        fontFamily: "LatoR",
        fontSize: 20,
    },
    priceMonthText: {
        fontFamily: "LatoR",
        fontSize: 8,
        color: greyText,
        textAlign: "center",
    },
});
