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

export interface IOwnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonTypes;
  appearance: ButtonAppearance;
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
  label?: string;
  icon?: ReactElement<Element>;
  iconPosition?: ButtonIconPosition;
  width?: string;
}

const Button: FC<IOwnProps> = ({ icon, label, type, onClick, ...rest }) => (
  <ButtonLayout
    data-test={`button-${rest.appearance}`}
    type={type}
    onClick={onClick}
    {...rest}
  >
    {icon && <div data-test="button-icon">{icon}</div>}
    {label && <div data-test="button-label">{label}</div>}
  </ButtonLayout>
);

export default Button;
