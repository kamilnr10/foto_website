import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.png';

const Wrapper = styled.nav`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100px;
  }
`;

const NavigationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const activeClassName = 'active-link';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  /* font-weight: bold; */
  width: 100px;
  text-decoration: none;
  padding: 15px 0 15px 0;
  text-align: center;
  transition: 0.3s;

  &:hover {
    color: #fe95d5;
  }

  &.active-link {
    color: #fe95d5;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;

  i {
    color: #444444;
    padding: 5px;
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavigationWrapper>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/weddings">Weddings</StyledLink>
        <StyledLink to="/lifestyle">Lifestyle</StyledLink>
        <img src={logo} alt="logo" />
        <StyledLink exact to="/">
          O mnie
        </StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </NavigationWrapper>
      {/* <FooterWrapper>
        Copyrights@
        <br />
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram-square"></i>
      </FooterWrapper> */}
    </Wrapper>
  );
};

export default Navigation;
