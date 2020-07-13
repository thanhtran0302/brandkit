import React, { FC } from 'react';
import { Layout, LogoContainer, ProjectName } from './ProjectItem.styles';

export interface IProject {
  id: string;
  name: string;
  description: string;
  creation_date: string;
  update_date?: string;
}

const ProjectItem: FC<IProject> = ({ name }) => {
  const projectFirstLetter: string = name[0];

  return (
    <Layout>
      <LogoContainer>{projectFirstLetter}</LogoContainer>
      <ProjectName>{name}</ProjectName>
    </Layout>
  );
};

export default ProjectItem;
