import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavLink exact to="/">
        O mnie
      </NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <h1>
        Klaudia
        <br />
        Rowicka
      </h1>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/calendar">Kalendarz</NavLink>
    </Wrapper>
  );
};

export default Navigation;
