import React from 'react';
import { Link } from 'react-router-dom';

class AuthorBox extends React.Component {

  readTime(){
    return `${Math.floor(this.props.story.length / 1375)} minutes`;
  }

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
            <span className="author-box-dot">.</span>
            <h4 className="author-box-text">{this.readTime()}</h4>
          </div>
        </div>
        <div className="author-box-icons">
          <a href="#" className="lock">
            <i className=" fa fa-bookmark icon-lock"></i>
            <i className=" fa fa-bookmark-o icon-unlock"></i>
          </a>
          <a href="#" className="lock">
            <i className="fa fa-angle-down icon-unlock"></i>
            <i className="fa fa-angle-down icon-lock"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default AuthorBox;
