import { configureStore } from "@reduxjs/toolkit";
import breakfastReducer from "./features/meals/breakfast";
import firstSnackReducer from "./features/meals/firstSnacks";
import launchReducer from "./features/meals/launch";
import secondSnackReducer from "./features/meals/secondSnacks";
import dinnerReducer from "./features/meals/dinner";
import userReducer from "./features/auth/user";

export default configureStore({
    reducer: {
        breakfast: breakfastReducer,
        firstSnack: firstSnackReducer,
        launch: launchReducer,
        secondSnack: secondSnackReducer,
        dinner: dinnerReducer,
        user: userReducer,
    },
});
