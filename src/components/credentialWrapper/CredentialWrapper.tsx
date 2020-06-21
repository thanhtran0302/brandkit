import React, { FC, Fragment } from 'react';
import Loader from '../loader/Loader';
import { CloseWrapper, FormLayout } from './CredentialWrapper.styles';
import { SITE_URL } from '../../constants/global';
import Close from '../../assets/icons/close.svg';
import { BaseWidthLayout } from '../../utils/styles';

export interface OwnProps {
  isLoading: boolean;
}

const CredentialWrapper: FC<OwnProps> = ({ isLoading, children }) => (
  <Fragment>
    {isLoading && <Loader />}
    <CloseWrapper>
      <a href={SITE_URL}>
        <Close />
      </a>
    </CloseWrapper>
    <BaseWidthLayout>
      <FormLayout>{children}</FormLayout>
    </BaseWidthLayout>
  </Fragment>
);

export default CredentialWrapper;
