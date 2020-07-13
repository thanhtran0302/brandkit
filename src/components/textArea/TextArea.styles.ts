import styled, { css } from 'styled-components';
import radius from '../../constants/radius';
import colors from '../../constants/colors';
import spacing from '../../constants/spacing';
import font from '../../constants/font';
import { IOwnProps } from './TextArea';

export const Layout = styled.div`
  width: 100%;
`;

export const TextAreaLayout = styled.textarea<Partial<IOwnProps>>`
  width: 100%;
  height: 150px;
  border-radius: ${radius.big};
  padding-top: ${spacing[8]};
  padding-left: ${spacing[8]};
  font-size: ${font[14]};
  transition: 0.5s;

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
  }
`;
