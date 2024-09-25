import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../";

interface Item {
  id: string
  name: string
}

interface Items {
  items: Item[];
}

const initialState: Items = {
  items: [],
};

export const fetchAsyncGetDataItems = createAsyncThunk(
  'test',
  async () => {
    const {data} = await axios.get<Item[]>(
      `/test.json`
    )
    return data
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetDataItems.fulfilled, (state, action) => {
      return {
        ...state,
        items: action.payload
      }
    })

    builder.addCase(fetchAsyncGetDataItems.rejected, (state, action) => {
      return {
        ...state,
        items: initialState.items
      }
    })
  }
})
export const selectItems = (state: RootState) => state.data.items;

export default dataSlice.reducer;
