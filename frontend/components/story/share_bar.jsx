import React from 'react';
import { Link } from 'react-router-dom';


class ShareBar extends React.Component {
  render(){
    return(
      <section id="share-bar">
        <h1 id="share-bar-title">SHARE</h1>
        <div className="like-wrapper">
        <a href="/" className="lock" id="heart-unclicked">
          <i className="fa fa-heart icon-lock share-icon"></i>
          <i className="fa fa-heart-o icon-unlock share-icon"></i>
        </a>
        </div>

        <a className="story-like-count" href="">
          {this.props.like_count}
        </a>

        <a href="">
          <i className="fa fa-twitter share-icon" aria-hidden="true"></i>
        </a>

        <a>
          <i className="fa fa-facebook share-icon" aria-hidden="true"></i>
        </a>

        <a href="#" className="lock">
          <i className="fa fa-bookmark icon-lock share-icon"></i>
          <i className="fa fa-bookmark-o icon-unlock share-icon"></i>
        </a>
      </section>
    );
  }
}

export default ShareBar;
