import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BrandsApi from '../../api/Brands';

const brandsApi = new BrandsApi();

export const getBrands = createAsyncThunk(
  'getBrands',
  async (undefined, { rejectWithValue }) => {
    try {
      const brands = await brandsApi.getBrands();
      return brands;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      const { message } = error.response.data;
      return rejectWithValue(message);
    }
  }
)

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    inProgress: false,
    error: '',
  },
  reducers: {

  },
  extraReducers: {
    [getBrands.pending as any]: (state, action) => {
      state.inProgress = true;
    },
    [getBrands.fulfilled as any]: (state, action) => {
      state.brands = action.payload;
      state.inProgress = false;
    },
    [getBrands.fulfilled as any]: (state, action) => {
      state.error = action.payload;
      state.inProgress = false;
    }
  }
});

export default brandsSlice.reducer;