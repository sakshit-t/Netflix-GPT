import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: { language: "en" },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;
