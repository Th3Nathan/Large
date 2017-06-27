import React from 'react';
import { Link } from 'react-router-dom';

class AuthorBox extends React.Component {

  render (){
    debugger
    return (
      <div className="author-box comment-author-box">
        <div className="author-box-image comment-author-box-image">
          <img src={this.props.author_image}></img>
        </div>
        <div className="author-box-info comment-author-box-info">
          <Link to={`/users/${this.props.author.id}`}>
            <h4 className="author-box-username comment-author-box-username">{this.props.author.username}</h4>
          </Link>
          <div className="author-box-datetime comment-author-box-datetime">
            <h4 className="author-box-text comment-author-box-text">{this.props.date}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorBox;
