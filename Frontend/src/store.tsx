import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slice/ApiSlice/ApiSlice';
import authReducer  from './slice/AppSlice/AuthSlice';
import companyReducer from './slice/AppSlice/companySlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    company: companyReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;