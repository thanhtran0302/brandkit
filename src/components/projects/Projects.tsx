import React, { FC } from 'react';

import { Layout, Title } from './Projects.styles';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import useModal from '../modal/Modal';
import ProjectModalContent from '../projectModalContent/ProjectModalContent';

const Projects: FC = () => {
  const { t } = useTranslation();
  const { createModal, openModal, closeModal } = useModal();

  return (
    <Layout>
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
    </Layout>
  );
};

export default Projects;
