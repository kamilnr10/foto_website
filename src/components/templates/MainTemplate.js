import React from 'react';
import styled from 'styled-components';
import photo from 'assets/photo.jpg';
import { Wrapper } from './MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${photo});
  background-size: cover;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Background>
        <Navigation />
        {children}
      </Background>
    </>
  );
};

export default MainTemplate;
