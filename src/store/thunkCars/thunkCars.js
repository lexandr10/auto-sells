import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://661f01d716358961cd9364fc.mockapi.io/auto-sells/'
export const getCars = createAsyncThunk('allCars', async (_, thunkAPI) => {
    try {
        const response = await axios.get('cars');
        const firstFourElements = response.data.slice(0, 4 );
        return firstFourElements; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const getMoreCars = createAsyncThunk('MoreCars', async (limit, thunkAPI) => {
    const fromLimit = limit - 4;
    try {
        const response = await axios.get('cars');
        const firstFourElements = response.data.slice(fromLimit, limit);
        console.log(limit)
        return firstFourElements; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
export const getDetailtCar = createAsyncThunk("detailsCar", async (id, thunkAPI) => {
    try {
        const response = await axios.get(`cars/${id}`)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})
