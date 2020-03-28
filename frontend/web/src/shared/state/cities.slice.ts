import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CitiesApi from '../../api/Cities';
import { City } from '../../helpers/types';

const citiesApi = new CitiesApi();


export const getCities = createAsyncThunk(
  'city',
  async (undefined, { rejectWithValue }) => {
    try {
      const cities = await citiesApi.getCities();
      return cities;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      const { message } = error.response.data;
      return rejectWithValue(message);
    }
  }
);


const initialState: City[] = [];

const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getCities.pending as any]: (state, action) => {
      
    },
    [getCities.fulfilled as any]: (state, action) => {
      state = action.payload;
    },
    [getCities.rejected as any]: (state, action) => {
      
    },
  }
});

export default cities.reducer;
