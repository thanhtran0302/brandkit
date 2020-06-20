import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { METHODS } from '../../utils/http';
import Input, { InputTypes } from '../input/Input';
import { Layout, Form } from './SignUp.styles';
import { API_URL } from '../../constants/global';
import { BaseWidthLayout } from '../../utils/styles';

interface StateProps {
  email: string;
  password: string;
  confirm_password: string;
}

const SignUp = () => {
  const [state, setState] = useState<StateProps>({
    email: '',
    password: '',
    confirm_password: ''
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const onClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/signup`, {
        method: METHODS.POST,
        body: JSON.stringify(state),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <BaseWidthLayout>
      <Layout>
        <Form>
          <Input
            type={InputTypes.TEXT}
            label="E-mail"
            id="email-signup"
            name="email"
            placeholder="E-mail"
            value={state.email}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          <Input
            type={InputTypes.PASSWORD}
            label="Password"
            id="password-signup"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          <Input
            type={InputTypes.PASSWORD}
            label="Confirm password"
            id="cpassword-signup"
            name="confirm_password"
            placeholder="Confirm password"
            value={state.confirm_password}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          <button onClick={onClick}>Submit</button>
        </Form>
      </Layout>
    </BaseWidthLayout>
  );
};

export default SignUp;
