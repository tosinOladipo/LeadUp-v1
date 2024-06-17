import { apiSlice } from './ApiSlice';
const COMPANY_URL = '/api/v1/company';

export const companyApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    createCompany: builder.mutation({
      query: (data) => ({
        url: `${COMPANY_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateCompanyMutation } = companyApiSlice;