import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { greyText, white } from "../../utils/color";

const icon = {
    duration: (
        <MaterialCommunityIcons
            name="calendar-check-outline"
            size={24}
            color={white}
        />
    ),
    goal: <Ionicons name="checkmark-circle-outline" size={24} color={white} />,
    level: <Ionicons name="ios-bar-chart" size={24} color={white} />,
    target: (
        <MaterialCommunityIcons name="target-account" size={24} color={white} />
    ),
};

export default function PlanCard(props) {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", width: 50 }}>
                {icon[props.type]}
            </View>
            <View>
                <Text style={styles.t1}>{props.title}</Text>
                <Text style={styles.t2}>{props.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    t1: {
        color: greyText,
        fontFamily: "LatoR",
        fontSize: 10,
    },
    t2: {
        color: white,
        fontFamily: "LatoR",
        fontSize: 10,
    },
});
