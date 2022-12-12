import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginMain from "../screens/login/LoginMain";
import StepOne from "../screens/onboarding/StepOne";
import StepThree from "../screens/onboarding/StepThree";
import StepTwo from "../screens/onboarding/StepTwo";
import AuthView from "../screens/splashscreen/AuthView";
import { white, greyBg, greyHeader } from "../utils/color";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: greyHeader,
                },
                headerTitleStyle: {
                    color: white,
                    fontFamily: "LatoB",
                    fontSize: 14,
                    textAlign: "center",
                },
                headerTitleAlign: "center",
                headerTintColor: white,
            }}
        >
            <Stack.Screen
                name="Auth"
                component={AuthView}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginMain}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="STEP 1 OF 20" component={StepOne} />
            <Stack.Screen name="STEP 2 OF 20" component={StepTwo} />
            <Stack.Screen name="STEP 3 OF 20" component={StepThree} />
        </Stack.Navigator>
    );
}

export default function PreAuthStack() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
