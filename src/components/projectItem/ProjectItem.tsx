import React, { FC } from 'react';
import { Layout, ProjectField } from './ProjectItem.styles';

export interface IProject {
  id: string;
  name: string;
  description: string;
  creation_date: string;
  update_date?: string;
}

const ProjectItem: FC<IProject> = ({
  name,
  description,
  creation_date,
  update_date
}) => (
  <Layout>
    <ProjectField>{name}</ProjectField>
    <ProjectField>{description}</ProjectField>
    <ProjectField>{creation_date}</ProjectField>
    <ProjectField>{update_date ? update_date : creation_date}</ProjectField>
  </Layout>
);

export default ProjectItem;
