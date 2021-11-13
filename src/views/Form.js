import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import TextArea from 'components/atoms/TextArea/TextArea';
import useForm from './useForm';
import { validate } from './useForm';
import { ViewWrapper, LoginBox, UserBox, ErrorMsg } from './Form.styles';

require('dotenv').config();

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const errorColor = {
  borderColor: '#ED4040',
  boxShadow: 'inset 15px 15px -9px rgba(237, 66, 66, 0.5)',
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Form = () => {
  const { handleChange, values, handleSubmit, errors, sendMessage } =
    useForm(validate);

  return (
    <Wrapper>
      <ViewWrapper as="form" onSubmit={handleSubmit} noValidate>
        <LoginBox>Contact me </LoginBox>
        <UserBox>
          <FormField
            label="Name"
            name="name"
            id="name"
            type="text"
            value={values.name}
            handleChange={handleChange}
            placeholder="Enter name here"
            style={errors.name ? errorColor : null}
          />
          {errors.name && <p>{errors.name}</p>}
        </UserBox>
        <UserBox>
          <FormField
            label="Subject"
            id="subject"
            type="text"
            name="subject"
            value={values.subject}
            handleChange={handleChange}
            placeholder="Enter subject here"
            style={errors.subject ? errorColor : null}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </UserBox>
        <UserBox>
          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={values.email}
            handleChange={handleChange}
            placeholder="Enter email here"
            style={errors.email ? errorColor : null}
          />
          {errors.email && <p>{errors.email}</p>}
        </UserBox>
        <UserBox>
          <FormField
            label="How did You hear about me?"
            id="question"
            name="question"
            type="text"
            value={values.question}
            placeholder="Social media, website or ..."
            handleChange={handleChange}
          />
        </UserBox>
        <UserBox>
          <TextArea
            label="Message"
            id="message"
            name="message"
            value={values.message}
            handleChange={handleChange}
            placeholder="Enter message here"
            style={errors.message ? errorColor : null}
          />
          {errors.message && <p>{errors.message}</p>}
        </UserBox>
        <ButtonWrapper>
          <Button type="submit">{sendMessage ? sendMessage : 'Wyślij'}</Button>
        </ButtonWrapper>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Form;
