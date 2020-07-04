import React from 'react';
import LogIn from './LogIn';
import { mount } from 'enzyme';
import { ButtonAppearance } from '../../button/Button';

describe('LogIn component', () => {
  it('should render default elements', () => {
    const wrapper = mount(<LogIn />);

    expect(wrapper.find('div[data-test="input-email-login"]')).toHaveLength(1);
    expect(wrapper.find('div[data-test="input-password-login"]')).toHaveLength(
      1
    );
    expect(
      wrapper.find(`button[data-test="button-${ButtonAppearance.PRIMARY}"]`)
    ).toHaveLength(1);
    expect(wrapper.find('a[data-test="forgot-password"]')).toHaveLength(1);
    expect(wrapper.find('a[data-test="signup"]')).toHaveLength(1);
  });

  it('should fill e-mail and password', () => {
    const wrapper = mount(<LogIn />);
    const email = wrapper.find('div[data-test="input-email-login"] input');

    email.simulate('change', {
      target: { value: 'thanh@brand.io' }
    });
    console.log(email.props());
  });
});
