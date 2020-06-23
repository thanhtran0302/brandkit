import React, { useEffect, FC, Fragment } from 'react';
import useAuth, { UserContextProps } from '../../context/AuthContext';
import { useRouter, NextRouter } from 'next/router';

const ProtecRoute: FC = ({ children }) => {
  const { isAuthenticated }: UserContextProps = useAuth();
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return <Fragment>{children}</Fragment>;
};

export default ProtecRoute;
