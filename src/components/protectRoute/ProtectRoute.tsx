import React, { useEffect, FC, Fragment } from 'react';
import useAuth, { UserContextProps } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const ProtecRoute: FC = ({ children }) => {
  const { isAuthenticated }: UserContextProps = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated]);

  return <Fragment>{children}</Fragment>;
};

export default ProtecRoute;
