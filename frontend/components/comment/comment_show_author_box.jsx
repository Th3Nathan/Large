import React from 'react';
import { Link } from 'react-router-dom';

class CommentShowAuthorBox extends React.Component {

  readTime(){
    if (!this.props.comment) return null;
    return `${Math.floor(this.props.comment.body.length / 1375)} minute read`;
  }

  truncateDescription(){
    if (!this.props.comment.author.bio) return null;
    if (this.props.comment.author.bio.length > 60){
      return this.props.comment.author.bio.slice(0, 57) + "...";
    }
    else {
      return this.props.comment.author.bio;
    }
  }


  render (){
    let followComponent;
    if (this.props.followPresent){
      followComponent = <span className="comment-show-author-box-follow">Follow</span>;
    }

    return (
      <div className="comment-show-author-box">
        <div className="comment-show-author-box-image">
          <Link to={`users/${this.props.comment.author.id}`}>
            <img src={this.props.comment.author_image}></img>
          </Link>
        </div>
        <div className="comment-show-author-box-info">
          <Link to={`/users/${this.props.comment.author.id}`}>
            <p className="comment-show-author-box-username">{this.props.comment.author.username}
            </p>
          </Link>
          { followComponent }
          <div className="comment-show-author-box-bio">{this.truncateDescription()}</div>
          <div className="comment-show-author-box-datetime">
            <h4 className="comment-show-author-box-text">{this.props.comment.date}</h4>
            <span className="comment-show-author-box-dot">.</span>
            <h4 className="comment-show-author-box-text">{this.readTime()}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentShowAuthorBox;
