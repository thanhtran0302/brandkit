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

interface OwnProps {
  children: ReactNode;
}

const ProfileNavBar: FC<OwnProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <Layout>
        <SiteHomePage>Brandkit</SiteHomePage>
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
