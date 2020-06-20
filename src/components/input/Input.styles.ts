import styled from 'styled-components';
import colors from '../../constants/colors';
import radius from '../../constants/radius';
import spacing from '../../constants/spacing';
import shadows from '../../constants/shadows';

export const Layout = styled.div`
  position: relative;

  & + & {
    margin-top: 24px;
  }

  svg {
    height: 40px;
    width: 40px;
    position: absolute;
    right: ${spacing[4]};
    top: 35px;
  }
`;

export const InputLayout = styled.input`
  outline: none;
  width: 100%;
  height: ${spacing[56]};
  font-size: ${spacing[16]};
  line-height: ${spacing[24]};
  border: 1px solid ${colors.grey[60]};
  border-radius: ${radius.normal};
  box-shadow: ${shadows.level1};
  box-sizing: border-box;
  background: white;
  color: ${colors.dark.base};
  padding: 0px ${spacing[16]};

  ::placeholder {
    color: ${colors.dark[60]};
  }

  :focus {
    border: 1px solid ${colors.dark.base};
    transition: 0.5s;
  }
`;

export const Label = styled.label`
  display: inline-block;
  color: ${colors.dark.base};
  font-size: ${spacing[16]};
  margin-bottom: ${spacing[8]};
`;
