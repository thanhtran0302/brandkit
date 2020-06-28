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

export interface OwnProps {
  text: string;
  appearance: AlertAppearance;
  closable?: boolean;
  title?: string;
}

const Alert: FC<OwnProps> = ({ title, appearance, text, closable }) => {
  const [isClose, setClose] = useState<boolean>(false);

  return (
    <Layout appearance={appearance} isClose={isClose}>
      <AlertContent>
        <AlertTextContainer>
          {title && <AlertTitle>{title}</AlertTitle>}
          <AlertText>{text}</AlertText>
        </AlertTextContainer>
        {closable && <Close onClick={() => setClose(true)} />}
      </AlertContent>
    </Layout>
  );
};

export default Alert;
