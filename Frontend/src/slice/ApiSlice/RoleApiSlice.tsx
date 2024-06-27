import { apiSlice } from './ApiSlice';
const ROLE_URL = '/roles';
import { IRole } from '../../interface/roleInterface';

export const roleApiSlice = apiSlice.injectEndpoints({

  endpoints: (builder) => ({

    createRole: builder.mutation({
      query: (data) => ({
        url: `${ROLE_URL}`,
        method: 'POST',
        body: data,
      }),
    }),

    getAllRoles: builder.query<IRole[], void>({
      query: () => ({
        url: `${ROLE_URL}/`,
        method: 'GET',
      }),
    }),

    getRoleById: builder.query<IRole, string>({
      query: (id) => ({
        url: `${ROLE_URL}/${id}`,
        method: 'GET',
      }),
    }),

    updateRole: builder.mutation<void, IRole>({
      query: ({ id, ...rest }) => ({
        url: `${ROLE_URL}/${id}`,
        method: 'PUT',
        body: rest
      }),
    }),

    deleteRole: builder.mutation<void, string>({
      query: (id) => ({
        url: `${ROLE_URL}/${id}`,
        method: 'DELETE',
      }),
    }),


  }),
});

export const { 
  useCreateRoleMutation, 
  useGetAllRolesQuery, 
  useGetRoleByIdQuery,
  useUpdateRoleMutation,
  useDeleteRoleMutation 
} = roleApiSlice;