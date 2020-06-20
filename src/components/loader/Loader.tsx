import React, { FC } from 'react';

import {
  LoaderContainer,
  LoaderRing,
  LoaderRingContainer,
  LoaderTextLayout
} from './Loader.styles';

export interface LoaderProps {
  text?: string;
}

const Loader: FC<LoaderProps> = ({ text }) => (
  <LoaderContainer>
    <LoaderRingContainer>
      <LoaderRing />
      {text && <LoaderTextLayout>{text}</LoaderTextLayout>}
    </LoaderRingContainer>
  </LoaderContainer>
);

export default Loader;
