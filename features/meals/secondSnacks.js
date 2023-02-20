import { createSlice } from "@reduxjs/toolkit";

export const secondSnack = createSlice({
    name: "secondSnack",
    initialState: {
        value: true,
    },
    reducers: {
        secondSnackToggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { secondSnackToggle } = secondSnack.actions;

export const secondSnackState = (state) => state.secondSnack.value;

export default secondSnack.reducer;
