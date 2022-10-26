import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootObject } from "./types";

const token = "0fc098b5db69ca94e89cb45306d20e305a68c30b";
const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";

export const fetchAddressInfo = createAsyncThunk("address/fetchAddressInfo", async (value:string,{rejectWithValue}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: "cors" as RequestMode,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + token,
        },
        body: JSON.stringify({query:value}),
        })
        .then((response) => response.json())
        .then((json) => json);
        return response
    } catch (error) {
      console.log(error)
    }
  })


        

