import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../store/slice/product'
import cartSlice from '../store/slice/cart'
export const store = configureStore({
  reducer: {
    //state of data
    productArray: productSlice,
    cartArray: cartSlice

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch