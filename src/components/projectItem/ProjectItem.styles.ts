import styled from 'styled-components';
import colors from '../../constants/colors';
import spacing from '../../constants/spacing';
import radius from '../../constants/radius';
import font from '../../constants/font';

export const Layout = styled.div`
  border-radius: ${radius.big};
  border: 2px solid ${colors.dark[40]};
  background: ${colors.grey[20]};

  :hover {
    border: 2px solid ${colors.dark.base};
    transition: 0.5s;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  height: 75%;
  font-size: ${font[32]};
  font-weight: bold;
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${spacing[12]};
  font-size: ${font[14]};
  background: white;
  border-radius: ${radius.big};
  height: 25%;
  box-shadow: 0px 1px 4px ${colors.grey[80]};
`;
