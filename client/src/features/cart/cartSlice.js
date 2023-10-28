import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:[],
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) =>{
            state.cart.push(action.payload);
        },

        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter((cartItem)=> cartItem !== action.payload);
        },

        refreshCart: (state, action)=> {
            state.cart = action.payload.data.cartItems;
            console.log(action);
        }
    },
})

export const {addToCart, removeFromCart, refreshCart} = cartSlice.actions;
export default cartSlice.reducer;