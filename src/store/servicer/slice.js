import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  servicerList: null,
  oneServicer: null,
};

export const servicerSlice = createSlice({
  name: "servicer",
  initialState,
  reducers: {
    loadList: (state, action) => {
      state.servicerList = action.payload;
    },
    loadServicer: (state, action) => {
      state.oneServicer = action.payload;
    },
  },
});

export const { loadList, loadServicer } = servicerSlice.actions;

export default servicerSlice.reducer;
