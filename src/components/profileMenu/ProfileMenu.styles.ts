import styled from 'styled-components';
import spacing from '../../constants/spacing';
import shadows from '../../constants/shadows';
import colors from '../../constants/colors';
import radius from '../../constants/radius';

export const Layout = styled.div`
  position: absolute;
  width: 200px;
  right: ${spacing[4]};
  padding: ${spacing[16]};
  box-shadow: ${shadows.level2};
  background: white;
  border-radius: ${radius.normal};
`;

export const Link = styled.a`
  color: ${colors.bittersweet.base};
  cursor: pointer;
`;
