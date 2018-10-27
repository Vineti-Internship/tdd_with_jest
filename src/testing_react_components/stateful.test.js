import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {Parent, Child} from './a';

describe('A component', () => {
  let component;
  describe('parent component', () => {
    // Without enzyme
    test('has correct init state', () => {
      component = renderer.create(<Parent />);
      const {state} = component.getInstance();
      expect(state).toEqual({n: 0});
    });

    test('updates state when calling clickHanlder', () => {
      component = renderer.create(<Parent />);
      const inst = component.getInstance();
      const oldState = {...inst.state};
      inst.clickHandler();
      const {state} = inst;
      expect(state.n).toBe(oldState.n + 1);
    });

    // With enzyme
    test('renders one child component', () => {
      component = mount(<Parent />);
      expect(component.find(Child).length).toBe(1);
    });

    test('renders one button', () => {
      component = mount(<Parent />);
      expect(component.find('button').length).toBe(1);
    });

    describe('when clicking on the button', () => {
      let button;
      beforeEach(() => {
        component = mount(<Parent />);
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