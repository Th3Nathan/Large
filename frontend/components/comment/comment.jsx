import React from 'react';
import AuthorBox from './comment_author_box';
import { withRouter } from 'react-router-dom';

class Comment extends React.Component {
  constructor(props){
    super(props);
    this.routeToShow = this.routeToShow.bind(this);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike(e){
    e.preventDefault();
    const newAttributes = [{user_id: this.props.userId, likeable_id: this.props.comment.id, likeable_type: "Comment"}];
    this.props.updateCommentLikes(newAttributes, this.props.comment.id)
      .then(() => this.props.fetchSingleComment(this.props.comment.id));
  }

  removeLike(e){
    e.preventDefault();
    const newAttributes = [{id: this.props.comment.like_id, _destroy: true}];
    this.props.updateCommentLikes(newAttributes, this.props.comment.id)
      .then(() => this.props.fetchSingleComment(this.props.comment.id));
  }
  routeToShow(e){
    e.preventDefault();
    this.props.history.push(`/comments/${this.props.comment.id}`);
  }
  render(){


    let heart;
    if (this.props.comment.liked_by_current_user){
        heart = (
        <div onClick={this.removeLike} className="comment-like-wrapper">
          <a href="/" className="lock" id="heart-unclicked">
            <i className="fa fa-heart icon-lock comment-icon"></i>
            <i className="fa fa-heart icon-unlock comment-icon"></i>
          </a>
        </div>
      );
    } else {
      heart = (
        <div onClick={this.addLike} className="comment-like-wrapper">
          <a href="/" className="lock" id="heart-unclicked">
            <i className="fa fa-heart icon-lock comment-icon"></i>
            <i className="fa fa-heart-o icon-unlock comment-icon"></i>
          </a>
        </div>
      );
    }


    return(
      <section className="comment">
        <AuthorBox
          author={this.props.comment.author}
          date={this.props.comment.date}
          author_image={this.props.comment.author_image}
        />
      <div onClick={this.routeToShow} className="comment-body-wrapper">
          <p className="comment-body">{this.props.comment.body}</p>
        </div>
        <div className="comment-footer">
          { heart }
            <a className="comment-like-count">
              {`${this.props.comment.like_count}`}
            </a>
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
