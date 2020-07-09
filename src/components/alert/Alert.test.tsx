import React from 'react';
import { mount } from 'enzyme';
import Alert, { IOwnProps, AlertAppearance } from './Alert';

const defaultProps: IOwnProps = {
  text: 'Alert',
  appearance: AlertAppearance.INFO
};

describe('Alert component', () => {
  it('should render default elements', () => {
    const wrapper = mount(<Alert {...defaultProps} />);

    expect(
      wrapper.find(`div[data-test="alert-${defaultProps.appearance}"]`)
    ).toHaveLength(1);
    expect(
      wrapper.find(`div[data-test="alert-${defaultProps.appearance}"]`).text()
    ).toEqual('Alert');
    expect(wrapper.find('[data-test="close"]')).toHaveLength(0);
    expect(wrapper.find('p[data-test="alert-title"]')).toHaveLength(0);
  });

  it('should render title', () => {
    const props: IOwnProps = {
      ...defaultProps,
      title: 'Alert title'
    };
    const wrapper = mount(<Alert {...props} />);

    expect(wrapper.find('p[data-test="alert-title"]')).toHaveLength(1);
  });

  it('should render close icon', () => {
    const props: IOwnProps = {
      ...defaultProps,
      closable: true
    };
    const wrapper = mount(<Alert {...props} />);

    expect(wrapper.find('[data-test="alert-close"]')).toHaveLength(1);
  });
});
