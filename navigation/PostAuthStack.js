import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsMealsView from "../screens/appSettings/SettingsMealsView";
import MealInfo from "../screens/meal/MealInfo";
import ActiveExercise from "../screens/workout/ActiveExercise";
import ExerciseDetails from "../screens/workout/ExerciseDetails";
import Tabs from "./Tabs";
import SubscriptionPlan from "../screens/onboarding/SubscriptionPlan";
import React, { useEffect, Suspense, useState } from "react";
import { userProfileUrl } from "../utils/apiLinks";
import Loading from "../components/card/Loading";
import { getLog } from "../utils/api";

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

export default function PostAuthStack() {
    const [user, setUser] = useState(null);

    const token = async () => {
        const data = await getLog("token");
        return data;
    };
    const loadUser = async () => {
        const bearer = await token();
        // console.log(bearer);
        await fetch(userProfileUrl, {
            headers: {
                Authorization: `Bearer ${bearer}`,
            },
        })
            .then((resp) => resp.json())
            .then((json) => {
                console.log(json);
                if (json.status === true) setUser(json);
            });
    };

    useEffect(() => {
        if (user === null) loadUser();
        console.log(user);
    }, [user]);

    return (
        <NavigationContainer>
            {user !== null ? (
                <MyStack token={token} user={user} />
            ) : (
                <Loading />
            )}
        </NavigationContainer>
    );
}
