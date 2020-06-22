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
import { useTranslation } from 'react-i18next';
import Button, {
  ButtonAppearance,
  ButtonTypes,
  ButtonIconPosition
} from '../../button/Button';
import Arrow from '../../../assets/icons/arrow.svg';
import * as yup from 'yup';
import { getLogInSchema } from './LogIn.schema';
import { extractYupErrors } from '../../../utils/global';
import useAuth, { UserContextProps } from '../../../context/AuthContext';

export interface LogInStateProps {
  email: string;
  password: string;
}

export interface LogInResponse {
  message: string;
  token?: string;
}

const defaultStateValues: LogInStateProps = {
  email: '',
  password: ''
};

const LogIn: FC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<LogInStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<LogInStateProps>(defaultStateValues);
  const { isAuthenticated, loading, login }: UserContextProps = useAuth();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
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
        LogInStateProps
      >> = getLogInSchema(t('emailErrorMsg'), t('passwordErrorMsg'));

      logInSchema
        .validate(state, { abortEarly: false })
        .then(async (valid: yup.Shape<object | undefined, LogInStateProps>) => {
          await login(valid);
        })
        .catch(error => {
          setErrors(extractYupErrors<LogInStateProps>(error));
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
      <Separator />
      <Link href="#">{t('forgotPassword')}</Link>
      <Link href="/signup">{t('createNewAccount')}</Link>
    </CredentialWrapper>
  );
};

export default LogIn;
