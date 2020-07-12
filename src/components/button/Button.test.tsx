import React from 'react';
import Button, { IOwnProps, ButtonTypes, ButtonAppearance } from './Button';
import { mount } from 'enzyme';
import Close from '../../assets/icons/close.svg';

const defaultProps: IOwnProps = {
  type: ButtonTypes.BUTTON,
  appearance: ButtonAppearance.PRIMARY,
  onClick: jest.fn()
};

describe('Button component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render default elements', () => {
    const wrapper = mount(<Button {...defaultProps} />);

    expect(
      wrapper.find(`button[data-test="button-${defaultProps.appearance}"]`)
    ).toHaveLength(1);
  });

  it('should render label', () => {
    const props: IOwnProps = {
      ...defaultProps,
      label: 'Button'
    };
    const wrapper = mount(<Button {...props} />);

    expect(wrapper.find('[data-test="button-label"]')).toHaveLength(1);
  });

  it.skip('should render icon', () => {
    const props: IOwnProps = {
      ...defaultProps,
      icon: <Close />
    };
    const wrapper = mount(<Button {...props} />);

    expect(wrapper.find('[data-test="button-icon"]')).toHaveLength(1);
  });

  it('should call function onClick', () => {
    const wrapper = mount(<Button {...defaultProps} />);

    wrapper.find(Button).simulate('click');
    expect(defaultProps.onClick).toBeCalled();
  });
});
