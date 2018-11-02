
import React from 'react';
import Component from './data';
import { Factory } from 'rosie';
import { shallow } from 'enzyme';

describe('The githubData component', () => {
  let component, user;

  beforeEach(() => {
    user = Factory.build('githubUser');
    component = shallow(<Component data={user} />);
  });

  test('renders user name with correct data', () => {
    const userNameField = component.find('.user_name');
    expect(userNameField.text()).toBe(`User Name: ${user.userName}`);
  });

  test('renders email with correct data', () => {
    const emailField = component.find('.email');
    expect(emailField.text()).toBe(`Email: ${user.email}`);
  });

  test('renders follower number with correct data', () => {
    const followerField = component.find('.followers');
    expect(followerField.text()).toBe(`Followers: ${user.followers.length}`);
  });
});