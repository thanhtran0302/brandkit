import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import shadows from '../../constants/shadows';
import spacing from '../../constants/spacing';

const backgroundFadeIn = keyframes`
  from {
    background: ${transparentize(1, colors.dark.base)};
  }
  to {
    background: ${transparentize(0.2, colors.dark.base)};
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: ${radius.normal};
  box-shadow: ${shadows.level2};
  padding: ${spacing[8]};
  z-index: 11;

  svg {
    width: ${spacing[24]};
    height: ${spacing[24]};
    cursor: pointer;

    path {
      fill: ${colors.grey[80]};
    }

    :hover {
      path {
        transition: 0.5s;
        fill: ${colors.grey.base};
      }
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${transparentize(0.2, colors.dark.base)};
  cursor: pointer;
  animation: ${backgroundFadeIn} 0.2s linear;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ModalContent = styled.div`
  padding: ${spacing[16]};
`;

export const ModalTitle = styled.h2`
  text-align: center;
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-weight: 400;
`;