import { useEffect, useRef, useState } from "react";

const useCarousel = (indexCount, duration) => {
  const [imageIndex, setImageIndex] = useState(0);
  let timmer = useRef(null);
  const checkTimer = () => {
    if (timmer) {
      clearTimeout(timmer);
    }
  };
  const handleLeftClick = () => {
    checkTimer();
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    } else {
      setImageIndex(indexCount - 1);
    }
  };
  const handleRightClick = () => {
    checkTimer();
    if (imageIndex < indexCount - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handlePositionClick = (i) => {
    checkTimer();
    setImageIndex(i);
  };

  const startTimmer = () => {
    timmer = setTimeout(() => {
      if (imageIndex < indexCount - 1 || indexCount==0) {
        setImageIndex((prev) => prev + 1);
      } else {
        setImageIndex(0);
      }
    }, duration);

    return () => clearTimeout(timmer);
  };

  useEffect(() => {
    startTimmer();
  }, [imageIndex]);

  return [imageIndex, handleLeftClick, handleRightClick, handlePositionClick];
};

export default useCarousel;
