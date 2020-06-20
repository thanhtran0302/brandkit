import styled, { css } from 'styled-components';

import colors from '../../constants/colors';
import spacing from '../../constants/spacing';
import radius from '../../constants/radius';

export const loaderAnimation = css`
  animation: loader-spin 1s infinite linear;

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.7);
`;

export const LoaderRing = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.2);
  border-left-color: ${colors.bittersweet};
  border-radius: ${radius.rounded};
  width: 100px;
  height: 100px;

  ${loaderAnimation}
`;

export const LoaderRingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 300px;
  transform: translate(-50%, -50%);
`;

export const LoaderTextLayout = styled.div`
  font-size: ${spacing[16]};
  color: ${colors.dark[80]};
  margin-top: ${spacing[16]};
`;
