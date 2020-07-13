import React, { FC, ChangeEvent, TextareaHTMLAttributes } from 'react';
import { Layout, TextAreaLayout } from './TextArea.styles';
import { Label } from '../input/Input.styles';

export interface IOwnProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  onChange?(event: ChangeEvent<HTMLTextAreaElement>): void;
  value?: string;
  placeholder?: string;
  hasError?: boolean;
  dataTest?: string;
}

const TextArea: FC<IOwnProps> = ({
  hasError,
  id,
  label,
  placeholder,
  value,
  onChange,
  dataTest,
  ...rest
}) => (
  <Layout>
    <Label for={id}>{label}</Label>
    <TextAreaLayout
      data-test={dataTest ? dataTest : `text-area-${id}`}
      id={id}
      hasError={hasError}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    >
      {value}
    </TextAreaLayout>
  </Layout>
);

export default TextArea;
