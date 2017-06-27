import React from 'react';
import AuthorBox from './comment_author_box';
import Comment from './comment';

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
        { comments }
      </section>
    );
  }
}

export default CommentList;
