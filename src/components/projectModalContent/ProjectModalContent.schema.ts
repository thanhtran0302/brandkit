import * as yup from 'yup';
import { StateProps } from './ProjectModalContent';

export function getCreateProjectSchema(
  nameMsg: string
): yup.ObjectSchema<yup.Shape<object | undefined, StateProps>> {
  return yup.object().shape({
    name: yup.string().required(nameMsg),
    description: yup.string().required(nameMsg)
  });
}
