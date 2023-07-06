import { configureStore } from '@reduxjs/toolkit';
import cartReducer './cart/cart.ts';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});