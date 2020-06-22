import React, { FC } from 'react';

import { Layout, Title } from './Projects.styles';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import useModal from '../modal/Modal';

const Projects: FC = () => {
  const { t } = useTranslation();
  const { createModal, openModal } = useModal();

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
        title: 'Hello',
        content: <div>hello</div>,
        subtitle: 'Create a new project now.'
      })}
    </Layout>
  );
};

export default Projects;
