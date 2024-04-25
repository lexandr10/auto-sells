import { createSlice } from "@reduxjs/toolkit";

const sliceFavorites = createSlice({
  name: 'favorites',
  initialState: { items: [] },
  reducers: {
    addFavorites: (state, { payload }) => {
  state.items.push(payload)
    },
    deleteFavorites: (state, {payload}) => {
      state.items = state.items.filter(item => item._id !== payload);
    }
  }
});

export const FavoritesReducer = sliceFavorites.reducer;
export const { addFavorites, deleteFavorites } = sliceFavorites.actions;

