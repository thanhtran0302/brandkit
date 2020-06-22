import React, {
  FC,
  MouseEvent,
  ButtonHTMLAttributes,
  ReactElement
} from 'react';
import { ButtonLayout } from './Button.styles';

export enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button'
}

export enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

export enum ButtonIconPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

export interface OwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes;
  appearance: ButtonAppearance;
  onClick(event: MouseEvent<HTMLButtonElement>): void;
  label?: string;
  icon?: ReactElement<Element>;
  iconPosition?: ButtonIconPosition;
  width?: string;
}

const Button: FC<OwnProps> = ({ icon, label, type, onClick, ...rest }) => (
  <ButtonLayout type={type} onClick={onClick} {...rest}>
    {icon && icon}
    {label}
  </ButtonLayout>
);

export default Button;
