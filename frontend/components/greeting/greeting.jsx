import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.toProfile = this.toProfile.bind(this);
  }

  toProfile(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  render(){
    if (this.props.currentUser){
      let thumbnail = (<img onClick={this.toProfile} id="header-thumbnail" src={this.props.currentUser.image_url} />);
      return (
        <section>
          <h3 onClick={this.toProfile} id="greeting">Hello, {this.props.currentUser.username}!</h3>
          {thumbnail}
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
