import styled, { FlattenSimpleInterpolation, css } from 'styled-components';
import colors from '../../constants/colors';
import spacing from '../../constants/spacing';
import radius from '../../constants/radius';
import { AlertAppearance, OwnProps } from './Alert';

type AlertTypes = Pick<OwnProps, 'appearance'>;

interface AlertProps extends AlertTypes {
  isClose: boolean;
}

const successStyle: FlattenSimpleInterpolation = css`
  background: ${colors.turquoise[20]};
  border: 1px solid ${colors.turquoise.base};
`;

const infoStyle: FlattenSimpleInterpolation = css`
  background: ${colors.blue[20]};
  border: 1px solid ${colors.blue.base};
`;

const warningStyle: FlattenSimpleInterpolation = css`
  background: ${colors.orange[20]};
  border: 1px solid ${colors.orange.base};
`;

const errorStyle: FlattenSimpleInterpolation = css`
  background: ${colors.error[20]};
  border: 1px solid ${colors.error.base};
`;

const pickAlertStyle = (
  appearance: AlertAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case AlertAppearance.SUCCESS:
      return successStyle;
    case AlertAppearance.INFO:
      return infoStyle;
    case AlertAppearance.WARNING:
      return warningStyle;
    case AlertAppearance.ERROR:
      return errorStyle;
    default:
      return successStyle;
  }
};

export const Layout = styled.div<AlertProps>`
  ${({ isClose }: AlertProps) =>
    isClose
      ? css`
          display: none;
        `
      : 'display: inline-block;'}

  border-radius: ${radius.normal};
  padding: ${spacing[8]};
  color: ${colors.dark.base};
  width: 100%;

  svg {
    cursor: pointer;
    width: ${spacing[16]};
    height: ${spacing[16]};

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

  ${({ appearance }: Pick<OwnProps, 'appearance'>) =>
    pickAlertStyle(appearance)}
`;

export const AlertText = styled.span`
  display: inline-block;
  margin-right: ${spacing[8]};
`;

export const AlertTextContainer = styled.div``;

export const AlertTitle = styled.p`
  font-size: ${spacing[20]};
  font-weight: bold;
  margin-bottom: ${spacing[8]};
`;

export const AlertContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
