import { apiSlice } from './ApiSlice';
const CAMPAIGN_URL = '/campaigns';
import { ICampaign } from '../../interface/campaignInterface';

export const campaignApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    createCampaign: builder.mutation({
      query: (data) => ({
        url: `${CAMPAIGN_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Campaign']
    }),

    getAllCampaigns: builder.query<ICampaign[], void>({
      query: () => ({
        url: `${CAMPAIGN_URL}/`,
        method: 'GET',
      }),
      providesTags: ['Campaign']
    }),

    getCampaignById: builder.query<ICampaign, any>({
      query: (id) => ({
        url: `${CAMPAIGN_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: ['Campaign']
    }),

    getCampaignByUserId: builder.query<ICampaign[], any>({
      query: (userId) => ({
        url: `${CAMPAIGN_URL}/user/${userId}`,
        method: 'POST',
      }),
      providesTags: ['Campaign']
    }),

    updateCampaign: builder.mutation<void, ICampaign>({
      query: ({ id, ...rest }) => ({
        url: `${CAMPAIGN_URL}/${id}`,
        method: 'PUT',
        body: rest
      }),
      invalidatesTags: ['Campaign']
    }),

    deleteCampaign: builder.mutation<void, string>({
      query: (id) => ({
        url: `${CAMPAIGN_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Campaign']
    }),


  }),
});

export const { 
  useCreateCampaignMutation,
  useGetAllCampaignsQuery,
  useGetCampaignByIdQuery,
  useGetCampaignByUserIdQuery,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation
} = campaignApiSlice;