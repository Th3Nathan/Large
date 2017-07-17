import React from 'react';
import { Link } from 'react-router-dom';

class AuthorBox extends React.Component {

  constructor(props){
    super(props);
    this.addBookmark = this.addBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
  }

  readTime(){
    return `${Math.floor(this.props.story.length / 1375)} minutes`;
  }

  addBookmark(e){
    e.preventDefault();
    const newAttributes = [{user_id: this.props.user_id, story_id: this.props.story.id}];
    this.props.updateStoryBookmarks(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }

  removeBookmark(e){
    e.preventDefault();
    const newAttributes = [{id: this.props.story.bookmark_id, _destroy: true}];
    this.props.updateStoryBookmarks(newAttributes, this.props.story.id)
      .then(() => this.props.fetchSingleStory(this.props.story.id));
  }


  render (){
    if (!this.props.story) return null;

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

    return (
      <div className="author-box">
        <div className="author-box-image">
          <img src={this.props.story.author.image_url}></img>
        </div>
        <div className="author-box-info">
          <Link to={`/users/${this.props.story.author.id}`}>
            <h4 className="author-box-username">{this.props.story.author.username}</h4>
          </Link>
          <div className="author-box-datetime">
            <h4 className="author-box-text">{this.props.story.date}</h4>
            <span className="author-box-dot">.</span>
            <h4 className="author-box-text">{this.readTime()}</h4>
          </div>
        </div>
        <div className="author-box-icons">
          {bookmark}
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
