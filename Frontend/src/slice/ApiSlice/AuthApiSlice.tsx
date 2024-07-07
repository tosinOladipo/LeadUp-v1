import { IUser } from '../../interface/userInterface';
import { apiSlice } from './ApiSlice';
const USERS_URL = '/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/`,
        method: 'POST',
        body: data,
      }),
    }),


    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),


    getAllUser: builder.query<IUser[],void>({
      query: () => ({
        url: `${USERS_URL}/`,
        method: 'GET',
      }),
    }),


    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),


  }),
});

export const { useRegisterMutation, useLoginMutation, useGetAllUserQuery, useLogoutMutation } = userApiSlice;