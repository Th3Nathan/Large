import React from 'react';
import AuthorBox from './comment_show_author_box';

class CommentShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      body: "",
    };
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateCommentHandler = this.updateCommentHandler.bind(this);
    this.deleteCommentHandler = this.deleteCommentHandler.bind(this);
  }
//handlers
  //delete
  //edit
  //like

  componentDidMount(){
    this.props.fetchSingleComment(parseInt(this.props.match.params.comment_id))
      .then(() => {this.setState({body: this.props.comment.body});
    });
  }

  toggleEditing(e){
    e.preventDefault();
    this.setState({
      editing: this.state.editing ? false : true,
      body: this.props.comment.body
    });
  }

  handleChange(e){
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }

  updateCommentHandler(e){
    e.preventDefault();
    let updated = this.props.comment;
    updated.body = this.state.body;
    this.props.updateComment(updated, updated.id)
      .then(() => {this.setState({editing: false});})
      .then(() => { this.props.fetchSingleComment(updated.id);});
  }

  deleteCommentHandler(e){
    e.preventDefault();
    this.props.destroyComment(this.props.comment.id)
      .then(this.props.history.push(`/stories/${this.props.comment.story_id}`));
  }

  render(){
    if (!this.props.comment) return null;

    let editButton;
    let confirmButton;
    if (this.props.isLoggedUser) {
      if (this.state.editing){
        editButton = (
          <a onClick={ this.updateCommentHandler }  href="#" className="lock">
            <i className=" fa fa-check-circle-o icon-unlock"></i>
            <i className=" fa fa-check-circle icon-lock"></i>
          </a>
        );
        confirmButton = (
          <a onClick={ this.toggleEditing } href="#" className="lock">
            <i className=" fa fa-times-circle-o icon-unlock"></i>
            <i className=" fa fa-times-circle icon-lock"></i>
          </a>
        );
      }  else {
        editButton = (
          <a onClick={ this.toggleEditing } href="#" className="lock">
            <i className=" fa fa-pencil-square-o icon-unlock"></i>
            <i className=" fa fa-pencil-square icon-lock"></i>
          </a>
        );
        confirmButton = (
          <a onClick={ this.deleteCommentHandler } href="#" className="lock">
            <i className=" fa fa-trash-o icon-unlock"></i>
            <i className=" fa fa-trash icon-lock"></i>
          </a>
        );
      }
    }

    let disabled = this.state.editing ? false : true;

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
          followPresent={this.props.comment.author.id !== this.props.currentUser.id}
        />

      <div className="comment-wrap">
        <input onChange={this.handleChange} disabled={disabled} className="show-body" type="text" value={this.state.body}></input>
      </div>

      <div className="comment-footer show-footer">
        <div className="comment-like-wrapper">
          <a href="/" className="lock comment-lock" id="comment-heart-unclicked">
            <i className="fa fa-heart icon-lock comment-icon"></i>
            <i className="fa fa-heart-o icon-unlock comment-icon"></i>
          </a>
          <span className="comment-num-likes">9</span>
        </div>
        <div className="comment-author-box-icons">
          { editButton }
          { confirmButton }
          <a href="#" className="lock">
            <i className=" fa fa-bookmark-o icon-unlock"></i>
            <i className=" fa fa-bookmark icon-lock"></i>
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
