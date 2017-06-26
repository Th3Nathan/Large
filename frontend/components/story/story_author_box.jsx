import React from 'react';
import { Link } from 'react-router-dom';

class StoryAuthorBox extends React.Component {

  readTime(){
    return `${Math.floor(this.props.story.length / 1375)} minute read`;
  }

  truncateDescription(){
    if (!this.props.author.bio) return null;
    if (this.props.author.bio.length > 100){
      return this.props.author.bio.slice(0, 97) + "...";
    }
    else {
      return this.props.author.bio;
    }
  }


  render (){
    return (
      <div className="story-author-box">
        <div className="story-author-box-image">
          <Link to={`users/${this.props.author_id}`}>
            <img src={this.props.author.image_url}></img>
          </Link>
        </div>
        <div className="story-author-box-info">
          <Link to={`/users/${this.props.author_id}`}>
            <p className="story-author-box-username">{this.props.author.username}
            </p>
          </Link>
          <span className="story-author-box-follow">Follow</span>
          <div className="story-author-box-bio">{this.truncateDescription()}</div>
          <div className="story-author-box-datetime">
            <h4 className="story-author-box-text">{this.props.date}</h4>
            <span className="story-author-box-dot">.</span>
            <h4 className="story-author-box-text">{this.readTime()}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryAuthorBox;
