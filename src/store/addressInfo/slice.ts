import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchAddressInfo } from "./asyncActions";
import { RootObject } from "./types";

const initialState: RootObject = {
  suggestions: [],
};

const addressSlice = createSlice({
  name: "fetchAddress",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddressInfo.pending, (state) => {
        // state.loading = 'pending';
      })
      .addCase(fetchAddressInfo.fulfilled, (state, action:PayloadAction<RootObject>) => {
        // state.loading = 'idle';
        state.suggestions = [...action.payload.suggestions];
        console.log(action)
      })
      .addCase(fetchAddressInfo.rejected, (state) => {
        // state.loading = 'faild';
      })
    }
});

export const selectAddresSlice = (state:RootState):any => state.fetchAddress 

export default addressSlice.reducer;