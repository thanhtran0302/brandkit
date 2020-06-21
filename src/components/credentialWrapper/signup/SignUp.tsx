import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { METHODS } from '../../../utils/http';
import Input, { InputTypes } from '../../input/Input';
import {
  InputWithError,
  InputError,
  Link,
  Separator,
  ButtonWrapper
} from '../CredentialWrapper.styles';
import { API_URL } from '../../../constants/global';
import Button, {
  ButtonTypes,
  ButtonAppearance,
  ButtonIconPosition
} from '../../button/Button';
import { useTranslation } from 'react-i18next';
import Pen from '../../../assets/icons/pen.svg';
import { getSignUpSchema } from './SignUp.schema';
import * as yup from 'yup';
import { extractYupErrors } from '../../../utils/global';
import CredentialWrapper from '../CredentialWrapper';

export interface SignUpStateProps {
  email: string;
  password: string;
  confirm_password: string;
}

const defaultStateValues: SignUpStateProps = {
  email: '',
  password: '',
  confirm_password: ''
};

const SignUp = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<SignUpStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<SignUpStateProps>(defaultStateValues);
  const [isLoading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const signUpSchema: yup.ObjectSchema<yup.Shape<
      object | undefined,
      SignUpStateProps
    >> = getSignUpSchema(
      t('emailErrorMsg'),
      t('passwordErrorMsg'),
      t('confirmPasswordErrorMsg')
    );

    signUpSchema
      .validate(state, { abortEarly: false })
      .then(async (valid: yup.Shape<object | undefined, SignUpStateProps>) => {
        try {
          await fetch(`${API_URL}/signup`, {
            method: METHODS.POST,
            body: JSON.stringify(valid),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          setErrors(defaultStateValues);
          setState(defaultStateValues);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          throw error;
        }
      })
      .catch(error => {
        setLoading(false);
        setErrors(extractYupErrors<SignUpStateProps>(error));
      });
  };

  return (
    <CredentialWrapper isLoading={isLoading}>
      <form>
        <InputWithError>
          <Input
            type={InputTypes.EMAIL}
            label={t('email')}
            id="email-signup"
            name="email"
            placeholder={t('email')}
            value={state.email}
            hasError={!!errors.email}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          {errors.email && <InputError>{t('emailErrorMsg')}</InputError>}
        </InputWithError>
        <InputWithError>
          <Input
            type={InputTypes.PASSWORD}
            label={t('password')}
            id="password-signup"
            name="password"
            placeholder={t('password')}
            value={state.password}
            hasError={!!errors.password}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          {errors.password && <InputError>{t('passwordErrorMsg')}</InputError>}
        </InputWithError>
        <InputWithError>
          <Input
            type={InputTypes.PASSWORD}
            label={t('confirmPassword')}
            id="cpassword-signup"
            name="confirm_password"
            placeholder={t('confirmPassword')}
            value={state.confirm_password}
            hasError={!!errors.confirm_password}
            onChange={onChange}
            autoComplete="off"
            required={true}
          />
          {errors.confirm_password && (
            <InputError>{t('confirmPasswordErrorMsg')}</InputError>
          )}
        </InputWithError>
        <ButtonWrapper>
          <Button
            label={t('signUp')}
            appearance={ButtonAppearance.PRIMARY}
            type={ButtonTypes.BUTTON}
            onClick={onClick}
            icon={<Pen />}
            iconPosition={ButtonIconPosition.RIGHT}
          />
        </ButtonWrapper>
      </form>
      <Separator />
      <Link href="#">{t('forgotPassword')}</Link>
      <Link href="/login">{t('alreadySignedUp')}</Link>
    </CredentialWrapper>
  );
};

export default SignUp;
