import React, { FC, useState } from 'react';
import {
  AlertTextContainer,
  Layout,
  AlertContent,
  AlertText,
  AlertTitle
} from './Alert.styles';
import Close from '../../assets/icons/close.svg';

export enum AlertAppearance {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export interface IOwnProps {
  text: string;
  appearance: AlertAppearance;
  closable?: boolean;
  title?: string;
}

const Alert: FC<IOwnProps> = ({ title, appearance, text, closable }) => {
  const [isClose, setClose] = useState<boolean>(false);

  return (
    <Layout
      data-test={`alert-${appearance}`}
      appearance={appearance}
      isClose={isClose}
    >
      <AlertContent>
        <AlertTextContainer>
          {title && <AlertTitle data-test="alert-title">{title}</AlertTitle>}
          <AlertText>{text}</AlertText>
        </AlertTextContainer>
        {closable && (
          <Close data-test="alert-close" onClick={() => setClose(true)} />
        )}
      </AlertContent>
    </Layout>
  );
};

export default Alert;
