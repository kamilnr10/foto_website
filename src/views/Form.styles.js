import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 400px;
  margin: 10px;
  padding: 40px;
  /* background: rgba(0, 0, 0, 0.5); */
  /* background-color: #f5f5f5; */
  box-sizing: border-box;
  box-shadow: 0px 10px 42px 0px rgba(226, 222, 243, 0.75);
  border-radius: 15px;
`;

export const LoginBox = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  color: #444444;
  text-align: center;
`;

export const UserBox = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin: 0 auto 20px 0;

  p {
    font-size: 12px;
    color: #ea494c;
  }

  button {
    display: inline-block;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 8px;
  color: red;
`;
