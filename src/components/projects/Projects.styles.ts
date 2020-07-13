import styled from 'styled-components';
import spacing from '../../constants/spacing';
import font from '../../constants/font';
import colors from '../../constants/colors';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  grid-gap: ${spacing[24]};
  margin-top: ${spacing[32]};
`;

export const NoProjectsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: ${font[32]};
  color: ${colors.dark[80]};
`;

export const NewProjectCTA = styled.span`
  text-decoration: underline;
  cursor: pointer;
  fontweight: bold;

  :hover {
    color: ${colors.dark.base};
  }
`;
