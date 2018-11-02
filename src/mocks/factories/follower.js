import { Factory } from 'rosie';
import faker from 'faker';

Factory.define('follower')
  .attr('userName', faker.internet.userName())
  .attr('name', faker.name.findName());
