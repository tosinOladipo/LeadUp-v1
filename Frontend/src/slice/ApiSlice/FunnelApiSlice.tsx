import { apiSlice } from './ApiSlice';
const FUNNEL_URL = '/funnels';
import { IFunnel } from '../../interface/funnelInterface';

export const funnelApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    createFunnel: builder.mutation({
      query: (data) => ({
        url: `${FUNNEL_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    getAllFunnels: builder.query<IFunnel[], void>({
      query: () => ({
        url: `${FUNNEL_URL}/`,
        method: 'GET',
      }),
    }),

    getFunnelById: builder.query<IFunnel, string>({
      query: (id) => ({
        url: `${FUNNEL_URL}/${id}`,
        method: 'GET',
      }),
    }),

    updateFunnel: builder.mutation<void, IFunnel>({
      query: ({ id, ...rest }) => ({
        url: `${FUNNEL_URL}/${id}`,
        method: 'PUT',
        body: rest
      }),
    }),

    deleteFunnel: builder.mutation<void, string>({
      query: (id) => ({
        url: `${FUNNEL_URL}/${id}`,
        method: 'DELETE',
      }),
    }),


  }),
});

export const { 
    useCreateFunnelMutation,
    useGetAllFunnelsQuery,
    useGetFunnelByIdQuery,
    useUpdateFunnelMutation,
    useDeleteFunnelMutation
} = funnelApiSlice;