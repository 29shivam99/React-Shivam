import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // for default export u can name it anything
// out app store will also have reducers corresponding to each slice.
const appStore = configureStore({
  reducer: {
    // the action is genrally named after the slice, like cartSlice hai to cart naam de diya action ka
    cart: cartReducer,
  },
});

export default appStore;
