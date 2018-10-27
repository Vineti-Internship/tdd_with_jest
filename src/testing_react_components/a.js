import React from 'react';

export class Child extends React.PureComponent {
  render(){
    return(
      <h1>{this.props.n}</h1>
    );
  }
};

export class Parent extends React.PureComponent {
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