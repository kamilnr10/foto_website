import styled from 'styled-components';

export const Button = styled.button`
  margin: 40px 0 0 0;
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-image: linear-gradient(to right, #716cf4 0%, #c086f9 100%);
  border-radius: 10px;
  border: none;
  box-shadow: 0px 14px 17px 0px rgba(192, 134, 249, 0.5);
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0.8px;
  cursor: pointer;
  color: #ffffff;
  text-shadow: #fff 0px 0px 5px;
  transition: 0.4s;
  background-size: 200% auto;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    /* background-color: red; */
    /* color: red; */
    text-decoration: none;
  }
`;
