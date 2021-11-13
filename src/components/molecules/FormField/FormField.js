import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({
  id,
  name,
  type,
  value,
  handleChange,
  label,
  style,
  placeholder,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        handleChange={handleChange}
        style={style}
        placeholder={placeholder}
        required
      />
    </Wrapper>
  );
};

export default FormField;
