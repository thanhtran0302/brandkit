import React, {
  FC,
  useState,
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction
} from 'react';
import { Layout, ButtonsWrapper } from './ProjectModalContent.styles';
import Input, { InputTypes } from '../input/Input';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import {
  InputWithError,
  InputError
} from '../credentialWrapper/CredentialWrapper.styles';
import * as yup from 'yup';
import { getCreateProjectSchema } from './ProjectModalContent.schema';
import { extractYupErrors } from '../../utils/global';
import { API_URL } from '../../constants/global';
import { METHODS, request, extractAxiosErrorResponse } from '../../utils/http';
import axios from 'axios';
import Loader from '../loader/Loader';
import Alert, { AlertAppearance } from '../alert/Alert';
import { IProject } from '../projectItem/ProjectItem';

interface IOwnProps {
  closeModal(): void;
  projects: IProject[];
  setProjects: Dispatch<SetStateAction<IProject[]>>;
}

export interface IStateProps {
  name: string;
  description: string;
}

const defaultStateValues: IStateProps = {
  name: '',
  description: ''
};

const ProjectModalContent: FC<IOwnProps> = ({
  closeModal,
  projects,
  setProjects
}) => {
  const { t }: UseTranslationResponse = useTranslation();
  const [state, setState] = useState<IStateProps>(defaultStateValues);
  const [errors, setErrors] = useState<IStateProps>(defaultStateValues);
  const [httpError, setHttpError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const createProjectSchema: yup.ObjectSchema<yup.Shape<
      object | undefined,
      IStateProps
    >> = getCreateProjectSchema(t('fieldShouldNotEmpty'));

    setLoading(true);
    createProjectSchema
      .validate(state, { abortEarly: false })
      .then(async (valid: yup.Shape<object | undefined, IStateProps>) => {
        try {
          const response = await request(
            METHODS.POST,
            `${API_URL}/projects`,
            axios.CancelToken.source(),
            {
              data: valid
            }
          );
          const { project } = response;
          setProjects([...projects, project]);
          setLoading(false);
          closeModal();
        } catch (error) {
          setHttpError(extractAxiosErrorResponse(error));
          setLoading(false);
        }
      })
      .catch(error => {
        setErrors(extractYupErrors<IStateProps>(error));
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
      {httpError && (
        <Alert text={t(httpError)} appearance={AlertAppearance.ERROR} />
      )}
    </Layout>
  );
};

export default ProjectModalContent;
