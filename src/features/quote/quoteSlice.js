import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import quotesApi from '../../api/quotes'

const initialState = {
    quote: '',
    author: ''
  }

export const getQuote = createAsyncThunk(
  'quote/getQuote',
  () => quotesApi.getQuote()
)

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  extraReducers:{
    [getQuote.fulfilled] : (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    }
  }
});

export default quoteSlice.reducer;
