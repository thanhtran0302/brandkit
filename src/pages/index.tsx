import React, { FC } from 'react';
import App from '../components/app/App';
import PageMeta from '../components/pageMeta/PageMeta';

const Home: FC = () => (
  <PageMeta>
    <App />
  </PageMeta>
);

export default Home;
