import styled, { css } from 'styled-components';
import spacing from '../../../constants/spacing';
import colors from '../../../constants/colors';

interface ILayoutProps {
  isSelected: boolean;
}

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const ItemNameContainer = styled.div<ILayoutProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[8]} ${spacing[20]};
  width: 100%;

  ${({ isSelected }: ILayoutProps) =>
    isSelected
      ? css`
          font-weight: bold;
          background: ${colors.background};
        `
      : css`
          font-weight: normal;
          background: white;
        `}
`;

export const ChildrenContainer = styled.div``;
