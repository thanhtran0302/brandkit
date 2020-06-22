import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import { Layout, InputLayout, Label } from './Input.styles';

export enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  TEL = 'tel',
  NUMBER = 'number',
  EMAIL = 'email'
}

export interface OwnProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: InputTypes;
  value?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  hasError?: boolean;
}

const Input: FC<OwnProps> = ({ value, label, id, ...rest }) => (
  <Layout>
    <Label htmlFor={id}>{label}</Label>
    <InputLayout id={id} {...rest} />
  </Layout>
);

export default Input;
