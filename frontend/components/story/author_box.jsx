import React from 'react';

class AuthorBox extends React.Component {
  render (){
    return (
      <div className="author-box">
        <div className="author-box-image">
          <img src={this.props.author.image_url}></img>
        </div>
        <div className="author-box-info">
          <h4 className="author-box-username">{this.props.author.username}</h4>
          <div className="author-box-datetime">
            <h4 className="author-box-text">{this.props.date}</h4>
            <span className="author-box-dot">.</span>
            <h4 className="author-box-text">{this.props.readTime}</h4>
          </div>
        </div>
        <div className="author-box-icons">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default AuthorBox;
