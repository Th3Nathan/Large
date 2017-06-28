import React from 'react';

class NewComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      focused: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFirstFocus = this.handleFirstFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    this.setState({body: e.target.value});
  }

  handleFirstFocus(e){
    e.preventDefault();
    this.setState({focused: true});
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = {};
    comment.body = this.state.body;
    comment.story_id = this.props.storyId;
    comment.author_id = this.props.currentUser.id;
    this.setState(
      {
        focused: false,
        body: ""
      });
    this.props.createComment(comment);
  }

  render(){
    let submitButton;
    if (this.state.focused) {
      submitButton = (
        <button
          className="new-comment-submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      );
    }
    return(
      <section className="new-comment">
        <textarea
          className="new-comment-input"
          onFocus={this.handleFirstFocus}
          onChange={this.handleChange}
          value={this.state.body}
          placeholder="Enter a comment"
          type="text"
        >
        </textarea>
        <br />
        { submitButton }
      </section>
    );
  }
}

export default NewComment;
