import React from 'react';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import './App.css';

const Field = ({ children }) =>
  <React.Fragment>
    {children}
    <br />
  </React.Fragment>;

const Input = ({ value, onChange, ...props }) =>
  <input
    {...props}
    value={value}
    onChange={event => onChange(event.target.value)}
  />;

const SubmitButton = props =>
  <button {...props}>submit</button>;

const UserForm = ({
  setEmail,
  setPassword,
  email,
  password,
  onSubmit,
}) => (
  <React.Fragment>
    <Field>
      Email: <Input className='userForm' value={email} onChange={setEmail} />
    </Field>
    <Field>
      Password: <Input className='userForm password' value={password} onChange={setPassword} type="password" />
    </Field>
    <SubmitButton className='userForm button' onClick={() => onSubmit(email, password)} />
  </React.Fragment>
);

const withUserFormState = compose(
  withState('email', 'setEmail'),
  withState('password', 'setPassword'),
);

export default withUserFormState(UserForm);