import React, { useState, FC, ChangeEvent, MouseEvent } from 'react';
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
import { API_URL } from '../../../constants/global';
import { METHODS } from '../../../utils/http';
import { extractYupErrors } from '../../../utils/global';

export interface LogInStateProps {
  email: string;
  password: string;
}

const defaultStateValues: LogInStateProps = {
  email: '',
  password: ''
};

const LogIn: FC = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<LogInStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<LogInStateProps>(defaultStateValues);

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
    const logInSchema: yup.ObjectSchema<yup.Shape<
      object | undefined,
      LogInStateProps
    >> = getLogInSchema(t('emailErrorMsg'), t('passwordErrorMsg'));

    logInSchema
      .validate(state, { abortEarly: false })
      .then(async (valid: yup.Shape<object | undefined, LogInStateProps>) => {
        try {
          const response: Response = await fetch(`${API_URL}/login`, {
            method: METHODS.POST,
            body: JSON.stringify(valid),
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const result = await response.json();

          setErrors(defaultStateValues);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          throw error;
        }
      })
      .catch(error => {
        setLoading(false);
        setErrors(extractYupErrors<LogInStateProps>(error));
      });
  };

  return (
    <CredentialWrapper isLoading={isLoading}>
      <form>
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
            type={ButtonTypes.BUTTON}
            onClick={onClick}
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
