import React, { Fragment, useState, ChangeEvent, MouseEvent } from 'react';
import { METHODS } from '../../utils/http';
import Input, { InputTypes } from '../input/Input';
import {
  InputWithError,
  InputError,
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
import { getSignUpSchema } from './SignUp.schema';
import * as yup from 'yup';
import Loader from '../loader/Loader';
import { extractYupErrors } from '../../utils/global';

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
    <Fragment>
      {isLoading && <Loader />}
      <CloseWrapper>
        <a href={SITE_URL}>
          <Close />
        </a>
      </CloseWrapper>
      <BaseWidthLayout>
        <Layout>
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
              {errors.password && (
                <InputError>{t('passwordErrorMsg')}</InputError>
              )}
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
