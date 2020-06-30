import React, { FC } from 'react';
import Loader from '../loader/Loader';
import {
  Layout,
  BaseWidthLayout,
  CloseWrapper,
  FormLayout
} from './CredentialWrapper.styles';
import { SITE_URL } from '../../constants/global';
import Close from '../../assets/icons/close.svg';

export interface IOwnProps {
  isLoading: boolean;
}

const CredentialWrapper: FC<IOwnProps> = ({ isLoading, children }) => (
  <Layout>
    {isLoading && <Loader />}
    <CloseWrapper>
      <a href={SITE_URL}>
        <Close />
      </a>
    </CloseWrapper>
    <BaseWidthLayout>
      <FormLayout>{children}</FormLayout>
    </BaseWidthLayout>
  </Layout>
);

export default CredentialWrapper;
