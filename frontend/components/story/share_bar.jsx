import React from 'react';
import { Link } from 'react-router-dom';


class ShareBar extends React.Component {

  constructor(props){
    super(props);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.addBookmark = this.addBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
  }

  addLike(e){
    e.preventDefault();
    const newAttributes = [{user_id: this.props.userId, likeable_id: this.props.story.id, likeable_type: "Story"}];
    this.props.updateStoryLikes(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }

  removeLike(e){
    e.preventDefault();
    const newAttributes = [{id: this.props.story.like_id, _destroy: true}];
    this.props.updateStoryLikes(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }

  addBookmark(e){
    e.preventDefault();
    const newAttributes = [{user_id: this.props.userId, story_id: this.props.story.id}];
    this.props.updateStoryBookmarks(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }

  removeBookmark(e){
    e.preventDefault();
    const newAttributes = [{id: this.props.story.bookmark_id, _destroy: true}];
    this.props.updateStoryBookmarks(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }

  render(){


    let heart;
    if (this.props.story.liked_by_current_user){
        heart = (
        <div onClick={this.removeLike} className="like-wrapper">
          <a href="/" className="lock" id="heart-unclicked">
            <i className="fa fa-heart icon-lock share-icon"></i>
            <i className="fa fa-heart icon-unlock share-icon"></i>
          </a>
        </div>
      );
    } else {
      heart = (
        <div onClick={this.addLike} className="like-wrapper">
          <a href="/" className="lock" id="heart-unclicked">
            <i className="fa fa-heart icon-lock share-icon"></i>
            <i className="fa fa-heart-o icon-unlock share-icon"></i>
          </a>
        </div>
      );
    }
    let bookmark;
    if (this.props.story.bookmarked_by_current_user){
      bookmark = (
        <a onClick={this.removeBookmark} className="">
          <i className="fa fa-bookmark icon-unlock share-icon"></i>
        </a>
      );
    } else {
      bookmark = (
        <a onClick={this.addBookmark} className="">
          <i className="fa fa-bookmark-o icon-unlock share-icon"></i>
        </a>
      );
    }
    const twitterUrl =
    `https://twitter.com/intent/tweet?text=I%20love%20the%20story%20${this.props.story.title}%20by%20${this.props.story.author.username}&url=http://large-blog.site/${this.props.story.id}`;
    return(
      <section id="share-bar">
        <h1 id="share-bar-title">SHARE</h1>
        { heart }

        <a className="story-like-count" href="">
          {`${this.props.story.like_count}`}
        </a>

        <a target="_blank" className="twitter-share-button"
          href={twitterUrl}>
        <i className="fa fa-twitter share-icon" aria-hidden="true"></i></a>

      

        {bookmark}
      </section>
    );
  }
}

export default ShareBar;
