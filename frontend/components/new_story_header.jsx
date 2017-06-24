import React from 'react';
import { Link } from 'react-router-dom';

const NewStoryDropdown = () => {
  return (
    <ul className="new-story-dropdown">
      <li className="new-story-dropdown-title">Actions</li>
      <li className="new-story-dropdown-item">Delete story</li>
    </ul>
  );
};

class NewStoryHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDropdown: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(e){
    this.setState({
      showDropdown: this.state.showDropdown ? false : true
    });
  }

  render(){
    return (
      <section className="new-story-header">
        <div className="new-story-share"><h5>Share</h5></div>
        <div className="new-story-publish">
          <h5>Publish</h5>
          <i className="fa fa-angle-down header-fa" aria-hidden="true"></i>
        </div>
        <i onClick={this.toggleDropdown} className="fa fa-ellipsis-h header-fa" aria-hidden="true"></i>

        {this.state.showDropdown ?
          <NewStoryDropdown /> : null
        }
      </section>
    );
  }
}

export default NewStoryHeader;
