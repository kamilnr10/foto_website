import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import TextArea from 'components/atoms/TextArea/TextArea';

require('dotenv').config();

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const ViewWrapper = styled.div`
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const LoginBox = styled.h1`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;

export const UserBox = styled.div`
  position: relative;
`;

const { REACT_APP_EMAILJS_SERVICE_API, REACT_APP_EMAILJS_ACCOUNT_API } =
  process.env;

const Form = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAILJS_SERVICE_API,
        'template_wr2n5cr',
        e.target,
        REACT_APP_EMAILJS_ACCOUNT_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ViewWrapper as="form" onSubmit={sendEmail}>
      <LoginBox>Contact me </LoginBox>
      <UserBox>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </UserBox>
      <UserBox>
        <FormField
          label="Subject"
          id="subject"
          name="subject"
          value={formValues.subject}
          onChange={handleInputChange}
        />
      </UserBox>
      <UserBox>
        <FormField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </UserBox>
      <UserBox>
        <TextArea
          label="Message"
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        />
      </UserBox>
      <UserBox>
        <Button type="submit">Send</Button>
      </UserBox>
    </ViewWrapper>
  );
};

export default Form;
