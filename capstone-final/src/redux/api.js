import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: 'users',
        method: 'POST',
        body: registerUser,
      }),
    }),
  }),
})

// Export hooks for usage in functional components
// Make sure to rename the hook according to your API slice's name
export const { useRegisterMutation } = apiSlice; 