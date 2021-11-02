const regName = /^[a-zA-ZÓ-ż]+(([',. -][a-zA-Zó-ż ])?[a-zA-Zó-ż]*)*$/i;

export const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Username required';
  } else if (!regName.test(values.name)) {
    errors.name = 'Name is invalid';
  }

  if (!values.subject) {
    errors.subject = 'Subject required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.message) {
    errors.message = 'Message required';
  } else if (values.message.length < 4) {
    errors.message = 'Message is too short';
  }

  return errors;
};
