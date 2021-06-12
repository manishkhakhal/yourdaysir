import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import unsplashApi from '../../api/unsplash';

const initialState = {
    imageUrls: [],
    currentImageUrlIndex: 0
  }

  export const getBackgroundImage = createAsyncThunk(
    "backgroundImg/getImage",
    unsplashApi.getImage
  );

const backgroundImgSlice = createSlice({
  name: "backgroundImg",
  initialState: initialState,
  reducers: {
    nextBackgroundImg: (state) => {
      state.currentImageUrlIndex =
        (state.currentImageUrlIndex + 1) % state.imageUrls.length;
    },
    prevBackgroundImg: (state) => {
      let newIndex = state.currentImageUrlIndex - 1;
      if (newIndex < 0) {
        newIndex = state.imageUrls.length - 1;
      }

      state.currentImageUrlIndex = newIndex;
    }
  },
  extraReducers: {
    [getBackgroundImage.fulfilled]: (state, action) => {
      state.imageUrls = action.payload;
      state.currentImageUrlIndex = 0;
    }
  }
});

export const { nextBackgroundImg, prevBackgroundImg } = backgroundImgSlice.actions;

export default backgroundImgSlice.reducer;
