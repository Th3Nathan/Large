import React from 'react';
import { Link } from 'react-router-dom';
import StoryAuthorBox from './story_author_box';

class NewStory extends React.Component {
  render(){
    return (
      <section>
      <NewAuthorBox
        author={this.props.currentUser}
      />
      </section>
    );
  }
}

export default NewStory;
