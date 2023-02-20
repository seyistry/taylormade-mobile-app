import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsMealsView from "../screens/appSettings/SettingsMealsView";
import MealInfo from "../screens/meal/MealInfo";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Setting Meal" component={SettingsMealsView} />
            <Stack.Screen name="Meal Information" component={MealInfo} />
        </Stack.Navigator>
    );
}

export default function PostAuthStack() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
