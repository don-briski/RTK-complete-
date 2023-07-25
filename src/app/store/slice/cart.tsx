import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'



interface ICartState {
    name: string,
    category: string,
    qty: number
}

const initialState : ICartState[] = [{name:"shoe", category:"top", qty:8}];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addCart(state , {payload}){
            const obj = state.find(val => val.name == payload.name)
            if(obj) {
                ++obj.qty
                const newState = state.filter(val => val.name !== obj.name)
                state = [...newState, obj]
                return 
            }
            state.push(payload )
            console.log(payload)
        },
        deleteCart(state, action){
            return state.filter(val => val.name !== action.payload)
        }
    }
})


export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;