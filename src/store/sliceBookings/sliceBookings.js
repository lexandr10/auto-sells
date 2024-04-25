import { createSlice } from "@reduxjs/toolkit";

const sliceBookings = createSlice({
    name: 'bookings',
    initialState: {books: []},
    reducers: {
        addBooks: (state, {payload}) => {
state.books.push(payload)
        }
    }
})
export const bookingsReducer = sliceBookings.reducer;
export const {addBooks} = sliceBookings.actions;