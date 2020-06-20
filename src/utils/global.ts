export interface YupValidationErrors<T> {
  errors: string[];
  message: string;
  inner: YupValidationErrors<T>[];
  name: string;
  path: string | undefined;
  type: string | undefined;
  value: T;
}

export interface Dictionary {
  [key: string]: string;
}

export function extractYupErrors<T>(validations: YupValidationErrors<T>) {
  const errors: Dictionary = {};

  validations.inner.forEach((validation: YupValidationErrors<T>) => {
    if (validation.path) {
      errors[validation.path] = 'error';
    }
  });
  return errors;
}
