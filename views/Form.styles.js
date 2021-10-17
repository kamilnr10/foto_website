import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 400px;
  padding: 40px;
  /* background: rgba(0, 0, 0, 0.5); */
  background-color: #fff5f8;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const LoginBox = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  color: #444444;
  text-align: center;
`;

export const UserBox = styled.div`
  position: relative;
`;

export const ErrorMsg = styled.p`
  font-size: 8px;
  color: red;
`;
