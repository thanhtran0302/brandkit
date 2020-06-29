import styled from 'styled-components';
import colors from '../../constants/colors';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${colors.dark.base};
`;

export const ProjectHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
