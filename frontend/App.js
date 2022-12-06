import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { blackBg } from "./utils/color";

function AppStatusBar({ backgroundColor, ...props }) {
    return (
        <SafeAreaView
            style={{ backgroundColor, height: Constants.statusBarHeight }}
        >
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <>
            <AppStatusBar backgroundColor={blackBg} style="light" />
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
