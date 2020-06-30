import * as yup from 'yup';
import { IStateProps } from './ProjectModalContent';

export function getCreateProjectSchema(
  nameMsg: string
): yup.ObjectSchema<yup.Shape<object | undefined, IStateProps>> {
  return yup.object().shape({
    name: yup.string().required(nameMsg),
    description: yup.string().required(nameMsg)
  });
}
