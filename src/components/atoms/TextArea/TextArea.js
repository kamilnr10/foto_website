import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextInput = styled.textarea`
  width: 100%;
  padding: 40px 0 0 0;
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

const TextArea = ({ id, label, name, value, handleChange }) => {
  console.log(value);
  return (
    <Wrapper>
      <TextInput
        id={id}
        rows="4"
        cols="50"
        maxlength="250"
        name={name}
        value={value}
        onChange={handleChange}
        required
      ></TextInput>
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default TextArea;
