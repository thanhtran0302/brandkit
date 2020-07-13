import styled from 'styled-components';
import spacing from '../../constants/spacing';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  grid-gap: ${spacing[24]};
  margin-top: ${spacing[32]};
`;
