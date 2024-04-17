import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://661f01d716358961cd9364fc.mockapi.io/auto-sells/'
export const getCars = createAsyncThunk('allCars', async (_, thunkAPI) => {
    try {
        const response = await axios.get('cars');
        return response.data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
