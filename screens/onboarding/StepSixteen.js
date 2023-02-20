import { StyleSheet, Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { blackBg, blueBg, white } from "../../utils/color";

export default function StepSixteen({ navigation }) {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: "40%",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <CircularProgress
                    value={100}
                    radius={100}
                    activeStrokeColor={blueBg}
                    inActiveStrokeColor={white}
                    inActiveStrokeOpacity={0.9}
                    duration={10000}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    progressValueStyle={{ fontWeight: "100", color: white }}
                    valueSuffix={"%"}
                    title={"Loading..."}
                    titleColor={"white"}
                    titleStyle={{ fontFamily: "LatoR", fontSize: 20 }}
                    onAnimationComplete={() =>
                        navigation.navigate("STEP 17 OF 20")
                    }
                />
            </View>
            <View
                style={{
                    height: "60%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text
                    style={{ fontFamily: "LatoXb", fontSize: 30, color: white }}
                >
                    CREATING YOUR PERSONAL PLAN
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
