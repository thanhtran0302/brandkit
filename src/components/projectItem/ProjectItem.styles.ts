import styled from 'styled-components';
import colors from '../../constants/colors';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${colors.grey[20]};
  cursor: pointer;
  color: ${colors.dark.base};
  background: #fff;

  :hover {
    background: ${colors.background};
    transition: 0.3s;
  }
`;

export const ProjectField = styled.div`
  width: calc(100% / 4);
  max-width: calc(100% / 4);
  display: flex;
  justify-content: center;
  align-items: center;
`;
