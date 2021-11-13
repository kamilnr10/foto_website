import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #444444;
  padding: 10px;
  border: 1px solid #6c95bb;
  border-radius: 8px;
  outline: none;
  background: transparent;
  /* box-shadow: inset 0px 1px 8px rgba(166, 191, 212, 0.5); */
  box-shadow: inset 0px 15px 15px -9px rgba(166, 191, 212, 0.5);
  transition-duration: 1s ease-out;

  &:focus ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #fe95d5;
    font-size: 12px;
  }

  &:focus {
    border-color: #4598e1;
    box-shadow: inset 15px 15px -9px rgba(69, 152, 225, 0.5);
  }

  &:valid {
    border-color: #6eba6c;
    box-shadow: inset 15px 15px -9px rgba(130, 196, 128, 0.5);
  }

  &:valid ~ ${Label} {
    top: -20px;
    left: -10px;
    color: #fe95d5;
    font-size: 12px;
  }

  &:hover {
    box-shadow: inset 15px 15px -9px rgba(69, 152, 225, 0.1);
  }

  /* &:invalid {
    border-color: #c76d78;
    box-shadow: inset 0px 1px 8px rgba(219, 162, 169, 0.6);
  } */
`;

export const Input = ({
  id,
  name,
  type,
  handleChange,
  value,
  style,
  placeholder,
}) => {
  return (
    <InputField
      id={id}
      name={name}
      type={type}
      onChange={handleChange}
      value={value}
      style={style}
      placeholder={placeholder}
      required
    />
  );
};
