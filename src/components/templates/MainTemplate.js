import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
// import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 150px 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navigation />
        {children}
      </Wrapper>
    </>
  );
};

export default MainTemplate;
