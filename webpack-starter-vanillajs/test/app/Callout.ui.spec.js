import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Callout from '../../src/app/Callout';

describe('Callout', () => {
  it('should create callout element', () => {
    const component = renderer.create(<Callout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should contain h5', () => {
    const component = shallow(<Callout />);
    const h5Text = component.find('h5').text();
    expect(h5Text).toEqual('Webpack Starter');
  });
});
