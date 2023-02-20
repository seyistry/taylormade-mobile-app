import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "./features/auth/user";
import PreAuthStack from "./navigation/PreAuthStack";
import PostAuthStack from "./navigation/PostAuthStack";
import { blackBg } from "./utils/color";

export default function Main() {
    const userValue = useSelector(userState);
    return (
        <View style={styles.container}>
            {userValue === null ? <PreAuthStack /> : <PostAuthStack />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
