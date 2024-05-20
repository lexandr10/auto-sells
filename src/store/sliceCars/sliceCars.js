import { createSlice } from '@reduxjs/toolkit';
import { getCars, getMoreCars } from 'store/thunkCars/thunkCars';
import { getFilterCars } from 'store/thunkCars/thunkFilterCars';
const carsSlice = createSlice({
    name: 'cars',
    initialState: {items: [], error: '', loading: false, },
    extraReducers: builder => {
      builder.addCase(getFilterCars.fulfilled, (state, {payload}) => {
        state.items = payload;
      })
        .addCase(getCars.fulfilled, (state, { payload }) => {
          return { ...state, items: payload};
        }).addCase(getMoreCars.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload];
        
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
            }
          )
    },
    


})
export const carsReducer = carsSlice.reducer;