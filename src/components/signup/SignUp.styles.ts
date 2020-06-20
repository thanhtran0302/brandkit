import styled from 'styled-components';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import shadows from '../../constants/shadows';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing[24]};
`;

export const Separator = styled.div`
  width: 100%;
  border: 1px solid ${colors.dark[40]};
  margin: ${spacing[40]} 0;
  box-shadow: ${shadows.level2};
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: ${colors.dark.base};
  font-size: ${spacing[20]};
  line-height: ${spacing[24]};
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${spacing[24]} ${spacing[24]} 0 0;

  svg {
    width: ${spacing[32]};
    height: ${spacing[32]};

    path {
      fill: #ab9a16;
    }
  }
`;

export const InputError = styled.p`
  margin-top: ${spacing[8]};
  color: ${colors.error};
`;

export const InputWithError = styled.div`
  & + & {
    margin-top: ${spacing[24]};
  }
`;
