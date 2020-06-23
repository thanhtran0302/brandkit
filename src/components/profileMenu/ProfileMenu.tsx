import React, { FC } from 'react';
import { Layout, Link } from './ProfileMenu.styles';
import useAuth, { UserContextProps } from '../../context/AuthContext';

const ProfileMenu: FC = (): JSX.Element => {
  const { logout }: UserContextProps = useAuth();

  return (
    <Layout>
      <Link onClick={() => logout()}>Log out</Link>
    </Layout>
  );
};

export default ProfileMenu;
