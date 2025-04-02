import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
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



count counterSLice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },

    reducers:{
        increase:(state, action)=>{
            state.count = state.count+1
        }
        decrease:(state, action)=>{
            state.count = state.count-1
            
        }
    }
})



const {reducer, action} = counterSlice

export const {}


export default reducer

