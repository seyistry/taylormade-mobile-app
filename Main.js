import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { userState } from "./features/auth/user";
import PreAuthStack from "./navigation/PreAuthStack";
import PostAuthStack from "./navigation/PostAuthStack";
import { blackBg } from "./utils/color";

export default function Main() {
    const userValue = useSelector(userState);
    console.log(userValue);

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
