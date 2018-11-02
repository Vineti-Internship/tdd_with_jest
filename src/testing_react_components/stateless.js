import React from 'react';

// export class Child extends React.PureComponent {
//   render(){
//     return(
//       <h1>{this.props.n}</h1>
//     );
//   }
// };

const Child = ({n}) => (
  <h1>{n}</h1>
);

export default Child;