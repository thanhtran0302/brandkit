import { unixTimestamp } from './time';

export interface IYupValidationErrors<T> {
  errors: string[];
  message: string;
  inner: IYupValidationErrors<T>[];
  name: string;
  path: string | undefined;
  type: string | undefined;
  value: T;
}

export interface IDictionary {
  [key: string]: string;
}

export function extractYupErrors<T>(validations: IYupValidationErrors<T>): T {
  const errors: IDictionary = {};

  validations.inner.forEach((validation: IYupValidationErrors<T>) => {
    if (validation.path) {
      errors[validation.path] = 'error';
    }
  });
  return (errors as unknown) as T;
}

export const isExpiredToken = (date: number): boolean =>
  date < unixTimestamp(Date.now());
