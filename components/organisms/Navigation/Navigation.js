import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.png';

const Wrapper = styled.nav`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
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
      <div>
        <img src={logo} alt="logo" />
      </div>
      <NavigationWrapper>
        <StyledLink to="/slider">SLIDER</StyledLink>
        <StyledLink to="/gallery">GALLERY</StyledLink>
        <StyledLink to="/weddings">WEDDINGS</StyledLink>
        <StyledLink to="/lifestyle">LIFESTYLE</StyledLink>
        <StyledLink exact to="/">
          ABOUT ME
        </StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink>
        <StyledLink to="/blog">BLOG</StyledLink>
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
