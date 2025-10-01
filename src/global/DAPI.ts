import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProd, IStore } from "../models/Interfaces";
const URL = "https://dummyjson.com/products";

export const DAPI = createApi({
    reducerPath: "DAPI",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        pro: builder.query<IStore, void>({
            query: () => "/",
            providesTags: ["Products"]
        }),
        detail: builder.query({
            query: () => "/",
            providesTags: ["Products"]
        })
    })
});





