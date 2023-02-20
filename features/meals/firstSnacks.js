import { createSlice } from "@reduxjs/toolkit";

export const firstSnack = createSlice({
    name: "firstSnack",
    initialState: {
        value: true,
    },
    reducers: {
        firstSnackToggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { firstSnackToggle } = firstSnack.actions;

export const firstSnackState = (state) => state.firstSnack.value;

export default firstSnack.reducer;
