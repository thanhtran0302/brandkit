import React, { FC } from 'react';
import { Layout } from './Dashboard.styles';
import SideBarMenu from './sideBarMenu/SideBarMenu';
import { IProject } from '../projectItem/ProjectItem';

interface IOwnProps {
  project: IProject;
}

const Dashboard: FC<IOwnProps> = ({ project }) => {
  const { name }: IProject = project;

  return (
    <Layout>
      <SideBarMenu name={name} />
    </Layout>
  );
};

export default Dashboard;
