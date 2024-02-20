import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getProducts : builder.query({
            query: () => ({
                url : PRODUCTS_URL,
            }),
            keepUnusedDataFor:5 , //used fo testing purposes to see how long data is kept in cache after it's no longer used
        }),
       
    }),
});

//there is a special convention for exporting data like we use "use " at start and since its a query so query at last

export const {useGetProductsQuery} = productsApiSlice;
