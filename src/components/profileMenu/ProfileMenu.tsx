import React from 'react';
import { Layout, Link } from './ProfileMenu.styles';
import useAuth, { UserContextProps } from '../../context/AuthContext';

const ProfileMenu = () => {
  const { logout }: UserContextProps = useAuth();

  return (
    <Layout>
      <Link onClick={() => logout()}>Log out</Link>
    </Layout>
  );
};

export default ProfileMenu;
