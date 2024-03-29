import React from 'react';
import PageMeta from '../components/pageMeta/PageMeta';
import ProtecRoute from '../components/protectRoute/ProtectRoute';
import ProjectsPage from '../components/projectsPage/ProjectsPage';
import PageWidthProfileNav from '../components/pageWithProfileNav/PageWithProfileNav';
import { NextPage, NextPageContext } from 'next';
import { request, METHODS } from '../utils/http';
import { API_URL, TOKEN_COOKIE } from '../constants/global';
import axios from 'axios';
import nookies from 'nookies';
import { IProject } from '../components/projectItem/ProjectItem';

export interface IProjectPageProps {
  projects: IProject[];
}

const ProjectsNextPage: NextPage<IProjectPageProps> = ({ projects }) => (
  <ProtecRoute>
    <PageMeta title="Projects">
      <PageWidthProfileNav hasContainer={true}>
        <ProjectsPage projects={projects} />
      </PageWidthProfileNav>
    </PageMeta>
  </ProtecRoute>
);

ProjectsNextPage.getInitialProps = async (ctx: NextPageContext) => {
  try {
    const response: IProject[] = await request(
      METHODS.GET,
      `${API_URL}/projects`,
      axios.CancelToken.source(),
      {
        headers: {
          Authorization: nookies.get(ctx)[TOKEN_COOKIE]
        }
      }
    );
    return { projects: response };
  } catch (error) {
    return { projects: [] };
  }
};

export default ProjectsNextPage;
