import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #03e9f4;
    font-size: 12px;
  }
  &:invalid {
    border-color: #a7a7a7;
  }
  &:valid ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #03e9f4;
    font-size: 12px;
  }
`;
