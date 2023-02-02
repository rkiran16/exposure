import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: {}
  },
  reducers: {
    saveSearch: (state, action) => {
      return {
        ...state,
        searchResults: action.payload
      }
    }
  }
})

export const { saveSearch } = searchSlice.actions

export default searchSlice.reducer