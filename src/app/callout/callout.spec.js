import React from 'react';
import Callout from './index';

uiTest('callout ', () => {
  it('should contain a header', () => {
    const wrapper = shallow(<Callout />);
    expect(wrapper.find('h5')).to.exist;
  });
  it('should contain a paragraph', () => {
    const wrapper = shallow(<Callout />);
    expect(wrapper.find('p')).to.exist;
  });
});
