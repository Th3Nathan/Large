import React from 'react';
import AuthorBox from './comment_author_box';

class Comment extends React.Component {
  render(){
    return(
      <section className="comment">
        <AuthorBox
          author={this.props.author}
          date={this.props.date}
          author_image={this.props.author_image}
        />
      <h1>{this.props.body}</h1>
      </section>
    );
  }
}

export default Comment;
