import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const itemIndex = state.items.findIndex(
                (item) => item.name === action.payload.name
            );

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex(
                (item) => item.name === action.payload
            );

            state.items.splice(itemIndex, 1);
        },
        reduceCartQuantity(state, action: PayloadAction<string>) {
            const itemIndex = state.items.findIndex(
                (item) => item.name === action.payload
            );

            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, reduceCartQuantity, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
