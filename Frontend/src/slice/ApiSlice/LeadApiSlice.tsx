import { apiSlice } from './ApiSlice';
const LEAD_URL = '/leads';
import {ILead} from '../../interface/leadInterface'

export const leadApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    createLead: builder.mutation({
      query: (data) => ({
        url: `${LEAD_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Lead']
    }),

    getAllLeads: builder.query<ILead[], void>({
      query: () => ({
        url: `${LEAD_URL}/`,
        method: 'GET',
      }),
      providesTags: ['Lead']
    }),

    getLeadById: builder.query<ILead, any>({
      query: (id) => ({
        url: `${LEAD_URL}/profile/${id}`,
        method: 'GET',
      }),
      providesTags: ['Lead']
    }),

    getLeadsByUserId: builder.query<ILead[], any>({
      query: (userId) => ({
        url: `${LEAD_URL}/user/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Lead']
    }),

    updateLead: builder.mutation<void, any>({
      query: ({ id, ...rest }) => ({
        url: `${LEAD_URL}/profile/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Lead']
    }),

    deleteLead: builder.mutation<void, string>({
      query: (id) => ({
        url: `${LEAD_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lead']
    }),


  }),
});

export const { 
    useCreateLeadMutation,
    useGetAllLeadsQuery,
    useGetLeadByIdQuery,
    useGetLeadsByUserIdQuery,
    useUpdateLeadMutation,
    useDeleteLeadMutation
} = leadApiSlice;