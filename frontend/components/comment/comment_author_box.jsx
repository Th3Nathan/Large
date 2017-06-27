import React from 'react';
import { Link } from 'react-router-dom';

class AuthorBox extends React.Component {

  render (){
    return (
      <div className="author-box">
        <div className="author-box-image">
          <img src={this.props.author.image_url}></img>
        </div>
        <div className="author-box-info">
          <Link to={`/users/${this.props.author_id}`}>
            <h4 className="author-box-username">{this.props.author.username}</h4>
          </Link>
          <div className="author-box-datetime">
            <h4 className="author-box-text">{this.props.date}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorBox;
