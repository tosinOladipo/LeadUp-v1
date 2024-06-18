import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Company'],
  endpoints: (builder) => ({}),
});