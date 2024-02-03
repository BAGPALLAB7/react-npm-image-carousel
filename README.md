Copy to install 
-- npm install bagpallab7-react-image-carousel

import to use the package

-- import useCarousel from "bagpallab7-react-image-carousel";

Extract the functionality 

-- const [imageIndex,handleLeftClick,handleRightClick,handlePositionClick ] = useCarousel("length of image array", "duration of image change");

While using the image url use this
-- img-url: image-array-name[imageIndex] // here image index that you extracted from useCarousel.


How to call other functionality 
-- onClick={handleLeftClick}
-- onClick={handleRightClick}


How to call go to exact index position 
-- onClick={()=> handlePositionClick("pass current index of the button/position element")} 

