import React, { FC } from 'react';
import { Layout, LogoContainer, ProjectName } from './ProjectItem.styles';

export interface IProject {
  id: string;
  name: string;
  description: string;
  creation_date: string;
  update_date?: string;
}

const ProjectItem: FC<IProject> = ({ id, name }) => {
  const projectFirstLetter: string = name[0];

  return (
    <Layout>
      <a href={`/dashboard/${id}`}>
        <LogoContainer>{projectFirstLetter}</LogoContainer>
        <ProjectName>{name}</ProjectName>
      </a>
    </Layout>
  );
};

export default ProjectItem;
