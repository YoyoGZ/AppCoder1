import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../dataBase/realTimeDB";



export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getMarcas: builder.query({
            query: () => 'marcas.json',
        }),
        getVehicByMarca: builder.query({
            query: (marcas) => `vehiculos.json?orderBy="marcas"&equalTo="${marcas}" `,
            transformResponse: (resp) => {
                const transfResp = Object.values(resp)
                return transfResp;
            },
        }),
        getVehicById: builder.query({
            query: (vehId) => ` vehiculos.json?orderBy="id"&equalTo=${vehId} `,
            transformResponse: (resp) => {
                const transfResp = Object.values(resp)
                if (transfResp.length) return transfResp[0]
            },
        }),
    }),
});

export const {useGetMarcasQuery, useGetVehicByMarcaQuery, useGetVehicByIdQuery} = shopApi;