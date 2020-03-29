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

type initialState = {
  cities: City[],
  inProgress: boolean,
}

const initialState: initialState = {
  cities: [],
  inProgress: false,
}

const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getCities.pending as any]: (state) => {
      state.inProgress = true;
    },
    [getCities.fulfilled as any]: (state, action) => {
      state.cities = action.payload;
      state.inProgress = false;
    },
    [getCities.rejected as any]: (state) => {
      state.inProgress = false;
    },
  }
});

export default cities.reducer;
