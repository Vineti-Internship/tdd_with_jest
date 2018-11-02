import React from 'react';

export default
class GithubData extends React.PureComponent {
  render(){
    const {data} = this.props;
    const {
      userName,
      email,
      followers
    } = data;

    return(
      <div>
        <p className="user_name">User Name: {userName}</p>
        <p className="email">Email: {email}</p>
        <p className="followers">Followers: {followers.length}</p>
      </div>
    );
  }
};