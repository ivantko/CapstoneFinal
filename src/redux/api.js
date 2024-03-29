//React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Service'],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: 'users',
        method: 'POST',
        body: registerUser,
      }),
    }),
    login: builder.mutation({
      query: (loginUser) => ({
        url: 'auth/login',
        method: 'POST',
        body: loginUser,
      }),
    }),
    account: builder.query({
      query:(token) => ({
        url: 'users',
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    }),
    services: builder.query({
      query: (token) => ({
        url: 'products',
        headers: {
          authorization: `Bearer ${token}`,
        },
    }),
    providesTags: ['Service']
    }),
    serviceDetails: builder.query({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
      providesTags: ['Service']
    }),
    addService: builder.mutation({
      query: ({ token, body }) => ({
        url: 'products',
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Service'],
    }),
    editService: builder.mutation({
      query: ({productId, token, body}) => ({
        url: `products/${productId}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ['Service'],
    }),
    getAllCarts: builder.query({
      query: () => 'carts',
    }),
    getSingleCart: builder.query({
      query: (cartId) => `carts/${cartId}`,
    }),
    getCartsByUser: builder.query({
      query: (userId) => `carts/user/${userId}`,
    }),
    // Additional endpoints for limit, sort, and date range can be added similarly
  }),  
})

// Export hooks for usage in functional components
// Make sure to rename the hook according to your API slice's name
export const { useRegisterMutation, useLoginMutation, useAccountQuery, useServicesQuery, useServiceDetailsQuery, useAddServiceMutation, useEditServiceMutation, useGetAllCartsQuery, useGetSingleCartQuery, useGetCartsByUserQuery } = apiSlice; 
