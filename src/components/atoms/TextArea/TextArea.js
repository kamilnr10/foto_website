import styled from 'styled-components';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextInput = styled.textarea`
  width: 100%;
  padding: 10px 0 0 10px;
  font-size: 16px;
  color: black;
  border: 1px solid #6c95bb;
  border-radius: 8px;
  outline: none;
  background: transparent;
  box-shadow: inset 0px 1px 8px rgba(166, 191, 212, 0.8);

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

  &:focus {
    border-color: #4598e1;
    box-shadow: inset 0px 1px 8px rgba(69, 152, 225, 0.8);
  }

  &:valid {
    border-color: #6eba6c;
    box-shadow: inset 0px 1px 8px rgba(130, 196, 128, 0.8);
  }

  &:hover {
    box-shadow: inset 1px 2px 8px rgba(0, 0, 0, 0.02);
  }
`;

const TextArea = ({
  id,
  label,
  name,
  value,
  handleChange,
  style,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        id={id}
        rows="4"
        cols="50"
        maxlength="250"
        name={name}
        value={value}
        onChange={handleChange}
        style={style}
        placeholder={placeholder}
        required
      ></TextInput>
    </Wrapper>
  );
};

export default TextArea;
