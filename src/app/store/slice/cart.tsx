import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addCart(state , action){

            
        },
        deleteCart(state, action){}
    }
})


export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;