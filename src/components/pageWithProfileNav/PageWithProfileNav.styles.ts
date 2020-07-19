import styled, { css } from 'styled-components';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import font from '../../constants/font';
import { IOwnProps } from './PageWithProfileNav';

type StyleProps = Pick<IOwnProps, 'hasContainer'>;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[24]} ${spacing[56]};
  background: white;

  svg {
    cursor: pointer;
    width: ${spacing[32]};
    height: ${spacing[32]};
  }
`;

export const SiteHomePage = styled.div`
  font-size: ${font[24]};
  line-height: ${spacing[32]};
  color: ${colors.dark.base};
`;

export const Container = styled.div<StyleProps>`
  height: calc(100% - 84px);
  ${({ hasContainer }: StyleProps) =>
    hasContainer &&
    css`
      padding: ${spacing[32]} ${spacing[56]} 0 ${spacing[56]};
    `}
`;

export const MenuContainer = styled.div`
  position: relative;
`;
