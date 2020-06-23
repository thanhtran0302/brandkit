import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import radius from '../../constants/radius';
import spacing from '../../constants/spacing';
import colors from '../../constants/colors';
import shadows from '../../constants/shadows';

import { OwnProps, ButtonAppearance, ButtonIconPosition } from './Button';

type ButtonLayoutProps = Pick<
  OwnProps,
  'appearance' | 'iconPosition' | 'width'
>;

export const commonStyle: FlattenSimpleInterpolation = css`
  border: 2px solid transparent;
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
  color: white;
  background: ${colors.dark.base};

  svg {
    path {
      fill: white;
    }
  }

  :active {
    border: 2px solid ${colors.dark[40]};
  }
`;

export const secondaryStyle: FlattenSimpleInterpolation = css`
  ${commonStyle};
  color: ${colors.dark[60]};
  background: white;
  border: 2px solid ${colors.grey.base};

  svg {
    path {
      fill: ${colors.dark[60]};
    }
  }

  :hover {
    color: ${colors.bittersweet.base};

    path {
      fill: ${colors.bittersweet.base};

      :hover {
        fill: ${colors.bittersweet.base};
        transition: 0.5s;
      }
    }
  }

  :active {
    border: 2px solid ${colors.bittersweet.base};
  }
`;

export const redStyle: FlattenSimpleInterpolation = css`
  ${commonStyle}
  color: ${colors.cream};
  background: ${colors.bittersweet.base};

  svg {
    path {
      fill: ${colors.cream};
    }
  }

  :hover {
    border: 2px solid ${colors.bittersweet[60]}
  }

  :active {
    border: 2px solid ${colors.bittersweet[40]};
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
    case ButtonAppearance.RED:
      return redStyle;
    default:
      return primaryStyle;
  }
};

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  display: flex;
  align-items: center;
  border: 0;
  text-align: left;
  border-radius: ${radius.button};
  font-size: ${spacing[16]};
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
