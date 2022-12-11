import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StepOne from "../screens/onboarding/StepOne";
import { white, greyBg } from "../utils/color";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: greyBg,
                },
                headerTitleStyle: {
                    color: white,
                    fontFamily: "LatoB",
                    fontSize: 14,
                    textAlign: "center",
                },
                headerTitleAlign: "center",
            }}
        >
            <Stack.Screen name="STEP 1 OF 20" component={StepOne} />
        </Stack.Navigator>
    );
}

export default function SignUpStack() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
