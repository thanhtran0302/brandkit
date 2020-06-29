import React, { FC } from 'react';
import { Layout, Title, ProjectHeader } from './ProjectsPage.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import useModal, { UseModalProps } from '../modal/Modal';
import ProjectModalContent from '../projectModalContent/ProjectModalContent';
import { ProjectPageProps } from '../../pages/projects';
import Projects from '../projects/Projects';

const ProjectsPage: FC<ProjectPageProps> = ({ projects }) => {
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
      <Projects projects={projects} />
    </Layout>
  );
};

export default ProjectsPage;
