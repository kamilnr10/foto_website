import React from 'react';
import styled from 'styled-components';
import { Slider, LeftArrow, RightArrow } from './GallerySlider.styles';

const Slide = styled.div`
  display: flex;
  opacity: 0;
  transition-duration: 4s ease;
  border-radius: 50%;
  box-shadow: 0px 0px 9px 0px rgba(66, 68, 90, 1);

  &.active {
    opacity: 1;
    transition-duration: 3s;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;

export const GallerySlider = ({
  slides,
  prevSlide,
  nextSlide,
  currentSlide,
}) => {
  return (
    <>
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
    </>
  );
};
