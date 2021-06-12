import React from "react";
import { useDispatch } from "react-redux";
import { prevBackgroundImg } from "../../features/backgroundImg/backgroundImgSlice";
import './Control.css';

export const LeftControl = () => {
  const dispatch = useDispatch();

  return (
    <button
      aria-label="Switch to previous wallpaper"
      onClick={() => {
        dispatch(prevBackgroundImg());
      }}
    >
      {"<"}
    </button>
  );
};
