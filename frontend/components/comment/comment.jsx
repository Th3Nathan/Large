import React from 'react';
import AuthorBox from './comment_author_box';
import { withRouter } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props){
    super(props);
    this.routeToShow = this.routeToShow.bind(this);
  }

  routeToShow(e){
    e.preventDefault();
    this.props.history.push(`/comments/${this.props.comment_id}`);
  }
  render(){
    return(
      <section className="comment">
        <AuthorBox
          author={this.props.author}
          date={this.props.date}
          author_image={this.props.author_image}
        />
      <div onClick={this.routeToShow} className="comment-body-wrapper">
          <p className="comment-body">{this.props.body}</p>
        </div>
        <div className="comment-footer">
          <div className="comment-like-wrapper">
            <a href="/" className="lock comment-lock" id="comment-heart-unclicked">
              <i className="fa fa-heart icon-lock comment-icon"></i>
              <i className="fa fa-heart-o icon-unlock comment-icon"></i>
            </a>
            <span className="comment-num-likes">9</span>
          </div>
          <div className="comment-author-box-icons">
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
      </section>
    );
  }
}

export default withRouter(Comment);
