import { configureStore } from "@reduxjs/toolkit";
import homeSliceReducer from "./homeSlice";
import searchSliceReducer from "./searchSlice";
import cartSliceReducer from "./cartSlice";


export default configureStore({
  reducer: {
    search: searchSliceReducer,
    home: homeSliceReducer,
    cart: cartSliceReducer
  }
})