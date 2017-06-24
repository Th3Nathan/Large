import React from 'react';
import { Link } from 'react-router-dom';
import NewAuthorBox from './new_author_box';

class NewStory extends React.Component {
  render(){
    return (
      <section>
      <NewAuthorBox
        currentUser={this.props.currentUser}
      />
      </section>
    );
  }
}

export default NewStory;
