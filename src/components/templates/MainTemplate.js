import React from 'react';
import styled from 'styled-components';
import photo from 'assets/photo.jpg';
import Navigation from 'components/organisms/Navigation/Navigation';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${photo});
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 150px 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Background>
        <Wrapper>
          <Navigation />
          {children}
        </Wrapper>
      </Background>
    </>
  );
};

export default MainTemplate;
