import React from 'react';
import PageMeta from '../components/pageMeta/PageMeta';
import ProtecRoute from '../components/protectRoute/ProtectRoute';

const Projects = () => (
  <ProtecRoute>
    <PageMeta title="Projects">
      <div>Projects</div>
    </PageMeta>
  </ProtecRoute>
);

export default Projects;
