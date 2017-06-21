import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.currentUser){
      return (
        <section>
          <h3 id="greeting">Hello, {this.props.currentUser.username}!</h3>
          <button id="signout" onClick={this.props.logOut}>Sign Out</button>
        </section>
      );
    } else {
      return (
        <section>
          <Link to="/signup">
            Sign Up
          </Link>
          <span>&nbsp;/&nbsp;</span>
          <Link to="/signin">
            Sign In
          </Link>
        </section>
      );
    }
  }
}

export default Greeting;
