import React from 'react';
import { mount } from 'enzyme';
import Parent from './stateful';
import Child from './stateless';

describe('Parent component', () => {
  let component;
  describe('parent component', () => {

    beforeEach(() => {
      component = mount(<Parent />);
    });

    test('renders one child component', () => {
      expect(component.find(Child).length).toBe(1);
    });

    test('renders one button', () => {
      expect(component.find('button').length).toBe(1);
    });

    test('has correct initial state', () => {
      const state = component.state();
      expect(state).toEqual({
        n: 0
      });
    });

    describe('when clicking on the button', () => {
      let button;
      beforeEach(() => {
        button = component.find('button');
      });

      test('updates the state', () => {
        const oldState = component.state();
        button.simulate('click');
        const newState = component.state();
        expect(newState.n).toBe(oldState.n+1);
      });

      test('updates the text of child component', () => {
        const oldProps = component.find(Child).props();
        button.simulate('click');
        const newProps = component.find(Child).props();
        expect(newProps.n).toBe(oldProps.n+1);
      });
    });
  });
});