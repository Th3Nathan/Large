import React from 'react';
import { Link } from 'react-router-dom';


class ShareBar extends React.Component {
  render(){
    return(
      <section id="share-bar">
        <h1 id="share-bar-title">SHARE</h1>
        <a href="#" className="lock" id="heart-unclicked">
          <i className=" fa fa-heart icon-lock"></i>
          <i className=" fa fa-heart-o icon-unlock"></i>
        </a>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <a href="#" className="lock">
          <i className="fa fa-bookmark icon-lock"></i>
          <i className="fa fa-bookmark-o icon-unlock"></i>
        </a>
      </section>
    );
  }
}

export default ShareBar;
