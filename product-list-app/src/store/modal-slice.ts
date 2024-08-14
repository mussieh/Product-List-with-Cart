import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
});

export const { setIsOpen } = modalSlice.actions;

export default modalSlice.reducer;
