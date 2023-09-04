import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newCartItem = action.payload;
            const isAlreadyExist = state.cart.findIndex(
                (item) => item.id === newCartItem.id
            );
            if (isAlreadyExist !== -1) {
                state.cart[isAlreadyExist].quantity += 1;
            } else {
                state.cart.push({ ...newCartItem, quantity: 1 });
            }
        },
        addOneToCart: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            state.cart[productIndex].quantity += 1;
        },
        removeOneFromCart: (state, action) => {
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload
            );
            state.cart[productIndex].quantity -= 1;
        },
        deleteFromCart: (state, action) => {
            state.cart = [...state.cart].filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToCart, addOneToCart, removeOneFromCart, deleteFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;
