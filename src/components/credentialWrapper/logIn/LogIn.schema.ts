import * as yup from 'yup';
import { ILogInStateProps } from './LogIn';

export function getLogInSchema(
  emailMsg: string,
  passwordMsg: string
): yup.ObjectSchema<yup.Shape<object | undefined, ILogInStateProps>> {
  return yup.object().shape({
    email: yup.string().required(emailMsg).email(),
    password: yup.string().min(8).required(passwordMsg)
  });
}
