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

const TextWrapper = styled.div`
  width: 400px;
`;

const Form = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

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
          />
        </UserBox>
        <UserBox>{errors && <p>{errors}</p>}</UserBox>
        <UserBox>
          <FormField
            label="Subject"
            id="subject"
            type="text"
            name="subject"
            value={values.subject}
            handleChange={handleChange}
          />
        </UserBox>
        <UserBox>
          <FormField
            label="Email"
            id="email"
            name="email"
            type="email"
            value={values.email}
            handleChange={handleChange}
          />
        </UserBox>
        <UserBox>
          <FormField
            label="How did You hear about me?"
            id="question"
            name="question"
            type="text"
            value={values.question}
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
          />
        </UserBox>
        <UserBox>
          <Button type="submit">Send</Button>
        </UserBox>
        <UserBox>{errors && <p>{errors}</p>}</UserBox>
      </ViewWrapper>
      <TextWrapper>
        <img src="" alt="" />
        <div>
          <p></p>
        </div>
      </TextWrapper>
    </Wrapper>
  );
};

export default Form;
