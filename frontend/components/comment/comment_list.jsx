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
          author={comment.author}
          date={comment.date}
          author_image={comment.author_image}
          body={comment.body}
          comment_id={comment.id}
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
