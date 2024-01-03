import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import type { EntityId, Dictionary } from "@reduxjs/toolkit";
import apiSlice from "../../apiSlice";
import Inspiration from "../../types/Inspiration";
import { RootState } from "../../store";

const inspirationsAdapter = createEntityAdapter<Inspiration>();

const initialState = inspirationsAdapter.getInitialState();

export const inspirationsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInspirations: builder.query<
      { ids: EntityId[]; entities: Dictionary<Inspiration> },
      void
    >({
      query: () => "/inspirations",
      transformResponse: (responseData: Inspiration[]) => {
        responseData.map((inspiration) => (inspiration.id = inspiration._id));
        return inspirationsAdapter.setAll(initialState, responseData);
      },
    }),
  }),
});

export const { useGetInspirationsQuery } = inspirationsSlice;

export const selectInspirationsResult =
  inspirationsSlice.endpoints.getInspirations.select();

const selectInspirationsData = createSelector(
  selectInspirationsResult,
  (inspirationsResult) => inspirationsResult.data
);

export const {
  selectAll: selectAllInspirations,
  selectById: selectInspirationById,
} = inspirationsAdapter.getSelectors<RootState>(
  (state) => selectInspirationsData(state) ?? initialState
);
