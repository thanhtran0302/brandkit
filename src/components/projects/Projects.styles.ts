import styled from 'styled-components';
import colors from '../../constants/colors';
import spacing from '../../constants/spacing';

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

export const ProjectContent = styled.div`
  margin-top: ${spacing[32]};
`;
