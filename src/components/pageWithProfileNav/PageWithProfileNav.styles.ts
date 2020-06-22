import styled from 'styled-components';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing[24]} ${spacing[56]};
  background: ${colors.yellow.base};

  svg {
    width: ${spacing[40]};
    height: ${spacing[40]};
    cursor: pointer;
  }
`;

export const SiteHomePage = styled.div`
  font-size: ${spacing[24]};
  line-height: ${spacing[32]};
  color: ${colors.dark.base};
`;

export const Container = styled.div`
  padding: ${spacing[32]} ${spacing[56]} 0 ${spacing[56]};
`;

export const MenuContainer = styled.div`
  position: relative;
`;
