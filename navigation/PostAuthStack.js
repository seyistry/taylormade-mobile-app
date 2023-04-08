import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsMealsView from "../screens/appSettings/SettingsMealsView";
import MealInfo from "../screens/meal/MealInfo";
import ActiveExercise from "../screens/workout/ActiveExercise";
import ExerciseDetails from "../screens/workout/ExerciseDetails";
import Tabs from "./Tabs";
import SubscriptionPlan from "../screens/onboarding/SubscriptionPlan";
import React, { useEffect, Suspense } from "react";
import { userProfileUrl } from "../utils/apiLinks";

const Stack = createStackNavigator();

function MyStack({ token, user }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={
                user.data.active_plan === "inactive plan"
                    ? "Subscription Plan"
                    : "Home"
            }
        >
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Setting Meal" component={SettingsMealsView} />
            <Stack.Screen name="Meal Information" component={MealInfo} />
            <Stack.Screen name="Exercise Details" component={ExerciseDetails} />
            <Stack.Screen name="Active Exercise" component={ActiveExercise} />
            <Stack.Screen
                name="Subscription Plan"
                component={SubscriptionPlan}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default function PostAuthStack(props) {
    const { token, user } = props;
    // console.log(token);
    // console.log(user);
    return (
        <NavigationContainer>
            <MyStack token={token} user={user} />
        </NavigationContainer>
    );
}
