import React from 'react';
import styled from 'styled-components';
import { Slider, LeftArrow, RightArrow } from './GallerySlider.styles';

const Slide = styled.div`
  opcity: 0;
  transition-duration: 1s ease;

  &.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

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
          <Slide
            className={index === currentSlide ? 'slide active' : 'slide'}
            key={index}
          >
            {index === currentSlide && (
              <img src={slide.image} alt="street foto" />
            )}
          </Slide>
        );
      })}
    </Slider>
  );
};
