import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
];

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  fill: #fe95d5;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  fill: #fe95d5;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;

const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${({ direction }) => (direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;

const SliderContent = styled.div`
  transform: translateX(${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100px;
  width: 100px;
  width: ${(props) => props.width}px;
  display: flex;
`;

const Slide = styled.div`
  height: 1000px;
  width: 1000px;
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Slider = (props) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition } = state;
  console.log(props.slides);
  return (
    <SliderWrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      />
      {props.slides.map((slide, i) => (
        <Slide key={slide + i} content={slide} />
      ))}
    </SliderWrapper>
  );
};

export default Slider;
