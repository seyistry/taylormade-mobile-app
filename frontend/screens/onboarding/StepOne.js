import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { blackBg, greyBg, white } from "../../utils/color";
import ButtonFill from "../../components/button/ButtonFill";

const StepOne = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate("STEP 2 OF 20");
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.t1}>1000</Text>
                    <Text style={[styles.t1, { fontFamily: "LatoR" }]}>+</Text>
                </View>
                <Text style={styles.t2}>ACTIVE USERS</Text>
            </View>
            <LinearGradient
                colors={["transparent", "transparent", greyBg, greyBg, greyBg]}
                style={{
                    height: "60%",
                    paddingBottom: 20,
                    justifyContent: "space-between",
                }}
            >
                <Image
                    style={styles.image}
                    source={require("../../assets/img/stepOneImg.png")}
                    resizeMode="contain"
                />
                <ButtonFill onPress={handlePress} fill={true} name="CONTINUE" />
            </LinearGradient>
        </View>
    );
};

export default StepOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    t1: {
        color: white,
        fontFamily: "LatoL",
        fontSize: 64,
    },
    t2: {
        color: white,
        fontFamily: "LatoXb",
        fontSize: 18,
    },
    image: {
        zIndex: -2,
        width: "100%",
    },
});
