import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      if (action.payload > 0) {
        state.value += action.payload;
      }
      return;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) {
        state.value += action.payload;
      }
      return;
    },
  },
});

export const { increase, increaseAmount, decrease, decreaseAmount } =
  counterSlice.actions;

export const counterReducer = counterSlice.reducer;
