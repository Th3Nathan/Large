import React from 'react';
import AuthorBox from './comment_show_author_box';

class CommentShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      body: "",
    };
  }
//handlers
  //delete
  //edit
  //like

  componentDidMount(){
    this.props.fetchSingleComment(parseInt(this.props.match.params.comment_id));
  }

  render(){
    if (!this.props.comment) return null;
    let userActions;
    if (this.props.isLoggedUser) {
      userActions = (
            <div className="user-buttons">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
    }

    return (
      <section className="comment-show">
        <AuthorBox
          comment={this.props.comment}
        />

      <div className="comment-wrap">
        <p className="comment-body comment-show-body">{this.props.body}</p>
      </div>

      { userActions }

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

export default CommentShow;
