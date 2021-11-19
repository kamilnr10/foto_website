import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Gallery = styled.div`
  --webkit-column-count: 3;
  --moz-column-count: 3;
  column-count: 3;
  --webkit-column-width: 33%;
  --moz-column-width: 33%;
  column-width: 33%;
  padding: 0 10px;
  margin: 10px 0;

  @media (max-width: 991px) {
    --webkit-column-count: 2;
    --moz-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 480px) {
    --webkit-column-count: 1;
    --moz-column-count: 1;
    column-count: 1;
    --webkit-column-width: 100%;
    --moz-column-width: 100%;
    column-width: 100%;
  }
`;

const Pics = styled.div`
  --webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    filter: opacity(0.8);
  }

  img {
    width: 100%;

    @media (max-width: 480px) {
      width: 300px;
    }
  }

  @media (min-width: 991px) {
    width: 350px;
  }
`;

const ModalNormal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131313;
  transition: opacity 0.4s ease, visibility 0.4s ease,
    transform 0.5s ease-in-out;
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
  overflow: hidden;
  z-index: 999;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100vh;
    display: block;
    line-height: 0;
    box-sizing: border-box;
    padding: 20px 0;
    margin: 0 auto;
  }

  &.open {
    visibility: visible;
    opacity: 1;
    transform: scale(1);

    svg {
      position: fixed;
      top: 10px;
      left: 10px;
      width: 2rem;
      height: 2rem;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const Portfolio = ({ slides }) => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (url) => {
    setTempImgSrc(url);
    setModal(true);
  };

  return (
    <>
      <ModalNormal className={modal ? 'open' : ''}>
        <img src={tempImgSrc} alt="foto" />
        <CloseIcon onClick={() => setModal(false)} />
      </ModalNormal>
      <Gallery>
        {slides.map(({ id, url }) => (
          <Pics key={id} onClick={() => getImg(url)}>
            <img src={url} alt="" />
          </Pics>
        ))}
      </Gallery>
    </>
  );
};

export default Portfolio;
