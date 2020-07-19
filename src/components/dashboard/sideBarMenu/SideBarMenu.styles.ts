import styled from 'styled-components';
import spacing from '../../../constants/spacing';
import font from '../../../constants/font';
import radius from '../../../constants/radius';

const MENU_WIDTH: string = '250px';

export const Layout = styled.div`
  width: ${MENU_WIDTH};
  max-width: ${MENU_WIDTH};
  height: 100%;
`;

export const ProjectNameContainer = styled.div`
  width: 100%;
  height: ${spacing[56]};
  border-bottom-right-radius: ${radius.big};
  border-bottom-left-radius: ${radius.big};
  font-weight: bold;
  font-size: ${font[20]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideMenuContainer = styled.div`
  width: 100%;
  height: calc(100% - ${spacing[56]} - ${spacing[32]});
  overflow: scroll;
  position: relative;
`;

export const BackToProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
