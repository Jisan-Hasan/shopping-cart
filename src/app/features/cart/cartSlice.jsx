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
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
