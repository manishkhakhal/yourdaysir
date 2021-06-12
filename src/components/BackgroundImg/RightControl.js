import React from "react";
import { useDispatch } from "react-redux";
import { nextBackgroundImg } from "../../features/backgroundImg/backgroundImgSlice";
import './Control.css';

export const RightControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Switch to next wallpaper"
      onClick={() => {
        dispatch(nextBackgroundImg());
      }}
    >
      {">"}
    </button>
  );
};
