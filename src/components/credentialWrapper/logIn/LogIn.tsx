import React, { useState, FC, ChangeEvent, FormEvent } from 'react';
import CredentialWrapper from '../CredentialWrapper';
import {
  InputWithError,
  InputError,
  Link,
  Separator,
  ButtonWrapper
} from '../CredentialWrapper.styles';
import Input, { InputTypes } from '../../input/Input';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, {
  ButtonAppearance,
  ButtonTypes,
  ButtonIconPosition
} from '../../button/Button';
import Arrow from '../../../assets/icons/arrow.svg';
import * as yup from 'yup';
import { getLogInSchema } from './LogIn.schema';
import { extractYupErrors } from '../../../utils/global';
import useAuth, { IUserContextProps } from '../../../context/AuthContext';
import { EventInputTarget } from '../../../utils/types';
import Alert, { AlertAppearance } from '../../alert/Alert';

export interface ILogInStateProps {
  email: string;
  password: string;
}

export interface ILogInResponse {
  message: string;
  token?: string;
}

const defaultStateValues: ILogInStateProps = {
  email: '',
  password: ''
};

const LogIn: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const [state, setState] = useState<ILogInStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<ILogInStateProps>(defaultStateValues);
  const {
    isAuthenticated,
    loading,
    login,
    errors: httpErrors
  }: IUserContextProps = useAuth();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value }: EventInputTarget = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isAuthenticated) {
      const logInSchema: yup.ObjectSchema<yup.Shape<
        object | undefined,
        ILogInStateProps
      >> = getLogInSchema(t('emailErrorMsg'), t('passwordErrorMsg'));

      logInSchema
        .validate(state, { abortEarly: false })
        .then(
          async (valid: yup.Shape<object | undefined, ILogInStateProps>) => {
            await login(valid);
          }
        )
        .catch(error => {
          setErrors(extractYupErrors<ILogInStateProps>(error));
        });
    }
  };

  return (
    <CredentialWrapper isLoading={loading}>
      <form onSubmit={onSubmit}>
        <InputWithError>
          <Input
            type={InputTypes.EMAIL}
            label={t('email')}
            id="email-login"
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
            id="pasword-login"
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
        <ButtonWrapper>
          <Button
            label={t('logIn')}
            appearance={ButtonAppearance.PRIMARY}
            type={ButtonTypes.SUBMIT}
            icon={<Arrow />}
            iconPosition={ButtonIconPosition.RIGHT}
          />
        </ButtonWrapper>
      </form>
      {httpErrors && (
        <Alert text={t(httpErrors)} appearance={AlertAppearance.ERROR} />
      )}
      <Separator />
      <Link href="#">{t('forgotPassword')}</Link>
      <Link href="/signup">{t('createNewAccount')}</Link>
    </CredentialWrapper>
  );
};

export default LogIn;
