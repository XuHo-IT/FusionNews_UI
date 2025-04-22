import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'en', 
  },
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'en' ? 'vi' : 'en';
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = themeSlice.actions;
export default themeSlice.reducer;
