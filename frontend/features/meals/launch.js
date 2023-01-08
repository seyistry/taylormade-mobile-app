import { createSlice } from "@reduxjs/toolkit";

export const launch = createSlice({
    name: "launch",
    initialState: {
        value: true,
    },
    reducers: {
        launchToggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { launchToggle } = launch.actions;

export const launchState = (state) => state.launch.value;

export default launch.reducer;
