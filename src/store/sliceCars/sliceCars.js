import { createSlice } from '@reduxjs/toolkit';
import { getCars, getMoreCars } from 'store/thunkCars/thunkCars';
const carsSlice = createSlice({
    name: 'cars',
    initialState: {items: [], error: '', loading: false, limit: 8},
    extraReducers: builder => {
      builder
        .addCase(getCars.fulfilled, (state, { payload }) => {
          return { ...state, items: payload};
        }).addCase(getMoreCars.fulfilled, (state, { payload }) => {
          return { ...state, items: [...state.items, ...payload], limit: state.limit + 4};
        }).addMatcher(
            action => action.type.endsWith('pending'),
            state => {
              state.loading = true;
              state.error = '';
            }
          )
          .addMatcher(
            action => action.type.endsWith('rejected'),
            (state, action) => {
              state.loading = false;
              state.error = action.payload;
            }
          )
          .addMatcher(
            action => action.type.endsWith('fulfilled'),
            state => {
              state.error = '';
              state.loading = false;
              state.limit = 8
            }
          )
    },


})
export const carsReducer = carsSlice.reducer;