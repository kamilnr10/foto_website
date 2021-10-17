import React, { useState } from 'react';
import { GallerySlider } from 'components/organisms/GallerySlider/GallerySlider';

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    console.log(`current: ${current}`);
    console.log(`length: ${length}`);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      <GallerySlider
        slides={slides}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        currentSlide={current}
      />
    </div>
  );
};

export default Gallery;
