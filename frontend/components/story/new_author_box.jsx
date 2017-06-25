import React from 'react';
import { Link } from 'react-router-dom';

class NewAuthorBox extends React.Component {

  truncateDescription(){
    if (!this.props.currentUser.bio) return "";
    if (this.props.currentUser.bio.length > 100){
      return this.props.currentUser.bio.slice(0, 97) + "...";
    }
    else {
      return this.props.currentUser.bio;
    }
  }
  render (){
    return (
      <div className="story-author-box">
        <div className="story-author-box-image">
          <Link to={`users/${this.props.currentUser.id}`}>
            <img src={this.props.currentUser.image_url}></img>
          </Link>
        </div>
        <div className="story-author-box-info">
          <Link to={`/users/${this.props.currentUser.id}`}>
            <p className="story-author-box-username">{this.props.currentUser.username}
            </p>
          </Link>
          <div className="story-author-box-bio">{this.truncateDescription()}</div>
        </div>
      </div>
    );
  }
}

export default NewAuthorBox;
