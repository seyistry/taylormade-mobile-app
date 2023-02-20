import { Image, StyleSheet, Text, View } from "react-native";
import { blackBg, white } from "../../utils/color";
import { LinearGradient } from "expo-linear-gradient";
import ButtonFill from "../../components/button/ButtonFill";

const StepTen = ({ navigation }) => {
    const handleSubmit = () => {
        navigation.navigate("STEP 11 OF 20");
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{
                    height: "60%",
                    borderWidth: 2,
                    justifyContent: "flex-end",
                }}
                colors={["transparent", blackBg]}
                locations={[0.5, 0.92]}
            >
                <Image
                    style={{
                        alignSelf: "center",
                        maxWidth: "90%",
                        zIndex: -1,
                    }}
                    source={require("../../assets/img/stepten.png")}
                    resizeMode="contain"
                />
            </LinearGradient>
            <View style={{ height: "40%", justifyContent: "space-between" }}>
                <View>
                    <Text style={[styles.t1, styles.text]}>
                        YOU CAN ALWAYS CHANGE YOUR HABITS FOR THE BETTER
                    </Text>
                    <Text style={[styles.t2, styles.text]}>
                        Big life changes often affect a person’s weight. It’s
                        normal. We will support you until you reach your goal.
                    </Text>
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <ButtonFill
                        name="CONTINUE"
                        fill={true}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </View>
    );
};

export default StepTen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    text: {
        color: white,
        textAlign: "center",
        paddingHorizontal: "2%",
    },
    t1: {
        fontFamily: "LatoXb",
        fontSize: 20,
        paddingBottom: 20,
    },
    t2: {
        fontFamily: "LatoR",
        fontSize: 14,
    },
});
