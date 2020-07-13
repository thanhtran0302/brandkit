import styled, { css } from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spacing from '../../constants/spacing';
import shadows from '../../constants/shadows';
import { IOwnProps } from './Input';
import font from '../../constants/font';

export const Layout = styled.div`
  position: relative;
`;

export const InputLayout = styled.input<Partial<IOwnProps>>`
  outline: none;
  width: 100%;
  height: ${spacing[56]};
  font-size: ${font[14]};
  line-height: ${spacing[24]};
  border-radius: ${radius.big};
  box-shadow: ${shadows.level1};
  box-sizing: border-box;
  background: white;
  color: ${colors.dark.base};
  padding: 0px ${spacing[16]};

  ${({ hasError }: Partial<IOwnProps>) =>
    hasError
      ? css`
          border: 2px solid ${colors.bittersweet.base};
        `
      : css`
          border: 2px solid ${colors.dark[40]};
        `}

  ::placeholder {
    color: ${colors.dark[60]};
  }

  :focus {
    ${({ hasError }: Partial<IOwnProps>) =>
      hasError
        ? css`
            border: 2px solid ${colors.bittersweet.base};
          `
        : css`
            border: 2px solid ${colors.dark.base};
          `}
    transition: 0.5s;
  }
`;

export const Label = styled.label`
  display: inline-block;
  color: ${colors.dark.base};
  font-size: ${font[14]};
  margin-bottom: ${spacing[8]};
`;
