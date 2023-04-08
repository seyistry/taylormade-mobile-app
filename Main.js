import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "./features/auth/user";
import PreAuthStack from "./navigation/PreAuthStack";
import PostAuthStack from "./navigation/PostAuthStack";
import { blackBg } from "./utils/color";
import { userProfileUrl } from "./utils/apiLinks";
import Loading from "./components/card/Loading";
import { removeLogData } from "./utils/api";

export default function Main() {
    const userValue = useSelector(userState);
    const [user, setUser] = useState(null);
    // if (userValue !== null) console.log(userValue.data.access_token);
    // const data = {
    //     email: "malik@yum.cu",
    //     password: "qqqqqq",
    // };

    const load = async () => {
        return getLogData();
    };

    const loadUser = async () => {
        if (user === null)
            if (userValue !== null) {
                await fetch(userProfileUrl + new URLSearchParams(load), {
                    headers: {
                        Authorization: `Bearer ${userValue.data.access_token}`,
                    },
                })
                    .then((resp) => resp.json())
                    .then((json) => {
                        removeLogData();
                        setUser(json);
                    });
            }
    };

    useEffect(() => {
        loadUser();
    }, [user]);

    const userBio = loadUser();
    return (
        <View style={styles.container}>
            {userValue === null ? (
                <PreAuthStack />
            ) : user !== null ? (
                <PostAuthStack
                    token={userValue.data.access_token}
                    user={user}
                />
            ) : (
                <Loading />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: blackBg,
    },
});
