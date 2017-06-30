import React from 'react';
import { Link } from 'react-router-dom';

class StoryAuthorBox extends React.Component {

  constructor(props){
    super(props);
    this.follow = this.follow.bind(this);
    this.unFollow = this.unFollow.bind(this);
  }

  readTime(){
    return `${Math.floor(this.props.story.length / 1375)} minute read`;
  }

  truncateDescription(){
    if (!this.props.author.bio) return null;
    if (this.props.author.bio.length > 67){
      return this.props.author.bio.slice(0, 67) + "...";
    }
    else {
      return this.props.author.bio;
    }
  }

  follow(e){
    e.preventDefault();
    this.props.follow(this.props.author_id).then(() => this.props.refetch());
  }

  unFollow(e){
    e.preventDefault();
    this.props.unFollow(this.props.author_id);
  }

  render (){

    let followButton;
    // if (this.props.author_id !== this.props.currentUser.id){
    //   if (this.props.author.followed_by_current_user){
    //     followButton = <span onClick={this.unFollow} className="story-author-box-unfollow">Unfollow</span>;
    //   }
    //   else {
    //
    //     followButton = <span onClick={this.follow} className="story-author-box-follow">Follow</span>;
    //   }
    // }

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
          { followButton }
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
