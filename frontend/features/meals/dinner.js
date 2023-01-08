import { createSlice } from "@reduxjs/toolkit";

export const dinner = createSlice({
    name: "dinner",
    initialState: {
        value: true,
    },
    reducers: {
        dinnerToggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { dinnerToggle } = dinner.actions;

export const dinnerState = (state) => state.dinner.value;

export default dinner.reducer;
