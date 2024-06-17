import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyInfo: localStorage.getItem('companyInfo')
    ? JSON.parse(localStorage.getItem('companyInfo') || '{}')
    : null,
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.companyInfo = action.payload;
      localStorage.setItem('companyInfo', JSON.stringify(action.payload));
    },
  },
});

export const { setCredentials } = companySlice.actions;

export default companySlice.reducer;