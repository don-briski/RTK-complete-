import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

interface IProductState {
    name: string,
    category: string,
    qty: number
}

const initialState: IProductState[] = [
    {name: "oliver", category: "puma", qty: 10 },
{name: "mercurial", category: "addidas", qty: 7 },
{name: "air-max", category: "nike", qty: 5 }];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        addProduct(state, action){
            state.push(action.payload)
        },
        deleteProduct(state, action){}
    }
})


export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;