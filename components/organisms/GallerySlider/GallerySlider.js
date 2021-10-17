import React from 'react';
import { Slider, LeftArrow, RightArrow } from './GallerySlider.styles';

export const GallerySlider = ({
  slides,
  prevSlide,
  nextSlide,
  currentSlide,
}) => {
  return (
    <Slider>
      <LeftArrow onClick={prevSlide} />
      <RightArrow onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide.image} alt="street foto" />
            )}
          </div>
        );
      })}
    </Slider>
  );
};
