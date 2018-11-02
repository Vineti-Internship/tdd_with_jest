import React from 'react';
import { shallow } from 'enzyme';
import Component from './stateless';

describe('The Stateless component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Component n={1} />);
  });

  describe('child component', () => {
    test('renders a h1 tag', () => {
      expect(component.find('h1').length).toBe(1);
    });

    test('rednders correct text based on props', () => {
      expect(component.text()).toBe('1');
    });
  });
});