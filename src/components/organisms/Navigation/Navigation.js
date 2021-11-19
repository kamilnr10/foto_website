import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.png';

const Wrapper = styled.nav`
  /* width: 800px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  img {
    width: 100px;
  }
`;

const NavigationWrapper = styled.nav`
  width: 60%;
  height: 100vh;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  z-index: 100;

  ul {
    height: 100%;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      margin: 20px 0;
    }
  }
`;

const MenuToggleButton = styled.button`
  width: 40px;
  height: 40px;
  z-index: 998;
  position: fixed;
  top: 20px;
  right: 20px;
  overflow-x: hidden;
  background-color: white;
  border: 2px solid black;

  span:first-child {
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(
      ${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)}
    );
    transition: transform ease-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 18px;
      height: 3px;
      background-color: black;
      left: 50%;
    }

    &::before {
      top: 12px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      bottom: 10px;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  span:last-child {
    background-color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(
      ${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)}
    );
    transition: transform ease-out 0.3s;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 30px;
      height: 3px;
      background-color: black;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

const activeClassName = 'active-link';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  width: 100px;
  text-decoration: none;
  padding: 15px 0 15px 0;
  font-size: 12px;
  text-align: center;
  letter-spacing: 2px;
  transition: 0.3s;
  &:hover {
    color: #fe95d5;
  }
  &.active-link {
    color: #fe95d5;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span />
        <span />
      </MenuToggleButton>

      <NavigationWrapper isOpen={isOpen}>
        <ul>
          <li>
            <StyledLink onClick={() => setIsOpen(!isOpen)} to="/portfolio">
              PORTFOLIO
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => setIsOpen(!isOpen)} exact to="/">
              ABOUT ME
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => setIsOpen(!isOpen)} to="/contact">
              CONTACT
            </StyledLink>
          </li>
          <li>
            <StyledLink onClick={() => setIsOpen(!isOpen)} to="/blog">
              BLOG
            </StyledLink>
          </li>
        </ul>
      </NavigationWrapper>
    </>
  );
};

export default Navigation;
