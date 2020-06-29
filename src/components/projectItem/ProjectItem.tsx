import React, { FC } from 'react';
import { Layout, ProjectField } from './ProjectItem.styles';

export interface Project {
  id: string;
  user_id: string;
  name: string;
  description: string;
  creation_date: string;
  update_date?: string;
}

const ProjectItem: FC<Project> = ({
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
