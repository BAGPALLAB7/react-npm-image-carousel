import { useEffect, useRef, useState } from "react";

const useCarousel = (indexCount, duration) => {
    console.log("indexCount",indexCount);
    console.log("duration", duration);
  const [imageIndex, setImageIndex] = useState(0);
  let timmer = useRef(null);
  const checkTimer = () => {
    if (timmer) {
      clearTimeout(timmer);
    }
  };
  const handleLeftClick = () => {
    console.log("handleLeftClick function tigger");
    checkTimer();
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    } else {
      setImageIndex(indexCount - 1);
    }
  };
  const handleRightClick = () => {
    console.log("handletRightClick function tigger");

    checkTimer();
    if (imageIndex < indexCount - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handlePositionClick = (i) => {
    console.log("handlePositionClick function tigger");

    checkTimer();
    setImageIndex(i);
  };

  const startTimmer = () => {
    timmer = setTimeout(() => {
      if (imageIndex < indexCount - 1) {
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

  return [imageIndex,handleLeftClick,handleRightClick,handlePositionClick];
};

export default useCarousel;
