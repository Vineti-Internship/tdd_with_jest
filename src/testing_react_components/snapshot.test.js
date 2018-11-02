import React from 'react';
import { mount, shallow } from 'enzyme';
import Parent from './stateful';

describe('A component', () => {
  let component;
  describe('parent component', () => {
    // With enzyme
    test('renders one child component', () => {});
    test('renders one button', () => {});

    test('matches snapshot', () => {
      component = mount(<Parent />);
      expect(component).toMatchSnapshot();
    });

    test('matches snapshot', () => {
      component = shallow(<Parent />);
      expect(component).toMatchSnapshot();
    });
  });
});