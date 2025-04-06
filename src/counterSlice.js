import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increase: (state, action) => {
      state.count = state.count + 1;
    },
    decrease: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

const { reducer, actions } = counterSlice;

export const { increase, decrease } = actions;

export default reducer;
