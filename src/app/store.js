import { configureStore } from '@reduxjs/toolkit';
import { default as backgroundImgSliceReducer } from '../features/backgroundImg/backgroundImgSlice';
import { default as quoteSliceReducer } from '../features/quote/quoteSlice';
import { default as weatherSliceReducer } from '../features/weather/weatherSlice';
import { default as journalSliceReducer } from '../features/journal/journalSlice';

export const store = configureStore({
  reducer: {
    backgroundImg: backgroundImgSliceReducer,
    quote: quoteSliceReducer,
    weather: weatherSliceReducer,
    journal: journalSliceReducer
  },
});
