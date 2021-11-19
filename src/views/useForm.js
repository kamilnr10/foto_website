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
  // console.log(form);
  let errorsInfo = {};

  if (!form.name.trim()) errorsInfo.name = 'Username required';
  if (!regName.test(form.name)) errorsInfo.name = 'Name is invalid';
  if (form.name.length > 30) errorsInfo.name = 'Max char length of name is 30';
  if (form.name.length < 2) errorsInfo.name = 'Min char length of name is 2';

  if (!form.subject.trim()) errorsInfo.subject = 'Subject required';
  if (form.subject.length > 100) {
    errorsInfo.subject = 'Max char length of subject is 100';
  }
  if (form.subject.length < 2) {
    errorsInfo.subject = 'Min char length of subject is 2';
  }

  if (!form.email.trim()) errorsInfo.email = 'Email required';
  if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
    errorsInfo.email = 'Email address is invalid';
  }
  if (form.email.length > 50) {
    errorsInfo.email = 'Max char length of email address is 50';
  }

  if (!form.message.trim()) errorsInfo.message = 'Message required';
  if (form.message.length < 4) errorsInfo.message = 'Message is too short';
  if (form.message.length > 500) {
    errorsInfo.message = 'Max char length of message is 500';
  }

  return errorsInfo;
};

const useForm = (validateFn) => {
  const [values, setValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [sendMessage, setSendMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendMessage('');
    const validatedErrors = validateFn(values);
    if (Object.keys(validatedErrors).length > 0) {
      setErrors(validatedErrors);
    } else {
      console.log('wyslano');
      setSendMessage('Wysłano');
      setTimeout(() => setSendMessage(''), 10000);
      emailjs
        .sendForm(
          REACT_APP_EMAILJS_SERVICE_API,
          'template_wr2n5cr',
          e.target,
          REACT_APP_EMAILJS_ACCOUNT_API
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setValues(initialFormState);
      setErrors({});
    }
  };

  return { handleChange, values, handleSubmit, errors, sendMessage };
};

export default useForm;
