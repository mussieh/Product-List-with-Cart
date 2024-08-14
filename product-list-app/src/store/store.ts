import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import modalReducer from "./modal-slice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
