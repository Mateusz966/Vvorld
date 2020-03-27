import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from '../../api/Auth';
import { LoginUserData } from '../../helpers/types';

const authApi = new AuthApi();


export const loginUser = createAsyncThunk(
  'userData',
  async (data: LoginUserData, { rejectWithValue }) => {
    try {
      console.log('a');
      const user = await authApi.signIn(data);
      return user;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      const { message } = error.response.data;
      return rejectWithValue(message);
    }
  }
);



const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    error: '',
  },
  reducers: {

  },
  extraReducers: {
    [loginUser.pending as any]: (state, action) => {
      state.token = action.payload;
    },
    [loginUser.fulfilled as any]: (state, action) => {
      state.token = action.payload;
    },
    [loginUser.rejected as any]: (state, action) => {
      state.error = action.payload;
    },
  }
});

export default loginSlice.reducer;
