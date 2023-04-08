import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "./features/auth/user";
import PreAuthStack from "./navigation/PreAuthStack";
import PostAuthStack from "./navigation/PostAuthStack";
import { blackBg } from "./utils/color";
import { userProfileUrl } from "./utils/apiLinks";
import Loading from "./components/card/Loading";
import { getLog } from "./utils/api";

export default function Main() {
    const userValue = useSelector(userState);
    const [user, setUser] = useState(null);

    const token = async () => {
        const data = await getLog("token");
        return data;
    };

    const load = async () => {
        const email = await getLog("email");
        const password = await getLog("password");
        return { email, password };
    };

    const loadUser = async () => {
        const bearer = await token();
        // console.log(bearer);
        await fetch(userProfileUrl + new URLSearchParams(load), {
            headers: {
                Authorization: `Bearer ${bearer}`,
            },
        })
            .then((resp) => resp.json())
            .then((json) => {
                setUser(json);
            });
    };

    useEffect(() => {
        if (user === null) loadUser();
    }, [user]);

    // const userBio = loadUser();
    return (
        <View style={styles.container}>
            {userValue === null ? (
                <PreAuthStack />
            ) : user !== null ? (
                <PostAuthStack token={token} user={user} />
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
