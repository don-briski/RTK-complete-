// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
//endpoint to get all user
        getAllPost: builder.query({
            query: () => `users`
        }),

        getPostById: builder.query({
            query: (id) => `users/${id}`
        }),


        //this is another method to perform a get request using mutation with RTK Query
        getAllPosts: builder.mutation({
            query:() => ({
                url: `users`,
                method: "GET",
            })
        }),

        //this is  method to perform a Post request using mutation with RTK Query
        createPost: builder.mutation({
            query:(data) => ({
                url: `users`,
                method: "POST",
                body: data
            })
        }),

        //this is  method to perform a Put(update) request using mutation with RTK Query
        updatePost: builder.mutation({
            query:(data) => ({
                url: `users/${data.id}`,
                method: "PATCH",
                body: data
            })
        }),

           //this is  method to perform a delete request using mutation with RTK Query
           deletePost: builder.mutation({
            query:(id) => ({
                url: `users/${id}`,
                method: "DELETE",
            
            })
        }),





//endpoint to get a single user with params
        //getSinglePost: builder.query({
       //  query: (postId) => `user/${postId}`   
      //  })

    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, 
    useGetPostByIdQuery, 
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
 } = postApi

