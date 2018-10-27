import React from 'react';
import { shallow } from 'enzyme';
import {Child} from './a';

describe('A component', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Child n={1} />);
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