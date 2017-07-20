import React from 'react';
import AuthorBox from './author_box';
import { Link } from 'react-router-dom';

class Blurb extends React.Component {
  readTime(){
    return `${Math.floor(this.props.story.body.length / 1375)} minutes`;
  }

  render (){
    const backgroundImage = {"backgroundImage": `url(${this.props.story.image_url})`};
    return (
      <div className="blurb">
        <div style={backgroundImage} className="blurb-image"></div>
        <div className="blurb-text">
          <Link to={`/stories/${this.props.story.id}`}>
            <h3 className="blurb-title">{this.props.story.title}</h3>
            <p className='blurb-description'>{this.props.story.description}</p>
          </Link>
          <AuthorBox
            removeBookmark={this.props.removeBookmark === true}
            updateStoryBookmarks={this.props.updateStoryBookmarks}
            story={this.props.story}
            user_id={this.props.user_id}
            fetchSingleStory={this.props.fetchSingleStory}
          />
        </div>
      </div>
    );
  }
}

export default Blurb;
