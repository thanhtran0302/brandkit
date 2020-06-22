import React, { createContext, useState, useContext, FC } from 'react';
import { LogInStateProps } from '../components/credentialWrapper/logIn/LogIn';
import { API_URL, TOKEN_COOKIE } from '../constants/global';
import { METHODS } from '../utils/http';
import jwtDecode from 'jwt-decode';
import { useCookies } from 'react-cookie';
import * as yup from 'yup';
import { useRouter } from 'next/router';
