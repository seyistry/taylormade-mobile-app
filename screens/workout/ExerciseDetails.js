import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import React from "react";
import { blackBg, greyHeader, greyText, white } from "../../utils/color";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import ButtonFill from "../../components/button/ButtonFill";

export default function ExerciseDetails({ navigation }) {
    const handlePress = () => {
        navigation.navigate("Active Exercise");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    paddingVertical: 20,
                    backgroundColor: greyHeader,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: "5%",
                        alignItems: "center",
                    }}
                >
                    <TouchableOpacity
                        // style={{ height: 50, width: 50 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="ios-arrow-back-outline"
                            size={22}
                            color={white}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textWhite}>EXERCISE DETAILS</Text>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <TouchableOpacity>
                            <Feather name="download" size={22} color={white} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={{
                    height: "35%",
                    justifyContent: "center",
                }}
            >
                <Image
                    style={{ height: "90%", alignSelf: "center" }}
                    source={require("../../assets/img/detailsImg.png")}
                    resizeMode="contain"
                />
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: greyHeader,
                    justifyContent: "space-between",
                }}
            >
                <View style={{ marginHorizontal: "5%", flex: 1 }}>
                    <Text style={[{ marginVertical: 20 }, styles.t1]}>
                        POWERLIFTING PROGRAM
                    </Text>
                    <View
                        style={{
                            // flex: 1,
                            backgroundColor: blackBg,
                            // height: 20,
                            borderRadius: 10,
                            padding: 20,
                            marginBottom: 20,
                            maxHeight: "75%",
                        }}
                    >
                        <Text style={[styles.t1, { marginBottom: 10 }]}>
                            TIPS
                        </Text>
                        <FlatList
                            horizontal={false}
                            showsVerticalScrollIndicator={true}
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
                            renderItem={({ item, index }) => (
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Entypo
                                        name="dot-single"
                                        size={22}
                                        color={greyText}
                                    />
                                    <View>
                                        <Text style={styles.t2}>
                                            Don't hold your breath
                                        </Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) =>
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].indexOf(
                                    item
                                )
                            }
                            // ItemSeparatorComponent={separators}
                        />
                    </View>
                </View>
                <ButtonFill name="CONTINUE" fill={true} onPress={handlePress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    textWhite: {
        fontFamily: "LatoB",
        fontSize: 18,
        color: white,
        paddingLeft: 20,
    },
    t1: {
        fontFamily: "LatoB",
        fontSize: 16,
        color: white,
    },
    t2: {
        fontFamily: "LatoR",
        fontSize: 12,
        color: greyText,
        paddingLeft: 10,
    },
});
