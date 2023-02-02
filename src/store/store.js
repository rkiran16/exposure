import { configureStore } from "@reduxjs/toolkit";
import homeSliceReducer from "./homeSlice";
import searchSliceReducer from "./searchSlice";


export default configureStore({
  reducer: {
    search: searchSliceReducer,
    home: homeSliceReducer
  }
})