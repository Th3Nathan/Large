import React from 'react';
import { Link } from 'react-router-dom';

class NewStoryHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="new-story-header">
        <div className="new-story-share"><h5>Share</h5></div>
        <div className="new-story-publish">
          <h5>Publish</h5>
          <i className="fa fa-angle-down header-fa" aria-hidden="true"></i>
        </div>
        <i className="fa fa-ellipsis-h header-fa" aria-hidden="true"></i>
      </section>
    );
  }
}

export default NewStoryHeader;
