import React from 'react';
import Child from './stateless';

export default
class Parent extends React.PureComponent {
  state = {
    n: 0
  };

  clickHandler = () => this.setState(state => ({n: state.n+1}));

  render(){
    return(
      <React.Fragment>
        <Child n={this.state.n} />
        <button onClick={this.clickHandler}>Click</button>
      </React.Fragment>
    );
  }
};