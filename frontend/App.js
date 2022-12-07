import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { blackBg } from "./utils/color";
import SplashMain from "./screens/splashscreen/SplashMain";

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
                <SplashMain />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
