import {createSlice}  from "@reduxjs/toolkit";
import { getDetailtCar } from "store/thunkCars/thunkCars";

const sliceDetailsCar = createSlice({
    name: 'detailsCar',
    initialState: {item: null, error: '', loading: false},
    extraReducers: builder => {
        builder.addCase(getDetailtCar.fulfilled, (state, {payload}) => {
            state.item = payload;
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
    }
})
export const DetailsCarReducer = sliceDetailsCar.reducer;
