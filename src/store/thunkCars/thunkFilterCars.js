import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://661f01d716358961cd9364fc.mockapi.io/auto-sells/';

export const getFilterCars = createAsyncThunk('filterCars', async (data, thunkAPI) => {
    try {
        const response = await axios.get('cars');
      
        const filter = response.data.filter(item => 
            item.location.toLowerCase().includes(data.location.toLowerCase()) 
            && item.form.toLowerCase().includes(data.type.toLowerCase()) &&
            data.equipment.every(equi => equi === ("automatic") ? item.transmission === equi : item.details[equi] > 0));
        return filter;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})