import React from 'react';
import { mount } from 'enzyme';
import CredentialWrapper, { IOwnProps } from './CredentialWrapper';
import Loader from '../loader/Loader';
import { BaseWidthLayout } from './CredentialWrapper.styles';

const defaultProps: IOwnProps = {
  isLoading: false
};

describe('CredentialWrapper component', () => {
  it('should render default elements', () => {
    const wrapper = mount(<CredentialWrapper {...defaultProps} />);

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find('[data-test="link-to-home"]')).toHaveLength(1);
    expect(wrapper.find(BaseWidthLayout)).toHaveLength(1);
  });

  it('should render loader', () => {
    const wrapper = mount(<CredentialWrapper isLoading={true} />);

    expect(wrapper.find(Loader)).toHaveLength(1);
  });
});
