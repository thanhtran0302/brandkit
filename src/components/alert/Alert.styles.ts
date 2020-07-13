import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import colors from '../../constants/colors';
import spacing from '../../constants/spacing';
import radius from '../../constants/radius';
import font from '../../constants/font';
import { AlertAppearance, IOwnProps } from './Alert';

type AlertTypes = Pick<IOwnProps, 'appearance'>;

interface IAlertProps extends AlertTypes {
  isClose: boolean;
}

function genrateAlertStyle(
  bgColor: string,
  borderColor: string
): FlattenSimpleInterpolation {
  return css`
    background: ${bgColor};
    border: 1px solid ${borderColor};
  `;
}

const pickAlertStyle = (
  appearance: AlertAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case AlertAppearance.SUCCESS:
      return genrateAlertStyle(colors.turquoise[20], colors.turquoise.base);
    case AlertAppearance.INFO:
      return genrateAlertStyle(colors.blue[20], colors.blue.base);
    case AlertAppearance.WARNING:
      return genrateAlertStyle(colors.orange[20], colors.orange.base);
    case AlertAppearance.ERROR:
      return genrateAlertStyle(colors.error[20], colors.error.base);
    default:
      return genrateAlertStyle(colors.turquoise[20], colors.turquoise.base);
  }
};

export const Layout = styled.div<IAlertProps>`
  ${({ isClose }: IAlertProps) =>
    isClose
      ? css`
          display: none;
        `
      : 'display: inline-block;'}

  border-radius: ${radius.normal};
  padding: ${spacing[8]};
  margin: ${spacing[8]} 0;
  color: ${colors.dark.base};
  width: 100%;

  svg {
    cursor: pointer;

    path {
      fill: ${colors.dark[40]};
    }

    :hover {
      path {
        fill: ${colors.dark[60]};
        transition: 0.5s;
      }
    }
  }

  ${({ appearance }: Pick<IOwnProps, 'appearance'>) =>
    pickAlertStyle(appearance)}
`;

export const AlertText = styled.span`
  display: inline-block;
  margin-right: ${spacing[8]};
`;

export const AlertTextContainer = styled.div``;

export const AlertTitle = styled.p`
  font-size: ${font[20]};
  font-weight: bold;
  margin-bottom: ${spacing[8]};
`;

export const AlertContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
