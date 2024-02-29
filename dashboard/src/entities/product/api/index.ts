import { emptySplitApi } from "../../../shared/configs/rtk_base";


interface Product {
    id: number
    name: string
    price: number
    createdAt: string
    updatedAt: string

}


interface Inputs {
    name: string
    price: number
}

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints:(build)=>({
        getAllProducts:build.query<Product[], void>({
            query:()=>'/products',
            providesTags: ['Product']
        },
        ),
        addProduct:build.mutation<Product, Inputs>({
            query: (data)=> ({
                url: '/products',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: build.mutation<any, number>({
            query: (id)=>( {
                url: '/products',
                method: "DELETE",
                body: {
                    id
                }
            }),
            invalidatesTags: ['Product']
        })
    }),
    overrideExisting: false
})


export const {useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation} = extendedApi