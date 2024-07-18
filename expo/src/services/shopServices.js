import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../dataBase/realTimeDB";


export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    tagTypes: ['profileImageGet'],
    endpoints: (builder) => ({
        getMarcas: builder.query({
            query: () => 'Marcas.json',
        }),
        getVehicsByMarca: builder.query({
            query: (marca) =>
              `vehiculos.json?orderBy="marca"&equalTo="${marca}"`,
            transformResponse: (resp) => {
              const transfResp = Object.values(resp);
              return transfResp;
            },
        }),
        getVehicById: builder.query({
            query: (vehId) => 
                `vehiculos.json?orderBy="id"&equalTo=${vehId}`,
            transformResponse: (resp) => {
                const transfResp = Object.values(resp)
                if (transfResp.length) return transfResp[0];
            },
        }),
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
              url: "order.json",
              method: "POST",
              body: order,
            }),
        }),
        getProfileimage: builder.query({
            query: ( localId )=> `profileImages/${localId}.json`, 
            providesTags: ["profileImageGet"]
          }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
              url: `profileImages/${localId}.json`,
              method: "PUT",
              body: {
                image: image
              },
            }),
            invalidatesTags: ['profileImageGet'],
          })
    }),
});

export const {useGetMarcasQuery,
    useGetVehicsByMarcaQuery, 
    useGetVehicByIdQuery,
    usePostOrderMutation,
    useGetProfileimageQuery,
    usePostProfileImageMutation,
} = shopApi;