import React, { FC } from 'react';

import {
  Layout,
  Title,
  ProjectHeader,
  ProjectContent
} from './Projects.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import useModal, { UseModalProps } from '../modal/Modal';
import ProjectModalContent from '../projectModalContent/ProjectModalContent';
import Alert, { AlertAppearance } from '../alert/Alert';

const Projects: FC = () => {
  const { t }: UseTranslationResponse = useTranslation();
  const { createModal, openModal, closeModal }: UseModalProps = useModal();

  return (
    <Layout>
      <ProjectHeader>
        <Title>{t('allProjects')}</Title>
        <Button
          type={ButtonTypes.BUTTON}
          appearance={ButtonAppearance.RED}
          label={t('newProject')}
          onClick={() => openModal()}
        />
        {createModal({
          title: t('newProject'),
          content: <ProjectModalContent closeModal={closeModal} />
        })}
      </ProjectHeader>
      <ProjectContent>
        <Alert
          text={'This is an alert'}
          appearance={AlertAppearance.INFO}
          closable={true}
        />
        <Alert
          text={'This is an alert'}
          appearance={AlertAppearance.SUCCESS}
          closable={true}
        />
        <Alert
          text={'This is an alert'}
          appearance={AlertAppearance.WARNING}
          closable={true}
        />
        <Alert
          text={'This is an alert'}
          appearance={AlertAppearance.ERROR}
          closable={true}
        />
      </ProjectContent>
    </Layout>
  );
};

export default Projects;
