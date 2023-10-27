import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[],
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            state.cart.push(action);
        },

        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter((cartItem)=> cartItem !== action);
        },

        refreshCart: (state, action)=> {
            state.cart = action;
        }
    },
})

export const {addToCart, removeFromCart, refreshCart} = cartSlice.actions;
export default cartSlice.reducer;