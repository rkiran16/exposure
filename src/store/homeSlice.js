import { createSlice } from "@reduxjs/toolkit"

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    heroImage: ""
  },
  reducers: {
    saveHeroImg: (state, action) => {
      return {
        ...state,
        heroImage: action.payload
      }
    }
  }
})

export const { saveHeroImg } = homeSlice.actions

export default homeSlice.reducer;