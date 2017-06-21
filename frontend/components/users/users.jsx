import React from "react";

class Users extends React.Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  render(){
    const users = this.props.users.map(user => {
      return (
        <li key={user.id}>{user.username}<img src={user.image_url}/></li>
      );
    });
  return (
  <div>
    <h2>Hello from the users list</h2>
    {users}
  </div>
  );
  }
}

export default Users;
