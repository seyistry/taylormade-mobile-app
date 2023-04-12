import { configureStore, combineReducers } from "@reduxjs/toolkit";
import breakfastReducer from "./features/meals/breakfast";
import firstSnackReducer from "./features/meals/firstSnacks";
import launchReducer from "./features/meals/launch";
import secondSnackReducer from "./features/meals/secondSnacks";
import dinnerReducer from "./features/meals/dinner";
import userReducer from "./features/auth/user";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist/es/constants";
import { STATUS_STORAGE_KEY } from "./utils/api";

const reducers = combineReducers({
    breakfast: breakfastReducer,
    firstSnack: firstSnackReducer,
    launch: launchReducer,
    secondSnack: secondSnackReducer,
    dinner: dinnerReducer,
    user: userReducer,
});

const persistConfig = {
    key: STATUS_STORAGE_KEY,
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
