import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { blackBg, greyHeader, greyText, white } from "../../utils/color";
import { Ionicons } from "@expo/vector-icons";

export default function WorkOutView({ navigation }) {
    const separators = () => (
        <View
            style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: "#606060",
                marginVertical: 10,
            }}
        />
    );

    const handlePress = () => {
        navigation.navigate("Exercise Details");
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    paddingVertical: 20,
                    paddingHorizontal: "5%",
                    backgroundColor: greyHeader,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        // marginHorizontal: "5%",
                        alignItems: "flex-start",
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
                    <View>
                        <Text style={styles.textWhite}>WORKOUT</Text>
                        <Text style={styles.textGrey}>
                            Based on your preferences
                        </Text>
                    </View>
                </View>
            </View>
            <Image
                style={{ height: "15%", alignSelf: "center" }}
                source={require("../../assets/img/workoutImage.png")}
                resizeMode={"contain"}
            />
            <View
                style={{
                    height: 60,
                    // width: "100%",
                    marginHorizontal: "15%",
                    backgroundColor: greyHeader,
                    borderRadius: 10,
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <View>
                    <Text style={styles.t1}>DURATION</Text>
                    <Text style={styles.t2}>5 WEEKS</Text>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor: greyText,
                        // marginVertical: 10,
                        height: 28,
                    }}
                />
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.t1}>PROGRAM</Text>
                    <Text style={styles.t2}>5</Text>
                </View>
            </View>
            <View
                style={{
                    marginHorizontal: "5%",
                    marginTop: 40,
                    marginBottom: 20,
                }}
            >
                <Text style={[styles.t1, { fontSize: 16 }]}>POWERLIFTING</Text>
                <Text style={styles.t2}>+5 minutes before workout</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    backgroundColor: greyHeader,
                    marginHorizontal: "5%",
                    borderRadius: 10,
                    paddingVertical: 10,
                    // maxHeight: 350,
                    marginBottom: 30,
                }}
            >
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={true}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={{
                                marginHorizontal: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            onPress={handlePress}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <View
                                    style={{
                                        width: 69,
                                        height: 67,
                                        backgroundColor: "#D9D9D9",
                                        borderRadius: 5,
                                    }}
                                ></View>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text
                                        style={[
                                            styles.t3,
                                            { marginBottom: 10 },
                                        ]}
                                    >
                                        Week {item}
                                    </Text>
                                    <Text style={styles.t2}>4 Days</Text>
                                </View>
                            </View>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={24}
                                color={white}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => [1, 2, 3, 4, 5].indexOf(item)}
                    ItemSeparatorComponent={separators}
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
    textWhite: {
        fontFamily: "LatoB",
        fontSize: 18,
        color: white,
        paddingLeft: 20,
    },
    textGrey: {
        fontFamily: "LatoR",
        fontSize: 10,
        color: greyText,
        paddingLeft: 20,
        marginTop: 5,
    },
    t1: {
        fontFamily: "LatoB",
        fontSize: 14,
        color: white,
        marginBottom: 5,
    },
    t2: {
        fontFamily: "LatoR",
        fontSize: 10,
        color: greyText,
    },
    t3: {
        fontFamily: "LatoR",
        fontSize: 14,
        color: white,
    },
});
