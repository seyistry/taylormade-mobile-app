import { createSlice } from "@reduxjs/toolkit";

export const breakfast = createSlice({
    name: "breakfast",
    initialState: {
        value: true,
    },
    reducers: {
        breakfastToggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { breakfastToggle } = breakfast.actions;

export const breakfastState = (state) => state.breakfast.value;

export default breakfast.reducer;
