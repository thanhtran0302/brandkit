import React from 'react';
import ProtecRoute from '../../components/protectRoute/ProtectRoute';
import PageMeta from '../../components/pageMeta/PageMeta';
import PageWidthProfileNav from '../../components/pageWithProfileNav/PageWithProfileNav';
import Dashboard from '../../components/dashboard/Dashboard';
import { NextPage, NextPageContext } from 'next';
import { IProject } from '../../components/projectItem/ProjectItem';
import { request, METHODS } from '../../utils/http';
import { API_URL, TOKEN_COOKIE } from '../../constants/global';
import axios from 'axios';
import nookies from 'nookies';

interface IDashboardPageProps {
  project: IProject;
}

const DashboardNextPage: NextPage<IDashboardPageProps> = ({ project }) => (
  <ProtecRoute>
    <PageMeta title={'Dashboard'}>
      <PageWidthProfileNav hasContainer={false}>
        <Dashboard project={project} />
      </PageWidthProfileNav>
    </PageMeta>
  </ProtecRoute>
);

DashboardNextPage.getInitialProps = async (ctx: NextPageContext) => {
  try {
    const { id } = ctx.query;
    const response: IProject = await request(
      METHODS.GET,
      `${API_URL}/projects/${id}`,
      axios.CancelToken.source(),
      {
        headers: {
          Authorization: nookies.get(ctx)[TOKEN_COOKIE]
        }
      }
    );
    return { project: response };
  } catch (error) {
    throw error;
  }
};

export default DashboardNextPage;
