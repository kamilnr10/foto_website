import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default FormField;
