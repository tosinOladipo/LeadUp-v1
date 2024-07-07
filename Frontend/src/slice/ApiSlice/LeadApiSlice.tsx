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
    }),

    getAllLeads: builder.query<ILead[], void>({
      query: () => ({
        url: `${LEAD_URL}/`,
        method: 'GET',
      }),
    }),

    getLeadById: builder.query<ILead, string>({
      query: (id) => ({
        url: `${LEAD_URL}/${id}`,
        method: 'GET',
      }),
    }),

    updateLead: builder.mutation<void, ILead>({
      query: ({ id, ...rest }) => ({
        url: `${LEAD_URL}/${id}`,
        method: 'PUT',
        body: rest
      }),
    }),

    deleteLead: builder.mutation<void, string>({
      query: (id) => ({
        url: `${LEAD_URL}/${id}`,
        method: 'DELETE',
      }),
    }),


  }),
});

export const { 
    useCreateLeadMutation,
    useGetAllLeadsQuery,
    useGetLeadByIdQuery,
    useUpdateLeadMutation,
    useDeleteLeadMutation
} = leadApiSlice;