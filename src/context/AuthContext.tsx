import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  FC
} from 'react';
import { LogInStateProps } from '../components/credentialWrapper/logIn/LogIn';
import { API_URL, TOKEN_COOKIE } from '../constants/global';
import { METHODS } from '../utils/http';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import * as yup from 'yup';

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

const AuthContext = createContext<UserContextProps>(contextDefaultValues);

interface OwnProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<OwnProps> = ({ children }) => {
  const [user, setUser] = useState<UserResponseProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    if (cookies[TOKEN_COOKIE]) {
      const userResponse: UserResponseProps = jwtDecode(cookies[TOKEN_COOKIE]);

      setUser(userResponse);
    }
  }, []);

  const login = async (loginState: LogInStateProps): Promise<void> => {
    setLoading(true);
    try {
      const response: Response = await fetch(`${API_URL}/login`, {
        method: METHODS.POST,
        body: JSON.stringify(loginState),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const { token }: LogInResponse = await response.json();

      if (token) {
        const userResponse: UserResponseProps = jwtDecode(token);

        setUser(userResponse);
        setCookie(TOKEN_COOKIE, token, {
          expires: new Date(userResponse.exp * 1000)
        });
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
    window.location.pathname = '/login';
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

export default function useAuth() {
  const context: UserContextProps = useContext<UserContextProps>(AuthContext);

  return context;
}
