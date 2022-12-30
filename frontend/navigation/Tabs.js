import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    FontAwesome5,
} from "@expo/vector-icons";
import PlanView from "../screens/plan/PlanView";
import WorkOutView from "../screens/workout/WorkOutView";
import MealView from "../screens/meal/MealView";
import { blackBg, greyHeader, white } from "../utils/color";
import SettingsView from "../screens/appSettings/SettingsView";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: white,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: greyHeader,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderColor: blackBg,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Plan"
                component={PlanView}
                options={{
                    tabBarLabel: "plan",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="clipboard-list"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="workout"
                component={WorkOutView}
                options={{
                    tabBarLabel: "workout",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="timer"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Meal"
                component={MealView}
                options={{
                    tabBarLabel: "Meal",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="no-meals"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsView}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-settings" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Tabs() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
