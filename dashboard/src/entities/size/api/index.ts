import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Size, Inputs } from "../interfaces";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSizes: build.query<Size[], void>({
      query: () => "/sizes",
      providesTags: ["Size"],
    }),
    addSize: build.mutation<Size, Inputs>({
      query: (data) => ({
        url: "/sizes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Size"],
    }),
    deleteSize: build.mutation<any, number>({
      query: (id) => ({
        url: "/sizes",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Size"],
    }),
  }),
  overrideExisting: false,
});

export const {
 useGetAllSizesQuery,
  useAddSizeMutation,
  useDeleteSizeMutation,
} = extendedApi;
