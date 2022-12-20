import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginMain from "../screens/login/LoginMain";
import StepEight from "../screens/onboarding/StepEight";
import StepEleven from "../screens/onboarding/StepEleven";
import StepFifteen from "../screens/onboarding/StepFifteen";
import StepFive from "../screens/onboarding/StepFive";
import StepFour from "../screens/onboarding/StepFour";
import StepFourteen from "../screens/onboarding/StepFourteen";
import StepNine from "../screens/onboarding/StepNine";
import StepOne from "../screens/onboarding/StepOne";
import StepSeven from "../screens/onboarding/StepSeven";
import StepSeventeen from "../screens/onboarding/StepSeventeen";
import StepSix from "../screens/onboarding/StepSix";
import StepSixteen from "../screens/onboarding/StepSixteen";
import StepTen from "../screens/onboarding/StepTen";
import StepThirteen from "../screens/onboarding/StepThirteen";
import StepThree from "../screens/onboarding/StepThree";
import StepTwelve from "../screens/onboarding/StepTwelve";
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
            <Stack.Screen name="STEP 4 OF 20" component={StepFour} />
            <Stack.Screen name="STEP 5 OF 20" component={StepFive} />
            <Stack.Screen name="STEP 6 OF 20" component={StepSix} />
            <Stack.Screen name="STEP 7 OF 20" component={StepSeven} />
            <Stack.Screen name="STEP 8 OF 20" component={StepEight} />
            <Stack.Screen name="STEP 9 OF 20" component={StepNine} />
            <Stack.Screen name="STEP 10 OF 20" component={StepTen} />
            <Stack.Screen name="STEP 11 OF 20" component={StepEleven} />
            <Stack.Screen name="STEP 12 OF 20" component={StepTwelve} />
            <Stack.Screen name="STEP 13 OF 20" component={StepThirteen} />
            <Stack.Screen name="STEP 14 OF 20" component={StepFourteen} />
            <Stack.Screen name="STEP 15 OF 20" component={StepFifteen} />
            <Stack.Screen name="STEP 16 OF 20" component={StepSixteen} />
            <Stack.Screen
                name="STEP 17 OF 20"
                component={StepSeventeen}
                options={{
                    headerShown: false,
                }}
            />
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
