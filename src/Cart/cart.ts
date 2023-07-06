import { createSlice } from '@reduxjs/toolkit'
import { CartItem } from '../data/data.ts'

const initialState = {
  items: [],
  amount : 0,
  total: 0,
  isLoading: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      
  }
})

export default cartSlice.reducer