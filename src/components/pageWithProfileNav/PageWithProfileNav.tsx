import React, { FC, ReactNode, Fragment } from 'react';
import { Layout, SiteHomePage, Container } from './PageWithProfileNav.styles';
import ProfileMenu from '../../assets/icons/profile.svg';

interface OwnProps {
  children: ReactNode;
}

const ProfileNavBar: FC<OwnProps> = ({ children }) => (
  <Fragment>
    <Layout>
      <SiteHomePage>Brandkit</SiteHomePage>
      <ProfileMenu />
    </Layout>
    <Container>{children}</Container>
  </Fragment>
);

export default ProfileNavBar;
