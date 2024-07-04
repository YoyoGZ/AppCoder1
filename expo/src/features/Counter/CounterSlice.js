import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0},

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0
      // incrementByAmount.state = 0;
    },
    result: (state) => {
      state.value = 0
    }
  },
});

export const {increment, decrement, incrementByAmount, reset, result} = counterSlice.actions;
export default counterSlice.reducer;
