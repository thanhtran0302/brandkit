import React, { createContext, useState, useContext, FC } from 'react';
import { LogInStateProps } from '../components/credentialWrapper/logIn/LogIn';
import { API_URL, TOKEN_COOKIE } from '../constants/global';
import { METHODS, request } from '../utils/http';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import * as yup from 'yup';
import { useRouter, NextRouter } from 'next/router';
import axios from 'axios';

export interface LogInResponse {
  message: string;
  token?: string;
}

export interface UserContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  email: string | null;
  userId: string | null;
  login(loginSate: yup.Shape<object | undefined, LogInStateProps>): void;
  logout(): void;
}

const contextDefaultValues: UserContextProps = {
  isAuthenticated: false,
  loading: false,
  email: null,
  userId: null,
  login: () => {},
  logout: () => {}
};

export interface UserResponseProps {
  email: string;
  userId: string;
  iat: number;
  exp: number;
}

const AuthContext: React.Context<UserContextProps> = createContext<
  UserContextProps
>(contextDefaultValues);

interface OwnProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<OwnProps> = ({ children }) => {
  let storedUser: UserResponseProps | null = null;
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const router: NextRouter = useRouter();

  if (cookies[TOKEN_COOKIE]) {
    storedUser = jwtDecode(cookies[TOKEN_COOKIE]);
  }
  const [user, setUser] = useState<UserResponseProps | null>(storedUser);

  const login = async (loginState: LogInStateProps): Promise<void> => {
    setLoading(true);
    try {
      const response = await request(
        METHODS.POST,
        `${API_URL}/login`,
        axios.CancelToken.source(),
        {
          data: loginState
        }
      );

      const { token }: LogInResponse = response;
      if (token) {
        const userResponse: UserResponseProps = jwtDecode(token);

        setUser(userResponse);
        setCookie(TOKEN_COOKIE, token, {
          expires: new Date(userResponse.exp * 1000)
        });
        router.push('/projects');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    removeCookie(TOKEN_COOKIE);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
        userId: user?.userId || null,
        email: user?.email || null,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth(): UserContextProps {
  const context: UserContextProps = useContext<UserContextProps>(AuthContext);

  return context;
}
