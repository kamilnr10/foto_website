import React, { useState, useEffect, useRef } from 'react';
import { GallerySlider } from 'components/organisms/GallerySlider/GallerySlider';

const delay = 3500;

const Gallery = ({ slides, autoPlay }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const autoPlayRef = useRef();

  const nextSlide = () => {
    // console.log(`current: ${current}`);
    // console.log(`length: ${length}`);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const resetTimeout = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    autoPlayRef.current = setTimeout(
      () =>
        setCurrent((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <GallerySlider
      slides={slides}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      currentSlide={current}
      autoPlay={2}
    />
  );
};

GallerySlider.defaultProps = {
  slides: [],
  autoPlay: null,
};

export default Gallery;
