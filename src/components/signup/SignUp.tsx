import React, { Fragment, useState, ChangeEvent, MouseEvent } from 'react';
import { METHODS } from '../../utils/http';
import Input, { InputTypes } from '../input/Input';
import {
  CloseWrapper,
  Link,
  Separator,
  ButtonWrapper,
  Layout
} from './SignUp.styles';
import { API_URL, SITE_URL } from '../../constants/global';
import { BaseWidthLayout } from '../../utils/styles';
import Button, {
  ButtonTypes,
  ButtonAppearance,
  ButtonIconPosition
} from '../button/Button';
import { useTranslation } from 'react-i18next';
import Arrow from '../../assets/icons/arrow.svg';
import Close from '../../assets/icons/close.svg';

interface StateProps {
  email: string;
  password: string;
  confirm_password: string;
}

const SignUp = () => {
  const { t } = useTranslation();
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
    <Fragment>
      <CloseWrapper>
        <a href={SITE_URL}>
          <Close />
        </a>
      </CloseWrapper>
      <BaseWidthLayout>
        <Layout>
          <form>
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
            <ButtonWrapper>
              <Button
                label={t('signUp')}
                appearance={ButtonAppearance.PRIMARY}
                type={ButtonTypes.BUTTON}
                onClick={onClick}
                icon={<Arrow />}
                iconPosition={ButtonIconPosition.RIGHT}
              />
            </ButtonWrapper>
          </form>
          <Separator />
          <Link href="#">{t('forgotPassword')}</Link>
          <Link href="#">{t('alreadySignedUp')}</Link>
        </Layout>
      </BaseWidthLayout>
    </Fragment>
  );
};

export default SignUp;
