// mealsSlice.js
import { createSlice } from '@reduxjs/toolkit';
// a faire
export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;
