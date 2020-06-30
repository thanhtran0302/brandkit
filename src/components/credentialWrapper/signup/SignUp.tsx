import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  METHODS,
  request,
  extractAxiosErrorResponse
} from '../../../utils/http';
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
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Pen from '../../../assets/icons/pen.svg';
import { getSignUpSchema } from './SignUp.schema';
import * as yup from 'yup';
import { extractYupErrors } from '../../../utils/global';
import CredentialWrapper from '../CredentialWrapper';
import axios from 'axios';
import Alert, { AlertAppearance } from '../../alert/Alert';

export interface ISignUpStateProps {
  email: string;
  password: string;
  confirm_password: string;
}

const defaultStateValues: ISignUpStateProps = {
  email: '',
  password: '',
  confirm_password: ''
};

const SignUp = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const [state, setState] = useState<ISignUpStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<ISignUpStateProps>(defaultStateValues);
  const [httpErrors, setHttpErrors] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const signUpSchema: yup.ObjectSchema<yup.Shape<
      object | undefined,
      ISignUpStateProps
    >> = getSignUpSchema(
      t('emailErrorMsg'),
      t('passwordErrorMsg'),
      t('confirmPasswordErrorMsg')
    );

    signUpSchema
      .validate(state, { abortEarly: false })
      .then(async (valid: yup.Shape<object | undefined, ISignUpStateProps>) => {
        try {
          await request(
            METHODS.POST,
            `${API_URL}/signup`,
            axios.CancelToken.source(),
            {
              data: valid
            }
          );
          setLoading(false);
          setErrors(defaultStateValues);
          setState(defaultStateValues);
        } catch (error) {
          setLoading(false);
          setHttpErrors(extractAxiosErrorResponse(error));
        }
      })
      .catch(error => {
        setLoading(false);
        setErrors(extractYupErrors<ISignUpStateProps>(error));
      });
  };

  return (
    <CredentialWrapper isLoading={isLoading}>
      <form onSubmit={onSubmit}>
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
            type={ButtonTypes.SUBMIT}
            icon={<Pen />}
            iconPosition={ButtonIconPosition.RIGHT}
          />
        </ButtonWrapper>
      </form>
      {httpErrors && (
        <Alert text={t(httpErrors)} appearance={AlertAppearance.ERROR} />
      )}
      <Separator />
      <Link href="#">{t('forgotPassword')}</Link>
      <Link href="/login">{t('alreadySignedUp')}</Link>
    </CredentialWrapper>
  );
};

export default SignUp;
