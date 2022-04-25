import {createSlice} from '@reduxjs/toolkit';
import { findById , findByIdFavorite } from '../utils/helpers';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        favorite:[],
        item: [],
        totalAmount: 0,
    },
    reducers:{
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = findById(state, newItem.id);
            state.totalAmount++;
            if(!existingItem) {
                state.item.push({
                    id: newItem.id,
                    url:newItem.img,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.name,
                    title:newItem.title,
                })
            } else {
                existingItem.quantity ++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        addFavoriteItem:(state,action)=>{
            const newItem = action.payload;
            const existingItem = findByIdFavorite(state, newItem.id);
            state.totalAmount++;
            if(!existingItem) {
                state.favorite.push({
                    id: newItem.id,
                    url:newItem.img,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.name,
                    title:newItem.title,
                })
            } else {
                existingItem.quantity ++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart (state, action) {
            const id = action.payload;
            const existingItem = findById(state,id);
            state.totalAmount--;
            if(existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            } 
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;