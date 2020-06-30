import React, { FC } from 'react';

import {
  LoaderContainer,
  LoaderRing,
  LoaderRingContainer,
  LoaderTextLayout
} from './Loader.styles';

export interface ILoaderProps {
  text?: string;
}

const Loader: FC<ILoaderProps> = ({ text }) => (
  <LoaderContainer>
    <LoaderRingContainer>
      <LoaderRing />
      {text && <LoaderTextLayout>{text}</LoaderTextLayout>}
    </LoaderRingContainer>
  </LoaderContainer>
);

export default Loader;
