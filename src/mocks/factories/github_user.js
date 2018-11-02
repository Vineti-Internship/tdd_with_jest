import { Factory } from 'rosie';
import faker from 'faker';

Factory.define('githubUser')
  .attr('userName', faker.internet.userName())
  .attr('email', faker.internet.email())
  .attr('followers', Factory.buildList('follower', 5));
