import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BackgroundImg.css';

import { getBackgroundImage } from '../../features/backgroundImg/backgroundImgSlice';

export function BackgroundImg() {
  const {imageUrls, currentImageUrlIndex} = useSelector((state) => state.backgroundImg);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getBackgroundImage());
  }, [dispatch]);

  return(
    <div id="background-image-container">
      <img alt="" id="background-image"
      src={imageUrls[currentImageUrlIndex]}/>
    </div>
  )
}
