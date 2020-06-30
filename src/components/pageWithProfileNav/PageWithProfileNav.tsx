import React, { FC, ReactNode, Fragment, useState } from 'react';
import {
  Layout,
  SiteHomePage,
  Container,
  MenuContainer
} from './PageWithProfileNav.styles';
import ProfileMenuIcon from '../../assets/icons/profile.svg';
import ProfileMenu from '../profileMenu/ProfileMenu';
import OutsideClickHandler from 'react-outside-click-handler';
import { SITE_NAME } from '../../constants/global';

interface IOwnProps {
  children: ReactNode;
}

const ProfileNavBar: FC<IOwnProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <Layout>
        <SiteHomePage>{SITE_NAME}</SiteHomePage>
        <MenuContainer>
          <ProfileMenuIcon onClick={() => setOpen(!isOpen)} />
          <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            {isOpen && <ProfileMenu />}
          </OutsideClickHandler>
        </MenuContainer>
      </Layout>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default ProfileNavBar;
