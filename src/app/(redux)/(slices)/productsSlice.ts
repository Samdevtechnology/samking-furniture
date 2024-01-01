import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { EntityId, Dictionary } from "@reduxjs/toolkit";
import apiSlice from "../apiSlice";
import Product from "../types/Product";
import { RootState } from "../store";

const productsAdapter = createEntityAdapter<Product>();

const initialState = productsAdapter.getInitialState();

export const productsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      { ids: EntityId[]; entities: Dictionary<Product> },
      void
    >({
      query: () => "/products",
      transformResponse: (responseData: Product[]) => {
        responseData.map((product) => (product.id = product._id));
        return productsAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsSlice;

export const selectProductsResult =
  productsSlice.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data
);

const selectProductsByTag = (tagName: string) =>
  createSelector(selectProductsData, (products) => {
    if (!products) {
      return undefined;
    }
    return products.entities.product?.tag.includes(tagName);
  });

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  productsAdapter.getSelectors<RootState>(
    (state) => selectProductsData(state) ?? initialState
  );
