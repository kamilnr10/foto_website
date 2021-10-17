import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carouse = styled(Carousel)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .carousel .slide {
    height: 80vh;
  }

  .carousel .slide img {
    max-width: 100%;
    height: auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  img {
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

const WeddingsSlider = ({ slides }) => {
  console.log(slides);
  return (
    <div>
      <Carouse infiniteLoop autoPlay>
        {slides.map((slide) => (
          <ImageWrapper key={slide.url}>
            <img src={slide.url} alt="" />
          </ImageWrapper>
        ))}
      </Carouse>
    </div>
  );
};

export default WeddingsSlider;
