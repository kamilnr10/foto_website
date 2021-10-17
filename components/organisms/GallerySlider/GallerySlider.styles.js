import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 600px;
    border-radius: 10px;
  }
`;

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
