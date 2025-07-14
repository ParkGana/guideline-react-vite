import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    minusNumber: (state, action) => {
      state.count = state.count - action.payload;
    },
    plusNumber: (state, action) => {
      state.count = state.count + action.payload;
    }
  }
});

export default counterSlice.reducer;

export const { minusNumber, plusNumber } = counterSlice.actions;
