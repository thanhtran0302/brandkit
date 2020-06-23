import React, { FC, useState, FormEvent, ChangeEvent } from 'react';
import { Layout, ButtonsWrapper } from './ProjectModalContent.styles';
import Input, { InputTypes } from '../input/Input';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import {
  InputWithError,
  InputError
} from '../credentialWrapper/CredentialWrapper.styles';
import * as yup from 'yup';
import { getCreateProjectSchema } from './ProjectModalContent.schema';
import { extractYupErrors } from '../../utils/global';
import { API_URL, TOKEN_COOKIE } from '../../constants/global';
import { METHODS } from '../../utils/http';
import { useCookies } from 'react-cookie';
import Loader from '../loader/Loader';

interface OwnProps {
  closeModal(): void;
}

export interface StateProps {
  name: string;
  description: string;
}

const defaultStateValues: StateProps = {
  name: '',
  description: ''
};

const ProjectModalContent: FC<OwnProps> = ({ closeModal }) => {
  const { t } = useTranslation();
  const [state, setState] = useState<StateProps>(defaultStateValues);
  const [errors, setErrors] = useState<StateProps>(defaultStateValues);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [cookies] = useCookies();

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
    const createProjectSchema: yup.ObjectSchema<yup.Shape<
      object | undefined,
      StateProps
    >> = getCreateProjectSchema(t('fieldShouldNotEmpty'));

    setLoading(true);
    createProjectSchema
      .validate(state, { abortEarly: false })
      .then(async (valid: yup.Shape<object | undefined, StateProps>) => {
        try {
          await fetch(`${API_URL}/projects`, {
            method: METHODS.POST,
            body: JSON.stringify(valid),
            headers: {
              'Content-Type': 'application/json',
              Authorization: cookies[TOKEN_COOKIE]
            }
          });
          setLoading(false);
          closeModal();
        } catch (error) {
          setLoading(false);
          throw error;
        }
      })
      .catch(error => {
        setErrors(extractYupErrors<StateProps>(error));
        setLoading(false);
      });
  };

  return (
    <Layout>
      {isLoading && <Loader />}
      <form onSubmit={onSubmit}>
        <InputWithError>
          <Input
            type={InputTypes.TEXT}
            label={t('projectName')}
            id="brand-name"
            name="name"
            placeholder={t('projectName')}
            value={state?.name}
            hasError={!!errors.name}
            autoComplete="off"
            onChange={onChange}
          />
          {errors.name && <InputError>{t('fieldShouldNotEmpty')}</InputError>}
        </InputWithError>
        <InputWithError>
          <Input
            type={InputTypes.TEXT}
            label={t('description')}
            name="description"
            id="brand-description"
            placeholder={t('projectDescription')}
            value={state?.description}
            hasError={!!errors.description}
            autoComplete="off"
            onChange={onChange}
          />
          {errors.description && (
            <InputError>{t('fieldShouldNotEmpty')}</InputError>
          )}
        </InputWithError>
        <ButtonsWrapper>
          <Button
            type={ButtonTypes.BUTTON}
            label={t('close')}
            appearance={ButtonAppearance.SECONDARY}
            onClick={() => closeModal()}
          />
          <Button
            type={ButtonTypes.SUBMIT}
            label={t('createProject')}
            appearance={ButtonAppearance.RED}
          />
        </ButtonsWrapper>
      </form>
    </Layout>
  );
};

export default ProjectModalContent;
