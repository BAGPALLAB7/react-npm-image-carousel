### Copy to install 
```sh
npm install bagpallab7_react_image_carousel
```

### import to use the package
```sh
import useCarousel from "bagpallab7_react_image_carousel";
```
### Extract the functionality 
```sh
const [imageIndex,handleLeftClick,handleRightClick,handlePositionClick ] = useCarousel("length of image array", "duration of image change");
```
### While using the image url use this
> <img src={image-array-name[`imageIndex`]} />
> 
> here imageIndex that you extracted from useCarousel.

### How to call other functionality 
```sh
onClick={handleLeftClick}
```
```sh
onClick={handleRightClick}
```


### How to call go to exact index position 
```sh
onClick={()=> handlePositionClick("pass current index of the button/position element")} 
```