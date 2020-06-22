import React, { FC } from 'react';

import { Layout, Title } from './Projects.styles';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Title>{t('allProjects')}</Title>
      <Button
        type={ButtonTypes.BUTTON}
        appearance={ButtonAppearance.RED}
        label={'New Project'}
        onClick={() => {}}
      />
    </Layout>
  );
};

export default Projects;
