import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from "react-native";
import React from "react";
import { white } from "../../utils/color";
import { Ionicons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;

export default function MealCard(props) {
    const { foodData, onPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ImageBackground
                source={{ uri: foodData.meals[0].strMealThumb }}
                resizeMode="stretch"
            >
                <View
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        height: windowHeight * 0.3,
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "LatoB",
                            fontSize: 20,
                            color: white,
                            width: "70%",
                        }}
                    >
                        {foodData.meals[0].strMeal}
                    </Text>
                    <View
                        style={{
                            width: 80,
                            height: 25,
                            backgroundColor: white,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                        }}
                    >
                        <Ionicons name="time" size={16} color="#039000" />
                        <Text style={{ fontFamily: "LatoB", fontSize: 9 }}>
                            {props.time}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: "5%",
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden",
    },
});
