import styled, { css } from 'styled-components';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

interface ILayoutProps {
  isSelected: boolean;
}

export const Layout = styled.div<ILayoutProps>`
  padding: ${spacing[8]} ${spacing[32]};

  ${({ isSelected }: ILayoutProps) =>
    isSelected
      ? css`
          background: ${colors.background};
          font-weight: bold;
        `
      : css`
          background: white;
          font-weight: normal;
        `}
`;
