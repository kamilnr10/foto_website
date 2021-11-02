import { useState } from 'react';
import emailjs from 'emailjs-com';

export const initialFormState = {
  name: '',
  email: '',
  subject: '',
  question: '',
  message: '',
};

const { REACT_APP_EMAILJS_SERVICE_API, REACT_APP_EMAILJS_ACCOUNT_API } =
  process.env;

const regName = /^[a-zA-ZÓ-ż]+(([',. -][a-zA-Zó-ż ])?[a-zA-Zó-ż]*)*$/i;

export const validate = (form) => {
  if (!form.name) {
    return 'Username required';
  } else if (!regName.test(form.name)) {
    return 'Name is invalid';
  } else if (form.name.length > 30) {
    return 'Max char length of name is 30';
  }

  if (!form.subject) {
    return 'Subject required';
  } else if (form.subject.length > 100) {
    return 'Max char length of subject is 100';
  } else if (form.subject.length < 2) {
    return 'Min char length of subject is 2';
  }

  if (!form.email) {
    return 'Email required';
  } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
    return 'Email address is invalid';
  } else if (form.email.length > 50) {
    return 'Max char length of email address is 50';
  }

  if (!form.message) {
    return 'Message required';
  } else if (form.message.length < 4) {
    return 'Message is too short';
  } else if (form.message.length > 500) {
    return 'Max char length of message is 500';
  }

  return null;
};

const useForm = (validate) => {
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsMsg = validate(values);
    if (errorsMsg) {
      setErrors(errorsMsg);
      console.log('error');
      return;
    } else {
      console.log(values.message);
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
      setValues(initialFormState);
      setErrors(null);
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
