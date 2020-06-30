import React, { FC, useState } from 'react';
import { Layout, Title, ProjectHeader } from './ProjectsPage.styles';
import { useTranslation, UseTranslationResponse } from 'react-i18next';
import Button, { ButtonTypes, ButtonAppearance } from '../button/Button';
import useModal, { IUseModalProps } from '../modal/Modal';
import ProjectModalContent from '../projectModalContent/ProjectModalContent';
import { IProjectPageProps } from '../../pages/projects';
import Projects from '../projects/Projects';
import { IProject } from '../projectItem/ProjectItem';

const ProjectsPage: FC<IProjectPageProps> = ({ projects }) => {
  const { t }: UseTranslationResponse = useTranslation();
  const { createModal, openModal, closeModal }: IUseModalProps = useModal();
  const [storedProjects, setProjects] = useState<IProject[]>(projects || []);

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
          content: (
            <ProjectModalContent
              closeModal={closeModal}
              projects={storedProjects}
              setProjects={setProjects}
            />
          )
        })}
      </ProjectHeader>
      <Projects projects={storedProjects} />
    </Layout>
  );
};

export default ProjectsPage;
