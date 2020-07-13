import React, { FC } from 'react';
import ProjectItem, { IProject } from '../projectItem/ProjectItem';
import { Layout, NoProjectsContainer, NewProjectCTA } from './Projects.styles';
import { useTranslation } from 'react-i18next';

interface IOwnProps {
  projects: IProject[];
  openModal(): void;
}

const Projects: FC<IOwnProps> = ({ projects, openModal }) => {
  const { t } = useTranslation();

  return projects.length ? (
    <Layout>
      {projects.map((project: IProject, key: number) => (
        <ProjectItem key={key} {...project} />
      ))}
    </Layout>
  ) : (
    <NoProjectsContainer>
      <p>{t('haventProjectsYet')}</p>
      <p>
        <NewProjectCTA onClick={() => openModal()}>
          {t('clickHere')}
        </NewProjectCTA>{' '}
        {t('createNewProject')}
      </p>
    </NoProjectsContainer>
  );
};

export default Projects;
