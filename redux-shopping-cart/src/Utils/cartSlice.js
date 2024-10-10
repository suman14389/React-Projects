import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseItemQuantity: (state, action) => {
            if(state.items.find(item => item.id === action.payload.id)){
                state.items.find(item => item.id === action.payload.id).quantity++;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        decreaseItemQuantity: (state, action) => {
            if(state.items.find(item => item.id === action.payload.id).quantity === 1){
                state.items = state.items.filter(item => item.id !== action.payload.id);
            } else {
                state.items.find(item => item.id === action.payload.id).quantity--;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items = [];
        },
        getCartItems: (state) => {
            return state.items;
        },
        getTotalCardItems: (state) => {
            return state.items.reduce((total, item) => {
                return total + item.quantity;
            }, 0)
        }
    }
})

export const { increaseItemQuantity, decreaseItemQuantity, removeItem, clearCart, getCartItems, getTotalCardItems } = cartSlice.actions;

export default cartSlice.reducer;