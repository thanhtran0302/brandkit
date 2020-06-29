import React, { FC } from 'react';
import ProjectItem, { Project } from '../projectItem/ProjectItem';
import { Layout } from './Projects.styles';

interface OwnProps {
  projects: Project[];
}

const Projects: FC<OwnProps> = ({ projects }) => (
  <Layout>
    {projects.map((project: Project, key: number) => (
      <ProjectItem key={key} {...project} />
    ))}
  </Layout>
);

export default Projects;
