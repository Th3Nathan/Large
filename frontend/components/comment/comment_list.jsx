import React from 'react';
import AuthorBox from './comment_author_box';
import Comment from './comment';
import NewComment from './new_comment';

class CommentList extends React.Component {
  render(){
    const comments = this.props.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          userId={this.props.currentUser.id}
          updateCommentLikes={this.props.updateCommentLikes}
          fetchSingleComment={this.props.fetchSingleComment}
        />
      );
    });


    return(
      <section className="comment-list">
        < NewComment
          createComment={this.props.createComment}
          currentUser={this.props.currentUser}
          storyId={parseInt(this.props.match.params.story_id)}
        />
        { comments }
      </section>
    );
  }
}

export default CommentList;
