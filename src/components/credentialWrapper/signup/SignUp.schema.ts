import * as yup from 'yup';
import { SignUpStateProps } from './SignUp';

export function getSignUpSchema(
  emailMsg: string,
  passwordMsg: string,
  confirmPasswordMsg: string
): yup.ObjectSchema<yup.Shape<object | undefined, SignUpStateProps>> {
  return yup.object().shape({
    email: yup.string().required(emailMsg).email(),
    password: yup.string().min(8).required(passwordMsg),
    confirm_password: yup.string().min(8).required(confirmPasswordMsg)
  });
}
