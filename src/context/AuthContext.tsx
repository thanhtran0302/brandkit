import React, { createContext, useState, useContext, FC } from 'react';
import { ILogInStateProps } from '../components/credentialWrapper/logIn/LogIn';
import { API_URL, TOKEN_COOKIE } from '../constants/global';
import { METHODS, request, extractAxiosErrorResponse } from '../utils/http';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import * as yup from 'yup';
import { useRouter, NextRouter } from 'next/router';
import axios from 'axios';

export interface ILogInResponse {
  message: string;
  token?: string;
}

export interface IUserContextProps {
  isAuthenticated: boolean;
  loading: boolean;
  email: string | null;
  userId: string | null;
  errors: string | null;
  login(loginSate: yup.Shape<object | undefined, ILogInStateProps>): void;
  logout(): void;
}

const contextDefaultValues: IUserContextProps = {
  isAuthenticated: false,
  loading: false,
  email: null,
  userId: null,
  errors: null,
  login: () => {},
  logout: () => {}
};

export interface IUserResponseProps {
  email: string;
  userId: string;
  iat: number;
  exp: number;
}

const AuthContext: React.Context<IUserContextProps> = createContext<
  IUserContextProps
>(contextDefaultValues);

interface IOwnProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<IOwnProps> = ({ children }) => {
  let storedUser: IUserResponseProps | null = null;
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [errors, setErrors] = useState<string | null>(null);
  const router: NextRouter = useRouter();

  if (cookies[TOKEN_COOKIE]) {
    storedUser = jwtDecode(cookies[TOKEN_COOKIE]);
  }
  const [user, setUser] = useState<IUserResponseProps | null>(storedUser);

  const login = async (loginState: ILogInStateProps): Promise<void> => {
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

      const { token }: ILogInResponse = response;
      if (token) {
        const userResponse: IUserResponseProps = jwtDecode(token);

        setUser(userResponse);
        setCookie(TOKEN_COOKIE, token, {
          expires: new Date(userResponse.exp * 1000)
        });
        router.push('/projects');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrors(extractAxiosErrorResponse(error));
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
        errors,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth(): IUserContextProps {
  const context: IUserContextProps = useContext<IUserContextProps>(AuthContext);

  return context;
}
