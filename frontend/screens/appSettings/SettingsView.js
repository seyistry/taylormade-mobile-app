import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { blackBg, greyHeader, white } from "../../utils/color";
import SettingsCard from "../../components/card/SettingsCard";
import { Ionicons } from "@expo/vector-icons";
import Hr from "../../components/card/Hr";
import { useDispatch } from "react-redux";
import { removeUser } from "../../features/auth/user";

export default function SettingsView({ navigation }) {
    const dispatch = useDispatch();
    const handleMealPress = () => {
        navigation.navigate("Setting Meal");
    };
    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={[
                        styles.whiteText,
                        {
                            fontFamily: "LatoB",
                            fontSize: 18,
                            padding: 20,
                            backgroundColor: greyHeader,
                        },
                    ]}
                >
                    SETTINGS
                </Text>
            </View>
            <SettingsCard name="Personal Details" type="person" />
            <Hr />
            <SettingsCard
                name="Meal Settings"
                type="meals"
                onPress={handleMealPress}
            />
            <Hr />
            <SettingsCard name="Training Settings" type="training" />
            <Hr />
            <SettingsCard name="Contact Us" type="contact" />
            <Hr />
            <SettingsCard name="Rate Us" type="rate" />
            <Hr />
            <SettingsCard name="Help" type="help" />
            <Hr />
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                }}
                onPress={() => dispatch(removeUser())}
            >
                <Ionicons name="ios-log-out" size={22} color={white} />
                <Text
                    style={{
                        color: "#FE4B4B",
                        fontFamily: "LatoR",
                        fontSize: 16,
                        paddingLeft: 20,
                    }}
                >
                    Log Out
                </Text>
            </TouchableOpacity>
            <Hr />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
    whiteText: {
        color: white,
    },
});
