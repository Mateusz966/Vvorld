import { createSlice } from '@reduxjs/toolkit'


const loginSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    error: '',
  },
  reducers: {
    loginRequest(state) {
      return state;
    },
    loginSuccess(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
    loginError(state, action) {
      const { message } = action.payload;
      state.error = message;
    },
  }
})

export const { loginRequest, loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
