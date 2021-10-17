import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #444444;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #fe95d5;
    font-size: 12px;
  }
  &:invalid {
    border-color: #a7a7a7;
  }
  &:valid {
    border-color: #e4e4e4;
  }
  &:valid ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #fe95d5;
    font-size: 12px;
  }
`;

export const Input = ({ id, name, type, handleChange, value }) => {
  return (
    <InputField
      id={id}
      name={name}
      type={type}
      onChange={handleChange}
      value={value}
      required
    />
  );
};
