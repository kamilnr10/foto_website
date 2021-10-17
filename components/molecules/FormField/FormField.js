import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ id, name, type, value, handleChange, label }) => {
  return (
    <Wrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        handleChange={handleChange}
        required
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default FormField;
