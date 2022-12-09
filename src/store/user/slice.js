import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  error: null,
  service: null,
  favorite: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.error = null;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.error = null;
      state.service = null;
      state.favorite = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    getSer: (state, action) => {
      state.service = action.payload;
    },
    getFav: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logOut,
  setError,
  tokenStillValid,
  getSer,
  getFav,
} = userSlice.actions;

export default userSlice.reducer;
