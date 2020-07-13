import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import radius from '../../constants/radius';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import shadows from '../../constants/shadows';

import { IOwnProps, ButtonAppearance, ButtonIconPosition } from './Button';
import font from '../../constants/font';

type ButtonLayoutProps = Pick<
  IOwnProps,
  'appearance' | 'iconPosition' | 'width'
>;

export const commonStyle: FlattenSimpleInterpolation = css`
  transition: background-color 0.2s ease-in, border 0.2s ease-in,
    color 0.2s ease-in;

  :disabled {
    color: ${colors.dark[60]};
    background: ${colors.grey[60]};
    border: 2px solid ${colors.grey[40]};
    cursor: not-allowed;
  }
`;

export const primaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  border: 2px solid ${colors.dark.base};
  color: ${colors.dark.base};
  background: transparent;

  svg {
    path {
      fill: ${colors.dark.base};
    }
  }

  :hover {
    background: ${colors.dark.base};
    color: white;

    svg {
      path {
        fill: white;
      }
    }
  }
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  color: ${colors.dark[60]};
  background: white;
  border: 2px solid ${colors.dark[40]};

  svg {
    path {
      fill: ${colors.dark[60]};
    }
  }

  :hover {
    color: ${colors.dark.base};
    border: 2px solid ${colors.dark.base};

    path {
      fill: ${colors.dark.base};

      :hover {
        fill: ${colors.dark.base};
        transition: 0.5s;
      }
    }
  }

  :active {
    border: 2px solid ${colors.dark[60]};
  }
`;

const pickButtonStyle = (
  appearance: ButtonAppearance
): FlattenSimpleInterpolation => {
  switch (appearance) {
    case ButtonAppearance.PRIMARY:
      return primaryStyle;
    case ButtonAppearance.SECONDARY:
      return secondaryStyle;
    default:
      return primaryStyle;
  }
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  display: flex;
  align-items: center;
  border: 0;
  text-align: left;
  border-radius: ${radius.big};
  font-size: ${font[14]};
  line-height: ${spacing[20]};
  font-weight: bold;
  height: ${spacing[48]};
  padding: ${spacing[4]} ${spacing[24]};
  cursor: pointer;

  ${(props: ButtonLayoutProps) =>
    css`
      width: ${props.width};
    `}

  ${(props: Pick<ButtonLayoutProps, 'iconPosition'>) =>
    props.iconPosition === ButtonIconPosition.LEFT
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: row-reverse;
        `}

  svg {
    width: 32px;
    height: 32px;

    ${(props: Pick<ButtonLayoutProps, 'iconPosition'>) =>
      props.iconPosition === ButtonIconPosition.LEFT
        ? css`
            margin-right: ${spacing[8]};
          `
        : css`
            margin-left: ${spacing[8]};
          `}
  }

  :not(:disabled) {
    box-shadow: ${shadows.level1};
  }

  :active {
    box-shadow: unset;
  }

  :active,
  :focus {
    outline: none;
  }

  ${({ appearance }: Pick<ButtonLayoutProps, 'appearance'>) =>
    pickButtonStyle(appearance)}
`;
