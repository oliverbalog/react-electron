/* eslint-disable import/prefer-default-export */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  value: boolean;
}

const initialState: MenuState = {
  value: true,
};

const menuSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggled(state) {
      // eslint-disable-next-line no-plusplus
      state.value = !state.value;
    },
  },
});

export const { toggled } = menuSlice.actions;
export default menuSlice.reducer;
