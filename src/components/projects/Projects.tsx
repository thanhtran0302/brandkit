import React, { FC } from 'react';
import ProjectItem, { IProject } from '../projectItem/ProjectItem';
import { Layout } from './Projects.styles';

interface IOwnProps {
  projects: IProject[];
}

const Projects: FC<IOwnProps> = ({ projects }) => (
  <Layout>
    {projects.map((project: IProject, key: number) => (
      <ProjectItem key={key} {...project} />
    ))}
  </Layout>
);

export default Projects;
