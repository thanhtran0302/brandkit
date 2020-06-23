import React, { FC } from 'react';
import PageMeta from '../components/pageMeta/PageMeta';
import ProtecRoute from '../components/protectRoute/ProtectRoute';
import Projects from '../components/projects/Projects';
import PageWidthProfileNav from '../components/pageWithProfileNav/PageWithProfileNav';

const ProjectsPage: FC = () => (
  <ProtecRoute>
    <PageMeta title="Projects">
      <PageWidthProfileNav>
        <Projects />
      </PageWidthProfileNav>
    </PageMeta>
  </ProtecRoute>
);

export default ProjectsPage;
